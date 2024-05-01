import { productsModel } from "./models/productsModel.js ";

export default class ProductManager {
    async addProducts({
        id,
        title,
        description,
        code,
        price,
        status = true,
        stock,
        category,
        brand,
        thumbnails = [],
    }) {
        let NewProduct = {
            title,
            description,
            code,
            price,
            status,
            stock,
            category,
            brand,
            thumbnails,
        };
        await productsModel.create(NewProduct);
    }

    async getProducts() {
        //devuelve los productos de la bd
        return await productsModel.find();
    }

    async getProductsBy(filtro) {
        return await productsModel.findOne(filtro);
    }

    async updateProducts(id, productData) {
        // ---> 'PRODUCTDATA' se pasa por el body de postman<---
        return await productsModel.findByIdAndUpdate(id, productData, {
            runValidators: true,
            returnDocument: "after",
        });
    }

    async deleteProducts(productId) {
        return await productsModel.deleteOne({ _id: productId });
    }
}
