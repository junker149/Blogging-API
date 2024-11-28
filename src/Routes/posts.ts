import express from 'express';
import { post } from '../validation/postSchema';
const Router = express.Router();
import Client from '../client';

Router.post('/posts', async (req, res) => {
    const {title, content, category, tags} = req.body;
    const parsedBody = post.safeParse(req.body);

    if (!parsedBody.success) {
        res.status(400).json({
            message: 'Bad request'
        })
    }
    else{
        try{
            const newPost = await Client.posts.create({
                data: {title, content, category, tags}
            });    
            res.status(201).json({
                message: 'Created',
                newPost
            })
        }
        catch(err){
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
})

Router.get('/posts/:id?', async (req, res) => {
    const id = req.params.id;
    try{
        if (!id) {
            const allPosts = await Client.posts.findMany();
            res.status(200).json({
                message: 'OK',
                allPosts
            });
        }
        else {
            const post = await Client.posts.findUnique({
                where: {
                    id: parseInt(id)
                }
            })

            if (!post){
                res.status(404).json({
                    message: 'Not Found'
                });
            }

            else {
                res.status(200).json({
                    message: 'OK',
                    post
                })
            }
        }
    }
    catch(err){
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
})

export default Router;