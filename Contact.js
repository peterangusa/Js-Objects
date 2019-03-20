function Contact(first, second, number, email, address) {
  // Constructor function for Contact objects
  this.firstName = first;
  this.secondName = second;
  this.phoneNumber = number;
  this.email = email;
  this.address = address;
}
// Create a Contact object
var mycontact = new Contact ("Peter", "angusa", 0774517237, "peter.angusa@outlook.com", "Plot 65, Kampala")
// Display contact details on console
mycontact.firstName
