import Order from '@/models/Order';
import db from '../../../utils/dbConnect';

export default async function handler(req, res) {
   
   if (req.method !=="GET" && req.method !== "POST"){
    res.status(405).json({error: 'only POST and GET methods are allowed'})
   }

   await db.connect()
   

   if (req.method =="GET"){

    try{
        const orders= await Order.find();
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json('error')

    }
   }

   if (req.method == "POST"){
    try{
        const order= await Order.create(req.body);
        res.status(201).json(order)
 
    }catch(error){
        res.status(500).json('error')
    }
   } 
}
  