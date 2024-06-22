import { Document } from "mongoose";

interface Ireviews {
    name:string
    rating:string
    comment:string
}

export default interface Product extends Document {
    productName:string,
    price:number,
    description:number,
    rating:string
    images:{
        image:string
    }[]
    category:string
    seller:string
    stock:string
    numOfReviews:string
    Reviews: Array<Ireviews>
}