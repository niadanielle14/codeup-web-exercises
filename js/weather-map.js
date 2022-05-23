$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    $("#current-weather").append("<p>" + data.current.temp + "</p>")
    console.log('A step further - information for tomorrow: ', data.daily[1]);
    data.daily.forEach(function (dailyForcast, index){
        if (index < 5 ){
            console.log(new Date(dailyForcast.dt*1000));
            console.log(dailyForcast.temp.max)
            console.log(dailyForcast.humidity)
            console.log(dailyForcast.pressure)
            console.log(dailyForcast.wind_speed)
            $("#forcast").append("<p>" + new Date(dailyForcast.dt*1000) + "</p>") // Current Date & Time Display
            $("#forcast").append("<p> Temperature: " + dailyForcast.temp.max + "</p>") // Max Temp Display
            $("#forcast").append("<p> Humidity: " + dailyForcast.humidity + "% </p>") // Humidity Display
            $("#forcast").append("<p> Pressure: " + dailyForcast.pressure + "</p>") // Pressure Display
            $("#forcast").append("<p> Wind: " + dailyForcast.wind_speed + " mph</p>") // WindSpeed Display
        }

        let current_datetime = new Date()
        console.log(current_datetime.toString())


    })

});
