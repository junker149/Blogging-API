import express from 'express';
import { post } from '../validation/postSchema';
const Router = express.Router();
import Client from '../client';
import { number, string } from 'zod';

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
    const filter = req.query.term as string | undefined;
    try{
        if (filter) {
            const posts = await Client.posts.findMany({
                where: {
                    OR: [
                        { title: { contains: filter } },
                        { content: { contains: filter } },
                        { tags: { has: filter} }
                    ]
                }
            })
            res.status(200).json({
                message: 'OK',
                posts
            })
        }
        else if (id) {
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
        else {
            const allPosts = await Client.posts.findMany();
            res.status(200).json({
                message: 'OK',
                allPosts
            });
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
})

Router.get('/posts', async (req, res) => {
    const filter = req.query.term;
    if (!filter) {
        res.status
    }
})

export default Router;