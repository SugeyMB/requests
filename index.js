const express = require('express')
const app = express()

app.use(express.json())

//http://localhost:3000/sugey
app.get('/', (req, res)=> {
    res.json({msg: 'Hello GET'})
})

    app.get('/:user/:password', (req, res)=> {
    const {user, password} =  req.params
    if (user === 'julio' && password === '123'){
    res.json({msg: 'Inicio de sesión exitoso'})
    return
    }
    res.json({msg: 'Fallo en el usuario o contraseña'})
})

//http://localhost:3000/login?user=Sugey&password=123
app.get('/login', (req, res) => {
    const {user, password} = req.query
    if (!user || !password){
        res.json({msg: 'You need to provide <user> and <password> params'})
    }
    
if(user === 'Sugey' && password === '123'){
    res.json({msg: 'Sing In succesfull'})
    return
}
res.status(404).json({msg: 'wrong user or password'})
})

app.post('/login', (req, res) => {
    const {user, password} = req.body
    if (!user || !password){
        res.json({msg: 'You need to provide <user> and <password> params'})
    }
    
if(user === 'Sugey' && password === '123'){
    res.json({msg: 'Sing In succesfull'})
    return
}
res.status(404).json({msg: 'wrong user or password'})
})

app.post('/',(req, res)=>{
    res.json({msg:'Hello POST'})
})

app.put('/',(req, res)=>{
    res.json({msg:'Hello PUT'})
})

app.patch('/',(req, res)=>{
    res.json({msg:'Hello PATCH'})
})

app.delete('/',(req, res)=>{
    res.json({msg:'Hello DELETE'})

})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})