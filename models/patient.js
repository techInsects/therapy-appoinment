var mongoose = require('mongoose');
var bcrypt  = require('bcrypt-nodejs');
var config = require('../config/database');

var patientSchema = mongoose.Schema({
    username : {type:String,required:true,unique:true},
    email : {type:String,required:false},
    number : {type:String,required:true},
    address:{type:String,require:false},
    session_name:{type:String,require:false},
    session_date:{type:String,require:false},
    session_time:{type:String,require:false}
});

var patient = module.exports = mongoose.model('patient',patientSchema);

module.exports.getUserById  = function(id,callback){

    patient.findById(id,callback);
};

module.exports.getUserByUsername  = function(username,callback){
    const query = {username:username};
    patient.findOne(query, callback);
};

module.exports.adduser = function(newUser,callback){
    bcrypt.genSalt(10,function(err,salt)
    {
        bcrypt.hash(newUser.password,salt,function(err,hash)
        {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);

        });
    });
    
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
}

