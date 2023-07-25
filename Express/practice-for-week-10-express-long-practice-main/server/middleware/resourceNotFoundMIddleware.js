const express = require('express')

module.exports = (req , res , next) => {
    throw new Error(res.status(404).send("The requested resource couldn't be found."))
}
