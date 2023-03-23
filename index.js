const express=require('express');
const port=8000;
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));


app.get('/delete-task/:task',function(req,res){
    console.log('req.params');
    let task=req.body.task;
})


app.get('/',function(req,res){
    return res.render('home',{
        title:"todo list"
    });
});

app.listen(port,function(err){
    if(err){
        console.log("Error in running port",err);
        return;
    }
    else{
        console.log("server is running on port",port);
    }
});