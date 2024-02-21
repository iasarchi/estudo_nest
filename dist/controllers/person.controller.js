"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const person_model_1 = require("../models/person.model");
const typeorm_2 = require("typeorm");
let PersonController = class PersonController {
    constructor(model) {
        this.model = model;
    }
    create() {
        return {
            data: 'Create !!!'
        };
    }
    async getAll() {
        const list = await this.model.find();
        return {
            data: list
        };
    }
    getOne() {
        return {
            data: 'Create !!!'
        };
    }
    update() {
        return {
            data: 'Create !!!'
        };
    }
    delete() {
        return {
            data: 'Create !!!'
        };
    }
};
exports.PersonController = PersonController;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PersonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PersonController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PersonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PersonController.prototype, "delete", null);
exports.PersonController = PersonController = __decorate([
    (0, common_1.Controller)('/person'),
    __param(0, (0, typeorm_1.InjectRepository)(person_model_1.PersonModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonController);
//# sourceMappingURL=person.controller.js.map