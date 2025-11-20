// for USER

import { Request, Response } from "express";
import { T } from "../libs/types/comman"
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

const memberService = new MemberService();
const authService = new AuthService();

// REACT loyihamiz uchun

const memberController: T = {};


memberController.Signup = async (req: Request, res: Response) => {
    try {
        console.log("Signup");

        const input: MemberInput = req.body,
         result: Member = await memberService.Signup(input);
         const token = await authService.createToken(result);
        console.log("token:=>", token)


        res.json({member: result});
    } catch(err) {
        console.log("Error, Signup", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
};


memberController.Login = async (req: Request, res: Response) => {
    try {
        console.log("Login");
        const input: LoginInput = req.body,
         result = await memberService.Login(input);
         const token = await authService.createToken(result);
         console.log("token:=>", token)
         // TODO: TOKENS AUTHENTICATION
         



        res.json({member: result});
    } catch(err) {
        console.log("Error, Login", err);
       if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
};





export default memberController;

