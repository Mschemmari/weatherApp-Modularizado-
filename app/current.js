//recibo datos del pedido de ajax desde location.js
(function(app, window, data){
  app.Current = {
    init: function(data){
      console.log(data);
      console.log(data.daily.data);
      //capturo la plantilla de producto en el html
      var plantilla = document.querySelector(".weather__current");
      //imprimo datos en el html
      document.querySelector(".weather__current__location").innerHTML = data.timezone;
      document.querySelector(".weather__current__feels__like").innerHTML = "Feels like " + data.currently.apparentTemperature + " <sup>o</sup>C";
      document.querySelector(".weather__current__temperature").innerHTML = "Current " + data.currently.temperature + " <sup>o</sup>C";
      document.querySelector(".weather__current__summary").innerHTML = data.currently.summary;
      //capturo datos para enviar a daily.js
      var daily = data.daily.data;
      
      daily.forEach(app.Daily.init)
    }
  }
})(FORECAST);
