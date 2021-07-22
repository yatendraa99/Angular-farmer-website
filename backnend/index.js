const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient =require('mongodb').MongoClient
let client=new MongoClient(
    "mongodb://localhost:27017/agri",
    {useNewUrlParser:true}
);

let mddbconn;
client.connect((err,db)=>{
if(!err)
{
    mddbconn=db;
}
else{
    console.log("db could not be connected");
}
});

const app =express();

        app.use(cors());
        app.post('/cropdetail',bodyParser.json(),(req,res)=>{
            console.log("line no266666");
            console.log(req.body);
            let det=mddbconn.db('agri').collection('cropdetail');
            det.insertOne(req.body, (err,r)=>{
                console.log(r);
                        if(!err)
                            res.send({status:"ok"});
                            else 
                            res.send({status:"faild"});
                        }
            );

        

                })



                app.post('/userdetail',bodyParser.json(),(req,res)=>{
                    console.log("line no266666");
                        console.log(req.body);
                        let det=mddbconn.db('agri').collection('userdetail');
                        det.insertOne(req.body, (err,r)=>{
                            //console.log(r);
                                if(!err)
                                res.send({status:"ok"});
                                else 
                                res.send({status:"faild"});
                    }
                                    );
                
                        
                
                
                
                                })


                app.post('/checklogin',bodyParser.json(),(req,res)=>{
  
                var userTable = mddbconn.db('agri').collection('userdetail');
       
                userTable.find({email:req.body.email, pass:req.body.pass}).toArray((err,docs)=>{
                    if(!err && docs.length>0)
                    {
                        res.send({status:"ok", desc:docs});
                    }
                    else{
                        res.send({status:"failed", desc:err});
                    }
                })

                })

                app.get('/infocrop' ,(req,res)=>{

                var complatetable=mddbconn.db('agri').collection('cropdetail');
                    
                complatetable.find().toArray((err,docs)=>{
                    if(!err )
                    {
                        res.send({status:"ok",desc:docs});

                    }
                    else  {
                        res.send({status:"failed",desc:err})
                    }

                })

                })





app.listen(3000, ()=>{
    console.log("listining on port 3000");

})
