const express=require("express");
const https=require("https");
const app=express();


app.get("/",(req,res)=>{
    
    const url="https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=0cc6b86a1fc02008b9c54f4a8314a1fe"
    https.get(url,function(response){
        console.log(response.statusCode);
        console.log(response.statusMessage);

        response.on("data",function(data){
           const weatherData= JSON.parse(data);
           console.log(weatherData);
           const temp=weatherData.main.temp;
           console.log(temp);
           res.write("<p>The weather of London is. <p/>")
           res.write("<h1>The tempearture of London is " + temp + "degrees Celcius.</h1>")
           res.send()
        })
    })

    //res.send("server is up and running.")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});