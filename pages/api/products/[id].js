import Product from '@/models/product';
import db from '../../../utils/dbConnect';

export default async function handler(req, res) {
    const {method, query:{id}} =req
   


   db.connect()
   

   if (method ==="GET"){

    try{
        const products= await Product.findById(id);
        res.status(200).json(products)
    }catch(error){
        res.status(500).json('error')

    }
   }

   if (method === "PUT"){
    try{
        const products= await Product.create(req.body);
        res.status(201).json(products)
 
    }catch(error){
        res.status(500).json('error')
    }
   } 
   if (method === "DELETE"){
    try{
        await Product.findByIdAndDelete(id);
        res.status(201).json("the products is deleted successfully")
 
    }catch(error){
        res.status(500).json('error')
    }
   } 
  
}
  