import express,{Router} from "express";
import ProductController from "../controller/productController";
import Authorization from "../middleware/verifytoken";

export default class ProductRouter {
    public router:Router;
    private controller: ProductController = new ProductController();
    private authenticate: Authorization = new Authorization()
    constructor() {
        this.router = express.Router();
        this.registerRoute();
    }
    public registerRoute () {
        this.router.post("/products", this.controller.getProducts);
        this.router.post("/product/new", this.authenticate.authorizeRoles("admin"), this.controller.createProducts);
        this.router.route("/products/:id")
                    .get( this.authenticate.verifyToken, this.controller.getSingleProduct)
                    .put( this.authenticate.verifyToken, this.controller.updateProduct)
                    .delete( this.authenticate.verifyToken, this.controller.deleteProduct);
    }
}

// export const router = express.Router();

// router.post("/register", (req, res, next)=>{
//     user.CreateUser(req, res, next)
// });
