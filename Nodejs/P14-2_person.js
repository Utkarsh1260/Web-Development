// Defining the person schema
const  personSchema = new mongoose.Schema({
    name:{
        tpype: String,
        required: true
    },

    age:{
        type:Number
    },

    work:{
        type:String,
        enum: ['chef', 'water', 'manager'],
        required:true
    },

    mobile:{
        type:String,
        required: true,
        unique:true

    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    address:{
        type:String
    },

    salary:{
        type:Number,
        required:true
    }
});