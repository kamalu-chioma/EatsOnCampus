import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { FoodModel } from "../models/food.model";
import { sample_foods } from "../data";
import { UserModel, User } from "../models/user.model";

const router = Router();

const HTTP_BAD_REQUEST = 400; // Add this line to define the constant

router.get("/seed", asyncHandler(
    async (req, res) => {
       const usersCount =await UserModel.countDocuments(); 
       if (usersCount > 0){
           res.send("seed is already done");
        
           return;}

       await UserModel.create(sample_users);
       res.send({message: "seeded successfully"});
      // res.send(sample_foods);
}));

router.post("/login", asyncHandler(
    async (req, res) => {
      const {email, password} = req.body;
      const user = await UserModel.findOne({email, password})
    
       if(user) {
        res.send(generateTokenReponse(user));
       }
       else{
         res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
       }
    
    }
  ))



  const generateTokenReponse = (user : User) => {
    const token = jwt.sign({
      id: user.id, email:user.email, isAdmin: user.isAdmin
    },process.env.JWT_SECRET!,{
      expiresIn:"30d"
    });
  
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token: token
    };
  }

export default router;