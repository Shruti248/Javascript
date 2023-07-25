const express = require('express')

module.exports = (req , res , next) => {
    // Simple
    // console.log(req.method + " " + req.url);
    // next();

    // Optimized
    const start = Date.now();

    res.on('finish'  , () => {
        const timeElapsed = Date.now() - start;
        console.log(`${req.method} ${req.url} ${res.statusCode} ${timeElapsed}ms`);
    })
    next();
}
