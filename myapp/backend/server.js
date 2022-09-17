const express=require('express');
const cors=require('cors');
require ( 'dotenv' ).config( ) ;
const app = express( ) ;
const mongoose =require('mongoose');

const port = process.env.PORT || 8080;
app.use (cors ( )) ;
app.use (express.json( )) ;

const URI = process.env.atlas_uri;
mongoose.connect(URI, {
useNewUrlParser: true, 
useUnifiedTopology: true 
}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});

const exercisesRouter =require('./routes/exercises');
const usersRouter=require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen (port, () => {
    console.log(`Server listening on ${port}`);
});