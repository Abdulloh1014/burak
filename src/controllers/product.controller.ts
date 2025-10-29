
import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/comman";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";


const productService = new ProductService();

const productController: T = {};

  /** SPA **/


    /** SSR **/

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
      res.render("products");
       
    } catch(err) {
        console.log("Error, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
};


productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
        console.log("createNewProducts");
        console.log("req.files",req.files);

        if(!req.files?.length) 
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
          
        const data: ProductInput = req.body;
        data.productImages = req.files?.map(ele => {
            return ele.path.replace(/\\/g, "/");
         });

         await productService.createNewProduct(data);

         res.send(`<script> alert("Succesful creation!"); window.location.replace('admin/product/all') </script>`)

        
        
       } catch(err) {
        console.log("Error, createNewProducts", err);
        const message = 
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/product/all') </script>`)

    }
};



productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenroducts");

       
    } catch(err) {
        console.log("Error, updateChosenProduct", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
};



export default productController;