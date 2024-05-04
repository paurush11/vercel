"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.generateFiveDigitId = void 0;
const generateId = () => {
    const id = crypto.randomUUID();
    return id;
};
exports.generateId = generateId;
const generateFiveDigitId = () => {
    const str = "12345667890abcdefghijklmnopqrstuvwxyz";
    let output = "";
    for (let i = 0; i < 5; i++) {
        output += str[Math.floor(Math.random() * str.length)];
    }
    return output;
};
exports.generateFiveDigitId = generateFiveDigitId;
