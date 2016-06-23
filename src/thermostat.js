function Thermostat() {
  this._startingTemperature = 20;
  this._RESET_TEMPERATURE = 20;
  this._MINIMUM_TEMPERATURE = 10;
  this._MAXIMUM_TEMPERATURE_PSM = 25;
  this._MAXIMUM_TEMPERATURE = 32;
  this.powerSavingMode = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

// ======================== Set Temperature ==============================

Thermostat.prototype.currentTemperature = function(){
  return this._startingTemperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if(this.isMaximumTemperature()){
    return;
  }
  return this._startingTemperature++;
};

Thermostat.prototype.decreaseTemperature = function(){
  if(this.isMinimumTemperature())
  {
    return this._MINIMUM_TEMPERATURE;
  }
  return this._startingTemperature--;
};

// ======================== Max / Min temperature ==========================

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.powerSavingMode === true){
    return this._startingTemperature === this._MAXIMUM_TEMPERATURE_PSM;
  }
    return this._startingTemperature === this._MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._startingTemperature === this._MINIMUM_TEMPERATURE;
};

// ======================== Power saving mode ==============================

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
};

// ======================== Reset Temperature ==============================

Thermostat.prototype.resetTemperature = function() {
  this._startingTemperature = this._RESET_TEMPERATURE;
};

// ======================== Energy Usage ===================================

Thermostat.prototype.energyUsage = function() {
  if (this._startingTemperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this._startingTemperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this._startingTemperature <= this._MAXIMUM_TEMPERATURE_PSM) {
    return 'medium-usage';
  }
  return 'high-usage';
};
