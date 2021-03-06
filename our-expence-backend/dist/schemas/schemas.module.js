"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_controller_1 = require("../controllers/product.controller");
const product_repository_1 = require("../repositories/product.repository");
const product_service_1 = require("../services/product.service");
const product_schama_1 = require("./product.schama");
const category_controller_1 = require("../controllers/category.controller");
const category_repository_1 = require("../repositories/category.repository");
const category_service_1 = require("../services/category.service");
const category_schema_1 = require("./category.schema");
const track_repository_1 = require("../repositories/track.repository");
const trackController_1 = require("../controllers/trackController");
const track_service_1 = require("../services/track.service");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: product_schama_1.Product.name, schema: product_schama_1.productSchema
                }, {
                    name: category_schema_1.Category.name, schema: category_schema_1.categorySchema
                }])],
        controllers: [product_controller_1.ProductController, category_controller_1.CategoryController, trackController_1.TrackController],
        providers: [product_service_1.ProductService, product_repository_1.ProductRepository, category_service_1.CategoryService, category_repository_1.categoryRepository, track_repository_1.TrackRepository, track_service_1.TrackService]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=schemas.module.js.map