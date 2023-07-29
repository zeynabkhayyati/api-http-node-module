const { json } = require("express")
let http = require("http")
let url = require("url")

let api = {
    users : [
        {password : 2411858475 ,  name : "matinsoleymani"} , {password : 1124858475 ,  name : "zeynabkhayyati"}
    ] 
}
http.createServer((req , res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*') 

    let parse = url.parse(req.url , true)

    if(parse.pathname == "/users"){

        let usersparse = api.users.filter(user => user.name  ==  parse.query.name && user.password == parse.query.password)
        res.write(JSON.stringify(usersparse[0]))
        res.end()
        
    }else{
        res.write("404 not found")
        res.end()
    }

}).listen(3000)