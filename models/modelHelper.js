const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    password: String,
  });

let workoutSchema = new Schema(
    {
        userId: String,
        name: String,
        reps: Number,
        sets: Number,
        weight: Number
    }
);

let getUserModel = () =>{
    let Users = mongoose.model('Users', userSchema);
    return(Users);
} 
  

let getWorkoutModel = () =>{
    let Workouts = mongoose.model('Workouts', workoutSchema);
    return (Workouts);
}

module.exports.getWorkoutModel = getWorkoutModel;
module.exports.getUserModel = getUserModel;