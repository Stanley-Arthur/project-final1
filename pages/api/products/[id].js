import Product from '@/models/product';
import db from '../../../utils/dbConnect';

export default async function handler(req, res) {
    const {method, query:{id}, cookies} =req

    const token = cookies.token
   


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
    if (!token || token !== process.env.TOKEN_KEY){
        return res.status(401).json("not authenticated")
    }
    try{
        const products= await Product.create(req.body);
        res.status(201).json(products)
 
    }catch(error){
        res.status(500).json('error')
    }
   } 
   if (method === "DELETE"){
    if (!token || token !== process.env.TOKEN_KEY){
        return res.status(401).json("not authenticated")
    }
    try{
        await Product.findByIdAndDelete(id);
        res.status(201).json("the products is deleted successfully")
 
    }catch(error){
        res.status(500).json('error')
    }
   } 
  
}
  