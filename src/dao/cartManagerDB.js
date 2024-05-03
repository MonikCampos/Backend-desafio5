import { cartsModel } from "./models/cartsModel.js";

export default class CartManager {
    async createCart() {
        await cartsModel.create({ products: [] });
    }

    async getCarts() {
        return await cartsModel.find();
    }

    async getCartById(id) {
        return await cartsModel.findById(id);
    }

    async addProducts(idCart, idProduct) {
        try {
            let searchCart = await this.getCartById(idCart);
            let quantityValidation = searchCart.products.some(
                (p) => p.id == idProduct
            );

            if (quantityValidation) {
                let findProduct = searchCart.products.find((p) => p.id == idProduct);
                findProduct.quantity = findProduct.quantity + 1;
            } else {
                searchCart.products.push({ id: idProduct, quantity: 1 });
            }

            await searchCart.save();
        } catch (error) {
            console.error(error);
        }
    }

    async deleteCart(cartId) {
        return await cartsModel.deleteOne({ _id: cartId });
    }
}