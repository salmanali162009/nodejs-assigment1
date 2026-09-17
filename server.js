import express from "express";
import cors from "cors";
import userRoutes from "./routes/user/user.js";
import productRoutes from "./routes/products/product.js";
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/" , (req,res,next)=>{
    if(req?.query?.apikey == '1234'){
        next();
    }
    console.log(" middleware is running");
    
});

app.use("/api",userRoutes);
app.use("/api",productRoutes);



app.get("/",(req,res)=>{
    res.send("Hello World")
})






app.listen(PORT,()=>{
    console.log(`Server is running on port = ${PORT}`)
})