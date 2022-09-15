function sendEmail() {
    Email.send({
    Host : "smtp.outlook.com",
    Username : "megantech@hotmail.com",
    Password : "WhatCameFirst",
    To : 'megantech@hotmail.com',
    From : document.getElementById("email").value,
    Subject : "WCF Quiz Enquiry",
    Body : "Name:" + document.getElementById("name").value
    + "<br> Email:" + document.getElementById("email").value
    + "<br> Phone Number:" + document.getElementById("phone").value
    + "<br> Message:" + document.getElementById("message").value

}).then(
  message => alert("Message Sent Successfully")
);
}