import { Router } from 'express';
import ProductManager from '../dao/productManagerDB.js';
export const router=Router();

router.get('/',(req,res)=>{
    const p = new ProductManager();
    const products = p.getProducts();
    return  res.render('home',{products});
});

router.get('/realtimeproducts',(req,res)=>{
    return  res.render('realTimeProducts');
});
