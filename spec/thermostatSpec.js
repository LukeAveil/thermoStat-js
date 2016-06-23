describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Has a starting temperature of 20 degrees", function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it("Increases temperature when up button is pressed", function() {
    thermostat.increaseTemperature();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it("Decreases temperature when up button is pressed", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees", function () {
    for(var i = 0; i< 11; i++)
    {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('should have powersaver mode', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('should have a maximum temp of 32 degrees', function(){
    thermostat.switchPowerSavingModeOff();
    for(var i = 0; i <= 12; i++){
      thermostat.increaseTemperature();
    }
    expect(thermostat.currentTemperature()).toEqual(32);
  });

  it('can switch PSM off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function(){
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('should have a maximum temp of 25 degrees when PSM', function(){
    for(var i = 0; i <= 5; i++){
      thermostat.increaseTemperature();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it('can be reset to the default temp', function(){
    for(var i = 0; i <= 5; i++){
      thermostat.increaseTemperature();
    }
    thermostat.resetTemperature();
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.decreaseTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.increaseTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });

});
