// Below function is from SmtpJS.com and credited in the ReadMe file
// I have then entered my information below and requirements for the User to input in order to send an email to me.
function sendEmail() {
  Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'megantech@hotmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "Name:" + document.getElementById("name").value
    + "<br> Email:" + document.getElementById("email").value
    + "<br> Phone Number:" + document.getElementById("phone").value
    + "<br> Message:" + document.getElementById("message").value
  }).then(
  message => alert("Message Sent Successfully")
  );
}