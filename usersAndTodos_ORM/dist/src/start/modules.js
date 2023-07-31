"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modules = void 0;
const index_1 = __importDefault(require("./../api/router/index"));
const express_1 = __importDefault(require("express"));
const modules = async (app) => {
    app.use(express_1.default.json());
    app.use(index_1.default);
};
exports.modules = modules;
