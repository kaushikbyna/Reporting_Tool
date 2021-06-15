const express = require("express");
var router = express.Router();
var { PostMessage } = require("../models/postMessage");
var ObjectID = require("mongoose").Types.ObjectId; 


router.get('/',(req,res)=>{
    PostMessage .find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while retriving all records :', + JSON.stringify(err,undefined,2))
    })
});

router.post("/",(req,res)=>{
    var newRecord = new PostMessage( {
        tableId:req.body.tableId,
        projectName:req.body.projectName,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        progress:req.body.progress,
        status:req.body.status,
        overdue:req.body.overdue,
        assignFirst:req.body.assignFirst,
        assignSecond:req.body.assignSecond,
        assignThird:req.body.assignThird,
        clientName:req.body.clientName,
        assignFrom:req.body.assignFrom,
        demoUrl:req.body.demoUrl,
        billingType:req.body.billingType,
        hourlyRate:req.body.hourlyRate,
        estimateRate:req.body.estimateRate,
        mileStone:req.body.mileStone,
        projects:req.body.projects,
        description:req.body.description
    })
    newRecord.save((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('error while creating new record',+JSON.stringify(err,undefined,2))
    })
});

router.put("/:id",(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("No Record with given id ", +req.params.id)

    var updateRecord = {
        tableId:req.body.tableId,
        projectName:req.body.projectName,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        progress:req.body.progress,
        status:req.body.status,
        overdue:req.body.overdue,
        assignFirst:req.body.assignFirst,
        assignSecond:req.body.assignSecond,
        assignThird:req.body.assignThird,
        clientName:req.body.clientName,
        assignFrom:req.body.assignFrom,
        demoUrl:req.body.demoUrl,
        billingType:req.body.billingType,
        hourlyRate:req.body.hourlyRate,
        estimateRate:req.body.estimateRate,
        mileStone:req.body.mileStone,
        projects:req.body.projects,
        description:req.body.description
    }
    PostMessage.findByIdAndUpdate(req.params.id,{$set:updateRecord},{useFindAndModify: false},(err,docs)=>{
        if(!err) res.send(docs)
        else console.log('error while updating record',+JSON.stringify(err,undefined,2))
    })
})

router.delete("/:id",(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("No Record with given id ", +req.params.id)

    PostMessage.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs)
        else console.log('error while updating record',+JSON.stringify(err,undefined,2))
    })
})


module.exports= router;
