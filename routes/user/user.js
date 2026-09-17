import express from "express";
import userDetail from '../../data/userData.js'
const router = express.Router();


//get all users
router.get("/user",(req,res)=>{
    res.status(200).send({
        status: 200,
        message: "Users fetched successfully",
        users: userDetail
    })
});
// get specific user
router.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    const user = userDetail.find((user)=>user.id == id);
    if (!user) {
        return res.status(404).send({
            status: 404,
            message: "User not found"
        });
    }
    res.status(200).send({
        status: 200,
        message: "User fetched successfully",
        user: user
    });
});

// add user 
router.post("/user",(req,res)=>{
    if (!req.body.name || !req.body.email || !req.body.age) {
        return res.status(400).send({
            status: 400,
            message: "Missing required fields"
        });
    }
    const { name, email, age } = req.body;
    const id = userDetail.length + 1;
    const newUser = { id, name, email, age };
    userDetail.push(newUser);
    res.status(201).send({
        status: 201,
        message: "User created successfully",
        user : newUser,
    });
});



// delete user 
router.delete("/user/:id",(req,res)=>{
    const id = req.params.id;
    const index = userDetail.findIndex((user)=>user.id == id)
    if (index == -1) {
        return res.status(404).send({
            status: 404,
            message: "User not found"
        });
    }
    userDetail.splice(index,1)
    res.status(200).send({
        status: 200,
        message: "User Deleted successfully",
    });
});

// update  user 
router.put("/user/:id",(req,res)=>{
    if(req.body.name == "" || req.body.email == "" || req.body.age == ""){
        return res.status(400).send({
            status: 400, 
            message:'Missing required fields'
           })
        }
    const id = req.params.id;
    const index = userDetail.findIndex((user)=>user.id == id)
    let {name , email , age} = req.body;
    let changeUser={
        id: Number(id),
        name, 
        email,
        age
    }
    if (index == -1 || index === undefined) {
        return res.status(404).send({
            status: 404,
            message: "User not found"
        });
    }
    userDetail.splice(index,1,changeUser)
    res.status(200).send({
        status: 200,
        message: "User Updated successfully",
        user : changeUser,
    });
});






export default router;