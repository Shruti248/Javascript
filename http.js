const http = require('http');

const server = http.createServer((req , res) => {
    // console.log(req);

    // res.satusCode = 500;
    // console.log('--------------------');

    // console.log(res);

    let reqBody ='';
    req.on('data' , (data) => {
        reqBody+=data;
    })

    req.on('end' , () => {
        console.log(reqBody);
    })
})

server.listen(5000 , () => {
    console.log('Server is Listening on PORT 5000')
})
