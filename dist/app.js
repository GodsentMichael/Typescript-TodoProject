"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const config_1 = __importDefault(require("./db/config"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use('/todos', todoRoutes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default.sync().then(() => {
    console.log('Database synced successfully');
}).catch((err) => {
    console.log('Err', err);
});
//     console.log('Database synced successfully');
// }).catch((err) => {
//     console.log("Err", err);
// }
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
