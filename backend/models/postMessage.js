const mongoose = require("mongoose");


var PostMessage  = mongoose.model('PostMessage ',
{
    tableId : {type:String},
    projectName:{type:String},
    startDate:{type:Object},
    endDate:{type:Object},
    progress:{type:String},
    status:{type:String},
    overdue:{type:String},
    assignFirst:{type:String},
    assignSecond:{type:String},
    assignThird:{type:String},
    clientName:{type:String},
    assignFrom:{type:String},
    demoUrl:{type:String},
    billingType:{type:String},
    hourlyRate:{type:String},
    estimateRate:{type:String},
    mileStone:{type:String},
    projects:{type:String},
    description:{type:String}
    })
module.exports ={ PostMessage };
