
let db = require('./js/db.json');
let body_parser = require('body-parser');
let bcrypt = require('bcrypt');
let fs = require('fs');
let express = require('express');
let app = express();

/* General functions
================ */



/* App
=============== */


app.use(express.static(__dirname));
app.use(body_parser.urlencoded({extended:false}))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index.ejs',{text:'Welcome'});
})

app.get('/register',(req,res)=>{
    res.render('register.ejs');
})

app.get('/login',(req,res)=>{
    res.render('login.ejs');
})

app.post('/create',(req,res)=>{
    fs.readFile('./js/db.json','utf-8',(err,data)=>{
        console.log(data);
        let content = JSON.parse(data);
        if(err){
            res.status(500).send('server error');
        }
        else {
            try {
                fs.readFile('./js/db.json','utf-8',async (err,data)=>{
                    if(err){
                        res.status(500).send(err);
                        console.log(err);
                    }
                    isUserExisting = content.find(user=>{
                        return user.name == req.body.name;
                    })
                    console.log('aaa')
                    if(!isUserExisting){
                        let new_content = {name:req.body.name,password:req.body.password}

                        let salt = await bcrypt.genSalt();
                        let Hashedpassword = await bcrypt.hash(new_content.password,salt);
                        new_content.password = Hashedpassword;

                        content.push(new_content)
                        content = JSON.stringify(content);
                        fs.writeFile('./js/db.json',content,(err)=>{
                            res.status(400).send();
                        });
                        res.status(201).send();
                    } else {
                        res.status(400).send('Unfound user');
                    }
                })
            } catch {
                console.log('stop');
            }
        }
    })
})

app.post('/login',(req,res)=>{
    fs.readFile('./js/db.json',async (err,data)=>{
        let content = JSON.parse(data);
        let user = content.find(user=>{
            return user.name == req.body.name;
        })
        if(!user){
            res.status(400).send('Unfound user');
        } else {
            try {
                console.log(req.body.password,user.password);
                if(await bcrypt.compare(req.body.password,user.password)){
                    res.status(200).send('connected');
                }
                else {
                    res.status(400).send('Incorrect password or username')
                }
            }
            catch {
                res.status(500).send('Unfound password');
            }
        }
    })
})

app.listen(process.env.PORT || 3000);