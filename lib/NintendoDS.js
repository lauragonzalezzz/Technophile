var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js')
var extend = require('./extend.js')

function NintendoDS() {
	GameConsole.call(this, 'Nintendo DS');
}
extend(NintendoDS.prototype, WebBrowser.prototype);
extend(NintendoDS.prototype, GameConsole.prototype);

module.exports = NintendoDS;