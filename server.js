const express = require('express')
const fs=   require('fs')
const cors= require('cors')
const app = express();
app.use(express.static(__dirname+'/public'))
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {

res.sendFile(__dirname+'/public/index.html')
    
})
app.post('/', (req, res) => {
console.log(req.body.svgData)
fs.writeFile(`${req.body.country}.svg`,req.body.svgData,(err) => {
    if (err) {
      console.error(`Error writing SVG file: ${err}`);
    } else {
      console.log(`SVG file saved at:`);
    }
})
res.json({ message: 'Data received successfully' });
}
)


app.listen(3000,()=>
{
    console.log('hello')
})