
var NodeHelper = require("node_helper");
var Stream = require('user-stream');

module.exports = NodeHelper.create({
	
	start: function() {
		console.log("Starting module: " + this.name);
		
	},
	
	socketNotificationReceived: function(notification, payload) {
		
		console.log("Notification: " + notification + " Payload: " + payload);
		
		if(notification === "START_STREAM"){
			this.startTwitterStream(payload.config.api_keys, payload.config.streamType);
		}
		
	},
	
	startTwitterStream: function(api_keys, streamType){
		
		var self = this;
		
		this.stream = new Stream({
			consumer_key: api_keys.consumer_key,
			consumer_secret: api_keys.consumer_secret,
			access_token_key: api_keys.access_token_key,
			access_token_secret: api_keys.access_token_secret
		});
		
		this.params = {
			with: streamType,
			stringify_friend_ids: true
		};
		
		this.stream.stream(this.params);
		
		this.stream.on('data', function(json) {
		  self.sendSocketNotification("DATA", json);
		});
	},


});
