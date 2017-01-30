Module.register("twitControl",{

	// Default module config.
	defaults: {
		maxNumTweets: 0,
		streamType: 'followings',
		api_keys: {
			consumer_key: '',
			consumer_secret: '',
			access_token_key: '',
			access_token_secret: ''
		},
	},
	
	start: function() {
		Log.info(this.config);
		Log.info("Starting module: " + this.name);
		if(this.config.maxNumTweets < 1){
			this.config.maxNumTweets = 0;
		}
		this.startStream();
	},
	
	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},
	
	startStream: function(){
		Log.info(this.config);
		this.tweets = [];
		this.sendSocketNotification("START_STREAM", {config: this.config});
	},
	
	socketNotificationReceived: function(notification, payload){
		if(notification === "DATA"){
			if(payload.text != null){
				payload.date = new Date();
				this.tweets.push(payload);
				if(this.tweets.length > this.config.maxNumTweets && this.config.maxNumTweets != 0){
					this.tweets.splice(0, 1);
				}
				this.updateDom(2.5 * 1000);
			}
		}
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		var title = document.createElement("div");
		title.className = "small light bright";
		title.innerHTML = "Twitter Feed";
		wrapper.appendChild(title);
		for(var t in this.tweets){
			
				var tweetElement = document.createElement("div");
				tweetElement.className = "bright medium light";
				tweetElement.innerHTML = this.tweets[t].text;
				
				var author = document.createElement("div");
				author.className = "small light";
				author.innerHTML = "@"+this.tweets[t].user.screen_name;
				//author.innerHTML += " | " + this.tweets[t].date.prototype.toLocaleString();
				
				
				wrapper.appendChild(tweetElement);
				wrapper.appendChild(author);
		}
		return wrapper;
	}
});

