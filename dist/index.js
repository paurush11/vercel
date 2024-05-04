"use strict";
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
const generateId_1 = require("./utils/generateId");
const simple_git_1 = __importDefault(require("simple-git"));
const getPathsFromFiles_1 = require("./utils/getPathsFromFiles");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/deploy", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = req.body.url;
        const id = (0, generateId_1.generateFiveDigitId)();
        yield (0, simple_git_1.default)().clone(url, `output/${id}`);
        res.json({
            id
        });
    }
    catch (E) {
        console.error(E);
    }
}));
app.get("/", (req, res) => {
    try {
        const response = (0, getPathsFromFiles_1.getFolderPathsFromId)('tvqmh');
        res.json({
            response
        });
    }
    catch (E) {
        console.error(E);
    }
});
app.listen(3000, () => {
    console.log("server started on port 3000");
});
