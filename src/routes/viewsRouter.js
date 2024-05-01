import { Router } from 'express';
import ProductManager from '../dao/productManagerDB.js';
export const router=Router();
const p = new ProductManager();

router.get('/', async (req,res)=>{
    try{        
        const products = p.getProducts();
        res.setHeader('Content-Type','application/json');
        res.status(200).render('home',{products});
    }catch(error){
        res.status(500).send(error.message);
    }
    //return  res.render('home',{products});
});

router.get('/realtimeproducts',(req,res)=>{
    return  res.render('realTimeProducts');
});
