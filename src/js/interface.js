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

  function updateTemperature() {
    $('#temperature').text(thermostat._startingTemperature);
  }


});
