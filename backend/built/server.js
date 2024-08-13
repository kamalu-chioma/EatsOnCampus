"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var data_1 = require("./data");
var app = (0, express_1.default)();
// Enable CORS for all requests port 4200 so that the Angular frontend can access it
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:"]
}));
app.get("/api/foods", function (req, res) {
    res.send(data_1.sample_foods);
});
app.get("/api/foods/search/:searchTerm", function (req, res) {
    var searchTerm = req.params.searchTerm;
    var foods = data_1.sample_foods
        .filter(function (food) { return food.name.toLowerCase()
        .includes(searchTerm.toLowerCase()); });
    res.send(foods);
});
app.get("/api/foods/:foodId", function (req, res) {
    var foodId = req.params.foodId;
    var food = data_1.sample_foods.find(function (food) { return food.id === foodId; });
    res.send(food);
});
var port = 5000;
app.listen(port, function () {
    console.log("Server started on http://localhost:".concat(port));
});
