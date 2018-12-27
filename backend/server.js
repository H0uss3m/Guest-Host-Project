const express=require('express')
const {MongoClient,ObjectID}=require('mongodb')
const assert=require('assert')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.json())

const MongoUrl='mongodb://localhost:27017'
const database='hostlist'

MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
    assert.equal(null,err,'can not connect to database')
    const db= client.db(database)

   //add contact
   app.post('/contact-add',(req,res)=>{
       let newcontact=req.body
db.collection('contactliste1').insertOne(newcontact,(err,data)=>{
    if(err) res.send('can not add contact')
    else res.send(data)
})
    }) 
    //get contact
    app.get('/contact-get',(req,res)=>{
        db.collection('contactliste1').find().toArray((err,data)=>{
            if(err) res.send('can not get contacts')
            else res.send(data)
        })
    })
    //delete contacts
    app.delete('/delete-contact/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        db.collection('contactliste1').findOneAndDelete({_id:id},(err,data)=>{
            if(err) res.send('can not delete contact')
            else res.send(data)
        })
    })
    //editcontact
    app.put('/edit-contact/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        let updated=req.body
        db.collection('contactliste1').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
            if (err) res.send('can not edit contact')
            else res.send(data)
        })
    })
})




app.listen(3008,err=>{
    assert.equal(null,err,'can not connect to server')
    console.log('the server is running on port 3008')
})