var AmazonSES = require("amazon-ses-mailer");

module.exports=function(options){

   var ses = new AmazonSES(
      options.accessKeyId,
      options.secretAccessKey,
      options.region
   );

   var sendMail=function(mail){

      return new Promise(function(resolve, reject){

         ses.send({
            from: options.from,
            to: [mail.to],
            subject: mail.subject,
            body: {
               text: mail.text
            }
         }, function(error, data) {

            if (error) {
               reject(error);
            } else {
               resolve(data);
            }
         });
      });
   };

   return {
      sendMail: sendMail
   }
};
