"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
const server = new server_1.default();
// declare module 'express' {
//   interface Request {
//     body: any // Actually should be something like `multer.Body`
//     files: any // Actually should be something like `multer.Files`
//   }
// }
//ejecutar el servidor
server.Puerto();
//# sourceMappingURL=index.js.map