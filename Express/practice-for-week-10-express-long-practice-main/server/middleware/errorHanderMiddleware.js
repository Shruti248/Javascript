const express = require('express')
require('dotenv').config()

module.exports = (err , req , res , next) => {

    console.log(err.stack);

    const statusCode = err.status || 500;
    const message = 'Something Went Wrong.'
    const errorStack = err.stack;

    if(process.env.NODE_ENV === 'production'){
        res.json({message , statusCode });
    }else if(process.env.NODE_ENV === 'development'){
        res.json({message , statusCode , errorStack})
    }else{
        res.json('Invalid Environment')
    }
}
