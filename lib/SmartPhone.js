var extend = require('./extend.js');
var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser');


function SmartPhone() {
Phone.call(this, 3333333);
GameConsole.call(this, 'Smart Phone');

}
extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;
