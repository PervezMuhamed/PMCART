import APIFeatures from "../utils/ApiFeatures";
import productModel from "../model/productModel";
import ErrorHandler from "../utils/errorHandler";

class ProductController {

    public getProducts=async(req, res, next)=>{
        try {
            const resPerPage =2;
            const apiFeatures = new APIFeatures(productModel.find(), req.query)
            .search()
            .filter()
            .sort()
            .limitFields()
            .pagination(resPerPage);
            const products = await apiFeatures.query;
            res.status(200).json({
                success:true,
                message:"product get Successfully",
                dataLength:products.length,
                data:products
            })
        } catch (error) {
            return error
        }
    }
    public createProducts = async(req, res, next)=>{

        try {
            req.body.user = req.user.id;
            const product= new productModel({...req.body});
            const saveproduct =await product.save();
            res.status(200).json({
                success:true,
                message:"Data Register Successfully",
                data:saveproduct
            })
        } catch (error) {
            next(error)
        }
    }    
    //Get Single Product - /api/v1/product/:id
    public getSingleProduct = async(req,res,next)=>{
        try {
        const singleProduct=await productModel.findById(req.params.id);
        if(!singleProduct) return next(new ErrorHandler("Product Not Found", 401));
        res.status(201).json({
            success:true,
            message:"product is got",
            data:singleProduct
        });
        } catch (error) {
            return error;
        }
    };
    //update Product - /api/v1/product/:id
    public updateProduct=async(req,res,next)=>{
        try {
            let product=await productModel.findById(req.params.id);
            if(!product) return next(new ErrorHandler("Product not Found", 401));
            product=await productModel.findByIdAndUpdate(req.params.id,
                {$set:req.body},{new:true, runValidators:true});
            res.status(200).json({
                success:true,
                message:"Data Updated Successfully",
                data:product,
            });
        } catch (error) {
            next(error)
        };
    };

//delete Product-/api/v1/product/:id
    public deleteProduct = async(req,res,next)=>{
        try {
            let product =await productModel.findById(req.params.id);
            if(!product) return next(new ErrorHandler(401,"Product Not Found"));
             product =await productModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                success:true,
                message:"Data Successfullly Deleted",
            })
        } catch (error) {
            return error;
        }
    };
}

export default ProductController;