import Product from '@/models/product';
import db from '../../../utils/dbConnect';

export default async function handler(req, res) {
   
   if (req.method !=="GET" && req.method !== "POST"){
    res.status(405).json({error: 'only POST and GET methods are allowed'})
   }

   db.connect()
   

   if (req.method =="GET"){

    try{
        const products= await Product.find();
        res.status(200).json(products)
    }catch(error){
        res.status(500).json('error')

    }
   }

   if (req.method == "POST"){
    try{
        const product= await Product.create(req.body);
        res.status(201).json(product)
 
    }catch(error){
        res.status(500).json('error')
    }
   } 
}
  