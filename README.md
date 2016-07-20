# twitControl
Twitter Interface module for MagicMirror<sup>2</sup>

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
  * [Twitter Dev Access Tokens](https://dev.twitter.com/oauth/overview/application-owner-access-tokens)
  * `npm install user-stream` in your `~/MagicMirror` directory

## Installation
 1. Clone this repo into your `modules` directory.
 2. Configure your `config.js` file with your twitter access tokens:
 
```
		{
			module: 'twitControl',
			position: 'top_left',
			config: {
				maxNumTweets: 5,
				api_keys: {
					consumer_key: 'YOUR CONSUMER KEY',
					consumer_secret: 'YOUR CONSUMER SECRET',
					access_token_key: 'YOUR ACCESS TOKEN KEY',
					access_token_secret: 'YOUR ACCESS TOKEN SECRET'
				}
			}
		},
```
 
## Config
| **Option** | **Description** |
| --- | --- |
| `maxNumTweets` | The maximum number of tweets to display at any given time.  (0 for unlimited) |
