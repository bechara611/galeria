"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routerUsuario = __importStar(require("../routes/usuario"));
const routerUsuarioEImagen = __importStar(require("./../routes/usuarioEimagen"));
const routerLogin = __importStar(require("./../routes/login"));
const routerUpload = __importStar(require("./../routes/upload"));
const config_1 = require("../db/config");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.Middlewares();
        this.rutas = {
            usuario: '/api/usuario',
            usuarioEimagen: '/api/imagenes/',
            login: '/api/login',
            upload: '/api/upload'
        };
        this.Rutas();
        this.BaseDatos();
    }
    Middlewares() {
        //Middleware para servir una carpeta public por defecto
        this.app.use(express_1.default.static('public'));
        //middleware del cors para que cualquiera pueda acceder a nuestreo restserver
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true //que el .mv al guardar el archivo pueda crear la carpeta si no existe
        }));
    }
    Puerto() {
        this.app.listen(this.port, () => {
            console.log(`App corriendo en ${this.port}`);
        });
    }
    Rutas() {
        this.app.use(this.rutas.usuario, routerUsuario.default);
        this.app.use(this.rutas.usuarioEimagen, routerUsuarioEImagen.default);
        this.app.use(this.rutas.login, routerLogin.default);
        this.app.use(this.rutas.upload, routerUpload.default);
    }
    //acceder a la BD
    BaseDatos() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.conectarDB)();
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map