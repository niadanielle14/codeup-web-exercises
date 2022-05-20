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
            console.log(dailyForcast)
            $("#forcast").append("<p>" + new Date(dailyForcast.dt*1000) + "</p>")
            $("#forcast").append("<p>" + dailyForcast.temp.max + "</p>")

        }

        let current_datetime = new Date()
        console.log(current_datetime.toString())
    })
    data.daily.forEach(function (dailyHumidity,index)
    )
});
