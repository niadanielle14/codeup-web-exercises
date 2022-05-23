$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current); // Current Data
    console.log('A step further - information for tomorrow: ', data.daily[1]); // Daily Data
    data.daily.forEach(function (dailyForcast, index){
        if (index < 5 ){
            console.log(new Date(dailyForcast.dt*1000)); // Current Date Display
            console.log(dailyForcast.temp.max)
            console.log(dailyForcast.humidity)
            console.log(dailyForcast.pressure)
            console.log(dailyForcast.wind_speed)
            console.log(dailyForcast.weather[0].description)

            var html = '<div class="col card" >';
            html += "<p>" + new Date(dailyForcast.dt*1000) + "</p>";
            html += "<p> Temperature: " + dailyForcast.temp.max + " °F</p>"
            html += "<p> Description: " + dailyForcast.weather[0].description + " </p>"
            html += "<p> Humidity: " + dailyForcast.humidity + "% </p>"
            html += "<p> Pressure: " + dailyForcast.pressure + "</p>"
            html += "<p> Wind: " + dailyForcast.wind_speed + " mph</p>"
            html += '</div>';
            $('#forcast').append(html);

            // $("#forcast").append("<div class='daily'>")
            // $("#forcast").append("<p>" + new Date(dailyForcast.dt*1000) + "</p>") // Current Date & Time Display
            // $("#forcast").append("<p> Temperature: " + dailyForcast.temp.max + " °F</p>") // Max Temp Display
            // $("#forcast").append("<p> Description: " + dailyForcast.weather[0].description + " </p>") // Description Display
            // $("#forcast").append("<p> Humidity: " + dailyForcast.humidity + "% </p>") // Humidity Display
            // $("#forcast").append("<p> Pressure: " + dailyForcast.pressure + "</p>") // Pressure Display
            // $("#forcast").append("<p> Wind: " + dailyForcast.wind_speed + " mph</p>") // WindSpeed Display
            // $("#forcast").append("</div>")
        }

        let current_datetime = new Date()
        console.log(current_datetime.toString()) // Creates Current Date


    })

});
