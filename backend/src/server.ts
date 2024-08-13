import dotenv from "dotenv";
dotenv.config();
// process.env.MONGO_URL;

import express from "express";

import cors from "cors";
import { sample_foods, sample_users } from "./data";
import jwt from "jsonwebtoken";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import { dbConnect } from "./configs/database.config";

dbConnect();

const app = express();

// Enable CORS for all requests port 4200 so that the Angular frontend can access it
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

// app.get("/api/foods", (req, res) => {
//     res.send(sample_foods);
// });


// app.get("/api/foods/search/:searchTerm", (req, res) => {
//     const searchTerm = req.params.searchTerm;
//     const foods =  sample_foods
//     .filter(food => food.name.toLowerCase()
//     .includes(searchTerm.toLowerCase()));
//     res.send(foods);
// });

// app.get("/api/foods/:foodId", (req, res) => {
//     const foodId = req.params.foodId;
//     const food = sample_foods.find(food => food.id === foodId);
//     res.send(food);
    
// });


// app.post("/api/users/login", (req, res) => {
//     // const body = req.body;
//     const { email, password } = req.body;
//     const user = sample_users.find(user => user.email === email && user.password === password);

//     if (user) {
//         res.send(generateTokenResponse(user));
//     } else {
//         res.status(401).send({ message: "Invalid email or password" });
//     }
// });

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({ email: user.email, isAdmin:user.isAdmin}, "secret", { expiresIn: "30d" });

    user.token = token;
    return user;
} 

// }

const port= 5000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


