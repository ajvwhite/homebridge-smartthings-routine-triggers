var request = require('request');
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory('homebridge-smartthings-routine-triggers', 'HomebridgeRoutineTrigger', HomebridgeRoutineTriggerAccessory);
}

function HomebridgeRoutineTriggerAccessory(log, config) {
  var accessory = this;

  this.log = log;
  this.name = config['name'];
  this.appServerUri = config['appServerUri']
  this.smartAppId = config['smartAppId']
  this.accessToken = config['accessToken'];

  this.service = new Service.Switch(this.name);

  this.service
      .getCharacteristic(Characteristic.On)
      .on('set', function(state, callback) {
        if(state) {
          var url = accessory.appServerUri + "/api/smartapps/installations/" + accessory.smartAppId + "/trigger-routine?access_token=" + accessory.accessToken;

          accessory.log('ON Trigger met, activating routine `' + accessory.name + '`: ' + url);

          request({
            uri: url,
            method: 'POST',
            json: {
              "routine": accessory.name
            }
          }, function(err, response, body) {
            if (!err && response.statusCode == 200) {
              accessory.log("Triggered successfully")
              callback();
            } else {
              var errorObj = {
                error: true,
                type: "SmartAppException",
                message: "Unknown error"
              };

              if (err && err instanceof Object) {
                errorObj = err;
              } else if (!err && body instanceof Object) {
                errorObj = body;
              } else if (!err && body) {
                errorObj.message = body;
              } else {
                errorObj.message = response.statusCode.toString();
              }

              var errorMsg = errorObj.message;
              if(body && body.message) { errorMsg = body.message; }
              if(body && body.msg) { errorMsg = body.msg; }

              accessory.log("Error '" + response.statusCode + "': " + errorMsg);
              callback(errorObj);
            }
          });
        } else {
          accessory.log('OFF trigger met, no action taken due to nature of routines');
          callback();
        }
      });
}

HomebridgeRoutineTriggerAccessory.prototype.getServices = function() {
  return [this.service];
};
