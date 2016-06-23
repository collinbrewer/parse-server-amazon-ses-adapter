# Parse Server Amazon SES Adapter
Used to send Parse Server password reset and email verification emails with Amazon SES.

Read more here: https://github.com/ParsePlatform/parse-server.

## Compatibility
Tested with Parse Server v2.2.13

## Install
```sh
$ npm install parse-server-amazon-ses-adapter -S
```

## Usage
Replace the config with your info.  You can find your AWS SES credentials here: http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html

```javascript
var parse=new ParseServer({
   //...
   emailAdapter: {
      module: "parse-server-amazon-ses-adapter",
      options: {
         from: "Your Name <noreply@yourdomain.com>",
         accessKeyId: "Your AWS IAM Access Key ID",
         secretAccessKey: "Your AWS IAM Secret Access Key",
         region: "Your AWS Region"
      }
   }
});
```
