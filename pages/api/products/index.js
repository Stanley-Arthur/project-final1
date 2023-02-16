import Product from '@/models/product';
import db from '../../../utils/dbConnect';

export default async function handler(req, res) {
    const {method, cookies} = req
    const token = cookies.token
   
   if (method !=="GET" && method !== "POST"){
    res.status(405).json({error: 'only POST and GET methods are allowed'})
   }

   db.connect()
   

   if (method =="GET"){

    try{
        const products= await Product.find();
        res.status(200).json(products)
    }catch(error){
        res.status(500).json('error')

    }
   }

   if (method == "POST"){
    if (!token || token !== process.env.TOKEN_KEY){
        return res.status(401).json("not authenticated")
    }
    try{
        const product= await Product.create(req.body);
        res.status(201).json(product)
 
    }catch(error){
        res.status(500).json('error')
    }
   } 
}
  