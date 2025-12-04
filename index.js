import express from 'express';

const app = express();
app.get('/:name', (req,res)=>{
    const param = req.params;
    const name = param.name;
    res.send(`Hello ${name}! The node express app has started`);
});

app.listen(3000,()=>{
    console.log("The server has started.");
})