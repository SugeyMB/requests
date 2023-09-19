const express = require('express')
const app = express()

//http://localhost:3000/julio
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