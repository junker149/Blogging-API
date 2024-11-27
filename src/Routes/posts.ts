import express from 'express';
const Router = express.Router();
import Client from '../client';

Router.post('/post', async (req, res) => {
    const {title, content, category, tags} = req.body;
    try{
        const newPost = await Client.posts.create({
            data: {title, content, category, tags}
        });    
        res.status(200).json({
            message: newPost
        })
    }
    catch(err){
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
})

Router.get('/post', async (req, res) => {
    try{
        const allPosts = await Client.posts.findMany();
        res.status(200).json({
            message: allPosts
        })
    }
    catch(err){
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
})

export default Router;