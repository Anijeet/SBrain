import express, { response } from "express";
import { ContentModel, UserModel,LinkModel } from "./db";
import jwt from "jsonwebtoken";
import { random } from "./utils";
import {JWT_PASSWORD} from './config'
import { UserMiddleware } from "./middleware";
import cors from "cors";
const app=express();
app.use(express.json())
app.use(cors())


app.post('/api/v1/signup', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    
    try {
        await UserModel.create({
            username: username,
            password: password
        }) 

        res.json({
            message: "User signed up"
        })
    } catch(e) {
        res.status(409).json({
            message: "User already exists"
        })
    }
   
})

app.post('/api/v1/signin',async(req,res)=>{
    const username = req.body.username;
    const password=req.body.password;

    const existing_user= await UserModel.findOne({
        username,
        password
    })

    if(existing_user){
        const token=jwt.sign({
            id:existing_user._id
        },JWT_PASSWORD)

        res.json({
            token
        })
    } else{
        res.status(401).json({
            msg:"Invalid credentials"
        })
    }
})

app.post('/api/v1/content',UserMiddleware,async (req,res)=>{
    const link = req.body.link;
    const type = req.body.type;

    try {
        await ContentModel.create({
            link,
            type,
            title: req.body.title,
            //@ts-ignore
            userId: req.userId,
            tags: []
        })
    
        res.json({
            message: "Content added"
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            
            message: "Error adding content"
        })
    }

})

app.get('/api/v1/content',UserMiddleware,async (req,res)=>{
    //@ts-ignore
    const userId=req.userId;
    try {
        const content = await ContentModel.find({
            //@ts-ignore
            userId:userId
        }).populate("userId","username")//here populate means to give the username index only from the content schema
        res.json({content})
    } catch (error) {
        res.json({error})
    }
    
})

app.delete("/api/v1/content/delete", UserMiddleware, async (req, res) => {
    const {contentId} = req.body;

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})
app.post("/api/v1/brain/share", UserMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
            const existingLink = await LinkModel.findOne({
                //@ts-ignore
                userId: req.userId
            });

            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
            const hash = random(10);
            await LinkModel.create({
                //@ts-ignore
                userId: req.userId,
                hash: hash
            })

            res.json({
                hash
            })
    } else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    // userId
    const content = await ContentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })

})


app.listen(3000)