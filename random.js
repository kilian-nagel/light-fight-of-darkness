
db = require('./db.json');
fs = require('fs');

function request_input(){
    let input = {'a':10}
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else {
            try {
                let content = JSON.parse(data);
                content.push(input);
                console.log(content);
                content = JSON.stringify(content);
                fs.writeFile('./db.json',content,(err)=>{

                })
            } catch (x){

            }
        }
    });
}

request_input();