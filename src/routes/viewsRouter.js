import { Router } from 'express';
import productManager from "../dao/productManager.js";
export const router=Router();

router.get('/',(req,res)=>{
    const p = new productManager();
    const products = p.getProducts();
    return  res.render('home',{products});
});

router.get('/realtimeproducts',(req,res)=>{
    return  res.render('realTimeProducts');
});
