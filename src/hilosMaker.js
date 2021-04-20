var request = require('request');
let fs = require('fs')

var hilosEuropa= [{
    
    id: "2",
    title: "Trieste",
    background: "https://cdn.pixabay.com/photo/2014/09/12/10/58/trieste-442587_960_720.jpg",
    direction: "vertical"
}, 
{
    id: "3",
    title: "Territorios autónomos hippes",
    background: "https://cdn.pixabay.com/photo/2016/08/31/21/43/ljubljana-1634703_960_720.jpg",
    direction: "horizontal"
},
{
    id: "4",
    title: "Croacia",
    background: "https://images.pexels.com/photos/2722939/pexels-photo-2722939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    direction: "square"
}, 
{
    id: "5",
    title: "Yugoslavia",
    background: "https://pbs.twimg.com/media/D2gCgMQX0AEEFYG?format=png&name=900x900",
    direction: "square"
}, 
{
    id: "6",
    title: "Georgi Markov",
    background: "https://pbs.twimg.com/media/D4i_SBqXkAAZthl?format=jpg&name=large",
    direction: "horizontal"
},
{
    id: "7",
    title: "Skopje, Macedonia",
    background: "https://cdn.pixabay.com/photo/2019/12/31/17/49/skopje-4732418_960_720.jpg",
    direction: "square"
},
{
    id: "8",
    title: "Futbol Club Macedonia",
    background: "https://pbs.twimg.com/media/D5vtnypWwAAFYUF?format=jpg&name=medium",
    direction: "square"
}]



function jsonMaker(){
    let hilosDeEuropa = JSON.stringify(hilosEuropa)
    fs.writeFile('hilosDeEuropa.json', hilosDeEuropa, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
})
}

jsonMaker()