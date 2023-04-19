const express = require('express')

module.exports = (err , req , res , next) => {

    console.log(err.stack);

    const statusCode = err.status || 500;
    const message = 'Something Went Wrong.'
    const errorStack = err.stack;

    res.json({message , statusCode , errorStack})
}
