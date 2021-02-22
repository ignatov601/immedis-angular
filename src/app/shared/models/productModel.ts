export class ProductModel {
    id: number;
    productCode: number;
    title: string;
    rating: number;
    size: string;
    availableSizes: Array<string>;
    description: string;
    price: number;
    reducedPrice: number | null;
}