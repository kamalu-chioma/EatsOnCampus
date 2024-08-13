import { Router } from "express";
import { sample_foods } from "../data";
// import expressAsyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";
import asyncHandler from 'express-async-handler';


const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
       const foodsCount =await FoodModel.countDocuments(); 
       if (foodsCount > 0){
           res.send("seed is already done");
        
           return;}

       await FoodModel.create(sample_foods);
       res.send({message: "seeded successfully"});
      // res.send(sample_foods);
}));

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const foods = await FoodModel.find();
      res.send(foods);
    })
  );


router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const foods = await FoodModel.find({ name: { $regex: searchRegex } });
    res.send(foods);
  })
);

router.get(
    '/:foodId',
    asyncHandler(async (req, res) => {
      const food = await FoodModel.findById(req.params.foodId);
      res.send(food);
    })
  );


export default router;
