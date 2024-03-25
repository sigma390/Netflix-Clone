import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import prismadb from '../../lib/prismadb'
import { error } from 'console';


export default async function handler(req:NextApiRequest,res:NextApiResponse){
   
   // telling api only respond to post requests

    if (req.method!== 'POST') {
        return res.status(405).end();
    }
    try {
        const {email, name, password} = req.body;
        //check user exist or not
        const existsUser  = await prismadb.user.findUnique({
            where:{
                email,
            }
        });
        // if email exists

        if (existsUser) {
            return res.status(422).json({error:'Email Already Exists'})
        }
        // store hashed pasword
        const hashedPassword = await bcrypt.hash(password,12);
        const user = await prismadb.user.create({
            data:{
                email,
                name,
                hashedPassword,
                image:'',
                emailVerifies:new Date(),
            }
        })

        //user created now give a response
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(400).end()
    }
}