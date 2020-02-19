var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var ParticipantSchema = mongoose.Schema({
    competitor:{
        type: String
    },
    subdivision:{
        type: String
    },

    FX:{
        E1:{
            type:Number

        },
        E2:{
            type:Number

        },
        E3:{
            type:Number

        },
        E4:{
            type:Number

        },
        E:Number,
        D:{

            type:Number

        },

        Final:Number,
        required:false

    },
    PH:{
        E1:{
            type:Number

        },
        E2:{
            type:Number

        },
        E3:{
            type:Number

        },
        E4:{
            type:Number

        },
        E:Number,
        D:{

            type:Number

        },

        Final:Number,
        required:false

    },
    SR:{
        E1:{
            type:Number

        },
        E2:{
            type:Number

        },
        E3:{
            type:Number

        },
        E4:{
            type:Number

        },
        E:Number,
        D:{

            type:Number

        },

        Final:Number,
        required:false

    },
    VT1:{
        E1:{
            type:Number

        },
        E2:{
            type:Number

        },
        E3:{
            type:Number

        },
        E4:{
            type:Number

        },
        E:Number,
        D:{

            type:Number

        },

        Final:Number,
        required:false

    },
    VT2:{
        E1:{
            type:Number

        },
        E2:{
            type:Number

        },
        E3:{
            type:Number

        },
        E4:{
            type:Number

        },
        E:Number,
        D:{

            type:Number

        },

        Final:Number,
        required:false

    },
    VT:{

        Final:Number,
        required:false

    },
    PB:{
        E1:{
            type:Number

        },
        E2:{
            type:Number

        },
        E3:{
            type:Number

        },
        E4:{
            type:Number

        },
        E:Number,
        D:{

            type:Number

        },

        Final:Number,
        required:false

    },
    HB:{
        E1:{
            type:Number

        },
        E2:{
            type:Number

        },
        E3:{
            type:Number

        },
        E4:{
            type:Number

        },
        E:Number,
        D:{

            type:Number

        },

        Final:Number,
        required:false

    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    clas:{
        type: String
    }

});

var IV_Edition=module.exports = mongoose.model('IV_Edition',ParticipantSchema);
module.exports.addParticipant = function(newUser, callback){

    newUser.save(callback);


}
