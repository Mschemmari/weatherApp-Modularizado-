(function(app, window){
  app.Daily = {
    init: function(){
      console.log(daily, data);

      var $listadoProductos = $('.weather__daily');
      var plantillaProducto = $listadoProductos.html();
      $listadoProductos.empty();
      var $producto = $(plantillaProducto);

      $('.weather__daily__summary', $producto).html(daily.summary);
      $('.weather__daily__feels__like', $producto).html("Max temp " + daily.apparentTemperatureMax + " <sup>o</sup>C");
      $listadoProductos.append($producto);
    }
  }
})(FORECAST);
