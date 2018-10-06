const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let exerciseSchema = new Schema({
    userId: String,
    workoutId: String,
    name: String,
    reps: Number,
    sets: Number,
    weight: Number
});

let userSchema = new Schema({
    username: String,
    password: String,
  });

let workoutSchema = new Schema(
    {
        userId: String,
        name: String
    }
);

let getExerciseModel = () =>{
    let Exercises = mongoose.model('Exercises', exerciseSchema);
    return(Exercises);
}

let getUserModel = () =>{
    let Users = mongoose.model('Users', userSchema);
    return(Users);
} 
  

let getWorkoutModel = () =>{
    let Workouts = mongoose.model('Workouts', workoutSchema);
    return (Workouts);
}

module.exports.getExerciseModel = getExerciseModel;
module.exports.getUserModel = getUserModel;
module.exports.getWorkoutModel = getWorkoutModel;