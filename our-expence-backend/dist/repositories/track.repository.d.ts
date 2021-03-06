import { Model, FilterQuery } from "mongoose";
import { ProductDocument, Product } from "src/schemas/product.schama";
export declare class TrackRepository {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    findMonthTrack(data: FilterQuery<Product>): Promise<Product[]>;
}
