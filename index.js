const express = require('express');
const app = express()
// console.dir(app);
// app.use(express.static('firstappexpress'));

// app.use((request, response) => {
//     console.log('New request')
//     response.send('<h1 id="styled-header">UYO and the server <h1>')
// })

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get('/cats',(req,res) => {
    res.send('meow')
})

// app.get('/r/:variable',(req,res) => {
//     // console.log(req)
//     const {variable} = req.params;
    
//     res.send(`<h1>browsing the ${variable} path</h1>`)
// })

app.get('/search', (req, res) => {
    console.log(req.query)
    const {q,color}= req.query;
    if (!q ){
    lesson
        res.send('nothing searchedbbbkjkh')
    }
    res.send(`search for ${color} and ${q}`);
})

app.get('/r/:variable/:postid',(req,res) => {
    const {variable, postid} = req.params;
    res.send(`<h1>browsing the ${postid} on ${variable} path</h1>`)
})
app.get('/',(req,res) => {
    res.send('home page')
})

app.post('/catpost',(req,res) =>{
    res.send('post request')
}
)

app.get('*',(req,res) => {
    res.send('i dont know ')
})