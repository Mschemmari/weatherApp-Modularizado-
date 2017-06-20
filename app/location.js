

(function(app, window){
  app.Location = {
    init: function(){
      var ciudad = document.querySelector(".ciudad");
      var apiKey = 'f941c9d5ba61513ba6332b4d3bbea3bd';
      var url = 'https://api.darksky.net/forecast/';

      var lang = document.querySelector('.language').value;
      var units = document.querySelector('.units').value;
      //hago pedido de ubicacion del navegador
      navigator.geolocation.getCurrentPosition(success, error);

      function success(position){
       var lat = position.coords.latitude;
       var lon = position.coords.longitude;
       //pedido de datos a la api darksky
          $.ajax({
            url: url   + apiKey + "/" + lat + "," + lon+ '?lang='+ lang +'&units='+units,
            dataType: "jsonp",
            success: function (data) {}
          }).done(app.Current.init);
        }
      function error(){
        //error in case couldnt get location
      }
    }
  }
})(FORECAST);
