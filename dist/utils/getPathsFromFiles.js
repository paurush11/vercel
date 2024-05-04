"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolderPathsFromId = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getFolderPathsFromFolderPath = (folderPath) => {
    let response = [];
    fs_1.default.readdirSync(folderPath).forEach(folder => {
        const fullFilePath = path_1.default.join(folderPath, folder);
        if (fs_1.default.statSync(fullFilePath).isDirectory()) {
            response = response.concat(getFolderPathsFromFolderPath(fullFilePath));
        }
        else {
            response.push(fullFilePath);
        }
    });
    return response;
};
const getFolderPathsFromId = (id) => {
    const folderPath = `./output/${id}`;
    return getFolderPathsFromFolderPath(folderPath);
};
exports.getFolderPathsFromId = getFolderPathsFromId;
