    const express = require('express');
    const app = express();
        app.get('/',(req,res)=>{
        res.json([
            {
                id:1,
                name:"Rishov",
                age:27
            },
            {
                id:2,
                name:"Eshu",
                age:22
            },
            {
                id:3,
                name:"Mukund",
                age:33
            }
        ])
    });
    app.listen(5000,()=>{
        console.log("App is running on port 5000")
    })
    