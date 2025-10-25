// for ADMIN

import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/comman";
import MemberService from "../models/Member.service";
import { AdminRequest, MemberInput, LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Error";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.render("Home");
        // send() || json() || redirect() || end() || render()
    } catch(err) {
        console.log("Error, goHome", err);
         res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("Signup");
    } catch(err) {
        console.log("Error, getSignup", err);
         res.redirect("/admin");
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("Login");
    } catch(err) {
        console.log("Error, getLogin", err);
        res.redirect("/admin");
    }
};



restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup");


        const newMember: MemberInput = req.body;      // req.body ichida foydalanuvchidan kelyotgan ma'lumotni olyabti
        newMember.memberType = MemberType.RESTAURANT;   // A'zoning turini RESTAURANT deb belgilash
        const result = await memberService.processSignup(newMember);   // Yangi a'zoni ro'yxatdan o'tkazish jarayoni
        // TODO: SESSIONS AUTHENTICATION


        req.session.member = result;  // browser cookis ichiga sidni saqlab kelyabti va session collectionga "result" ichidagi ma'lumotni saqledi
        req.session.save(function () {     // Sessiyani saqlab qo'yish
            res.send(result);         // Javob sifatida "result" ni clientga qaytarish
        });


        
    } catch(err) {
        console.log("Error, processSignup", err);
         const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/signup') </script>`);

        res.send(err);
    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");


        const input: LoginInput = req.body
        const result = await memberService.processLogin(input);
       // TODO: SESSIONS AUTHENTICATION

        req.session.member = result;  
        req.session.save(function () {
            res.send(result);
        });
    } catch(err) {
        console.log("Error, processLogin", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/login') </script>`);

    }

};


restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("logout");

        req.session.destroy(function () {
            res.redirect("/admin");
        })


    } catch(err) {
        console.log("Error, logout", err);
       res.redirect("/admin");    // redirect() — foydalanuvchini boshqa URL manzilga yo‘naltiradi.
    }

};

restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession");
      if(req.session?.member) 
      res.send(`<script> alert("${req.session.member.memberNick}")</script>`);
      else res.send(`<script> alert("${Message.NOT_AUTENTICATED}")</script>`);
        } catch(err) {
        console.log("Error, checkAuthSession", err);
        res.send(err);
    }
};



restaurantController.verifyRestaurant = (
    req: AdminRequest, res: Response, next: NextFunction
) => {
    
  if(req.session?.member?.memberType === MemberType.RESTAURANT) {
  req.member = req.session.member;
    next();
    } else {
    const message = Message.NOT_AUTENTICATED;
    res.send(`<script> alert("${message}"); window.location.replace('/admin/login'); </script>`);
    }
         
};



export default restaurantController;

