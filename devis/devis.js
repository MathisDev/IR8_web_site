
"use strict";
const nodemailer = require("nodemailer");


function main() {
    compil()
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    }); 
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <siteIr8envoy@gmail.com>', // sender address
      to: "siteIr8recu@gmail.com", // list of receivers
      subject: subject+"Devis Ir8", // Subject line
      text: message +"Email :"+email, // plain text body
      html: "<b>Hello world?</b>", // html body
    }); 
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

app.listen(3000);
console.log('App is running');


function compil() {
    console.log("FUNCTION 'compil' RUN");

    let i = 0;
    let i1 = document.getElementById("input").value;
    let i2 = document.getElementById("input1").value;
    let i3 = document.getElementById("input2").value;
    let i4 = document.getElementById("input3").value;
    let i5 = document.getElementById("input4").value;

    let text1 = document.getElementById('text-input1');
    let text12 = document.getElementById('p-text1');

    let text2 = document.getElementById('text-input2');
    let text22 = document.getElementById('p-text2');

    let text3 = document.getElementById('text-input3');
    let text32 = document.getElementById('p-text3');


    let a = i1 + ' / '+ i2 + ' / ' +i3 + ' / '+ i4 + '/' + i5;
    i1 = 'm' + i1;
    i2 = 'm' + i2;
    i3 = 'm' + i3;
    i4 = 'm' + i4;
    i5 = 'm' + i5;


    if (i != 3) {
        /* --- */
        if (i1 === 'm') {
            text1.style.color = "red";
            text12.style.color = "red";
        }
        else {
            text1.style.color = "black";
            text12.style.color = "grey";
            i = i + 1;
        }
        /* --- */
        if (i2 === 'm') {
            text2.style.color = "red";
            text22.style.color = "red";
        }
        else {
            text2.style.color = "black";
            text22.style.color = "grey";
            i = i + 1;
        }
        /* --- */
        if (i3 === 'm') {
            text3.style.color = "red";
            text32.style.color = "red";
        }
        else {
            text3.style.color = "black";
            text32.style.color = "grey";
            i = i + 1;
        }
    }
    else {
       console.log(" OUT 'compil' SUCSSS ");
       main()
    }
}
