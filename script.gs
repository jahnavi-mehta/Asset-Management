function myFunction(e) {
  var values = e.namedValues;
  var email_id = values["Email address of Manager"][0];
  var manager= values["Name of Manager"][0];
  var name = values["Name of Asset Receiver"][0];
  Logger.log(email_id);
  Logger.log(name);
  var msg ="Hello " + manager + "!" + " " + "Kindly give approval to " + name + " to take the assets";
  GmailApp.sendEmail(email_id, "Asset Approval", msg);
  
}
