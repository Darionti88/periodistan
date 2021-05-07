const express = require('express')
const app = express()

const cors = require('cors')
const mysql = require("mysql")
const PORT = 3001

const db = mysql.createPool(
    {
        host:"127.0.0.1",
        user:"root",
        password:"mamita_mysql12",
        port: 3306,
        database:"periodistan"
    }
)

app.use(cors())
app.use(express.json())




app.get("/api/africa/:id", (req, res)=>{
const postId = parseInt(req.params.id)
    const sqlSelect = `SELECT * FROM africa WHERE id = ?`
    db.query(sqlSelect, [postId]  ,(err, result, fields)=>{
        if (err) console.log(err)
        res.send(result)
    })
})

app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT)
})