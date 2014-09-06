var Albox = require( './albox/public/js/main.js')

var albox = new Albox({
    title: 'Focus!',
    message: 'Is this a good use of your time ?',
    allowEscape: true,
    fadeSpeed: 100,
    onYes: function() {},
    onDismiss: function() {
      chrome.runtime.sendMessage( {action: 'close'} );
    }
});

setTimeout( albox.show.bind( albox ), 20000 );
