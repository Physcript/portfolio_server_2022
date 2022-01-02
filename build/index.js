"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const http_1 = require("http");
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const corsOptions = {
    origin: true,
    credentials: true,
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
// corspolicy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'PUT,PATCH,DELETE,GET,POST');
    res.setHeader('Access-Control-Allow-headers', 'X-Requested-With,Content-Type');
    res.setHeader('Access-Control-Allow-credentials', 'true');
    next();
});
// middleware
app.use((req, res, next) => {
    console.log(`METHOD: ${req.method} URL: ${req.url}`);
    next();
});
app.use('/api', routes_1.default.mailRouter);
httpServer.listen(config_1.default.SERVER.port, () => {
    console.log(`SERVER: ${config_1.default.SERVER.host}:${config_1.default.SERVER.port}`);
});
