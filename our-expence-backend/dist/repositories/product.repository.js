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
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schama_1 = require("../schemas/product.schama");
let ProductRepository = class ProductRepository {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async find(productFilterQuery) {
        return this.productModel.find();
    }
    async create(product) {
        const newProduct = new this.productModel(product);
        return newProduct.save();
    }
    async finOneAndUpdate(productFilterQuery, product) {
        return this.productModel.findOneAndUpdate({ _id: productFilterQuery.id.id }, product);
    }
    async findOneAndDelete(productFilterQuery) {
        return this.productModel.findOneAndDelete({ _id: productFilterQuery.id.id });
    }
};
ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schama_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map