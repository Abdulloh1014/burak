//  restaurantController va memberController uchun
//  hizmat qiladigan Service Module

import MemberModel from "../schema/Member.model";
import { Member, MemberInput, LoginInput, MemberUpdateInput } from "../libs/types/member";
import Errors, { HttpCode, Message} from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from "../libs/config";


class MemberService {
    private readonly memberModel;
    constructor () {
        this.memberModel = MemberModel;
    }

/** SPA */

 public async Signup(input: MemberInput): Promise<Member>{

     const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);


    try {
        const result = await this.memberModel.create(input);
    result.memberPassword = "";
      return result.toJSON();
    } catch(err) {
        console.error("Error, model:signup", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
 }

  public async Login(input: LoginInput) : Promise<Member> {
    // Foydalanuvchini memberNick bo‘yicha qidirish
     
    // TODO: Consider member status later

    const member = await this.memberModel
    .findOne(
        {memberNick: input.memberNick},    // database ichida memberNick bilan mos keluvchi foydalanuvchini qidiradi
        {memberNick: 1, memberPassword: 1}    // faqat memberNick va memberPassword maydonlarini olish (1 = olinsin)
    )  .exec();                              // .exec() queryni bajaradi va natija oladi
       if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

     // Kiritilgan parolni database'dagi parol bilan solishtirish
    const isMatch = await bcrypt.compare(
        input.memberPassword,    // foydalanuvchi kiritgan parol
        member.memberPassword     // database'dagi hash qilingan parol
    );

  if(!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
   }

   return await this.memberModel.findById(member._id).lean().exec();
  }





/** SSR */
 public async processSignup(input: MemberInput): Promise<Member>{
    const exist = await this.memberModel
    .findOne({memberType: MemberType.RESTAURANT})
    .exec();
    if ( exist)  throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);



    try {
        const result = await this.memberModel.create(input);
    result.memberPassword = "";
      return result;
    } catch(err) {
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
 }

  public async processLogin(input: LoginInput) : Promise<Member> {
    // Foydalanuvchini memberNick bo‘yicha qidirish
    const member = await this.memberModel
    .findOne(
        {memberNick: input.memberNick},    // database ichida memberNick bilan mos keluvchi foydalanuvchini qidiradi
        {memberNick: 1, memberPassword: 1}    // faqat memberNick va memberPassword maydonlarini olish (1 = olinsin)
    )  .exec();                              // .exec() queryni bajaradi va natija oladi
       if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

     // Kiritilgan parolni database'dagi parol bilan solishtirish
    const isMatch = await bcrypt.compare(
        input.memberPassword,    // foydalanuvchi kiritgan parol
        member.memberPassword     // database'dagi hash qilingan parol
    );

  if(!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
   }

   return await this.memberModel.findById(member._id).exec();
  }


   public async getUsers(): Promise<Member[]>{
    const result = await this.memberModel
    .find({ memberType: MemberType.USER})
    .exec();
    
    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
    
 }

    public async updateChosenUser(input: MemberUpdateInput): Promise<Member> {
     input._id = shapeIntoMongooseObjectId(input._id); 
    const result = await this.memberModel
    .findByIdAndUpdate({ _id: input._id}, input, { new: true })
    .exec();
    
    if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
    
 }

}

export default MemberService;