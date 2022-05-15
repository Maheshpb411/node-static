// so here indexedDB.js is used to fetch data from dynamic website that is here we are publishing the weather app which is dynacin website.

const express = require("express");

const request = require("request");

const fs = require("fs");

// const fetch = require("node-fetch");

const app = express();

app.set("view engine", "hbs");


//     requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=6f81c870b2daaa4750b758195f038cc6&units=metric")
    
//     .on("data",(chunk) => {
//         const objdata = JSON.parse(chunk);
//         const arrdata = [objdata];
//         console.log(arrdata);
//         // const realtimedata = arrdata
// });


app.get("/", (req, res) =>{
    
    // res.render("index", {
    //     tempvalue : arrdata.main.temp,
    //     tempmin : "25 C",
    //     tempmax : "27 C",
    //     country : "India",
    //     location : "pune"
    // });
    request.get('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=6f81c870b2daaa4750b758195f038cc6&units=metric', (err, response, apidata) => {
        if (!err && response.statusCode == 200) {
            var locals = JSON.parse(apidata);
            res.render("index", {
                    tempvalue : locals.main.temp,
                    tempmin : locals.main.temp_min,
                    tempmax : locals.main.temp_max,
                    country : locals.sys.country,
                    location : locals.name,
                    tempstatus : locals.weather.main
                });
        }
    }
)});

app.listen(8000,()=>{
    console.log("listening on 8000");
});

