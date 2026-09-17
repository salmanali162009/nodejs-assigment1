import express from "express";
import productsDetail from '../../data/productData.js'
const router = express.Router();


//get all products
router.get("/products",(req,res)=>{
    res.status(200).send({
        status: 200,
        message: "Products fetched successfully",
        products: productsDetail
    })
});
// get specific product
router.get("/products/:id",(req,res)=>{
    const id = req.params.id;
    const product = productsDetail.find((p)=>p.id == id);
    if (!product) {
        return res.status(404).send({
            status: 404,
            message: "Product not found"
        });
    }
    res.status(200).send({
        status: 200,
        message: "Product fetched successfully",
        product: product
    });
});

// add product
router.post("/products",(req,res)=>{
    if (!req.body.name || !req.body.price || !req.body.category || !req.body.stock) {
        return res.status(400).send({
            status: 400,
            message: "Missing required fields"
        });
    }
    const { name, price, category, stock } = req.body;
    const id = productsDetail.length + 1;
    const newProduct = { id, name, price, category, stock };
    productsDetail.push(newProduct);
    res.status(201).send({
        status: 201,
        message: "Product created successfully",
        product : newProduct,
    });
});



// delete product 
router.delete("/products/:id",(req,res)=>{
    const id = req.params.id;
    const index = productsDetail.findIndex((product)=>product.id == id)
    
    if (index == -1  || index === undefined) {
        return res.status(404).send({
            status: 404,
            message: "Product not found"
        });
    }
    productsDetail.splice(index,1)
    res.status(200).send({
        status: 200,
        message: "Product Deleted successfully",
    });
});

// update  product 
router.put("/products/:id",(req,res)=>{
    if (req.body.name == "" || req.body.price == "" || req.body.category == "" || req.body.stock == "") { 
        return res.status(400).send({
            status: 400, 
            message:'Missing required fields'
           })
      }

    const id = req.params.id;
    const index = productsDetail.findIndex((product)=>product.id == id)
    let {name , price , category , stock} = req.body;
    let changeProduct={
        id: Number(id),
        name, 
        price,
        category,
        stock
    }
    if (index == -1 || index == undefined) {
        return res.status(404).send({
            status: 404,
            message: "Product not found"
        });
    }
    productsDetail.splice(index,1,changeProduct)
    res.status(200).send({
        status: 200,
        message: "Product Updated successfully",
        product : changeProduct,
    });
});

  





export default router;