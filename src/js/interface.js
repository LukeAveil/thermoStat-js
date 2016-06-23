$(document).ready(function(){

  var thermostat = new Thermostat();
  updateTemperature();


  $('#temperature-up').click(function() { // event listener
    thermostat.increaseTemperature(); // update model
    updateTemperature(); // update view
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat._startingTemperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=72230f12f0d38f571379020ed7b51a88';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    });
  }

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=72230f12f0d38f571379020ed7b51a88&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

});
