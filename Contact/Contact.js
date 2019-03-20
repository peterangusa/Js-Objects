function Contact(first, second, number, email, address) {
  // Constructor function for Contact objects
  this.firstName = first;
  this.secondName = second;
  this.phoneNumber = number;
  this.email = email;
  this.street = '';
  this.city = '';
  this.country = '';

}
//JavaScript prototype property allows you to add new methods to objects constructors

Contact.prototype.address = function() {
  return this.street + ', ' + this.city + ', ' + this.country;
}
var mycontact = new Contact ("Peter", "angusa", "0774517237", "peter.angusa@outlook.com")

// Display address details on console
mycontact.street = 'Lumumba Avenue';
mycontact.city = 'Kampala';
mycontact.country = 'Uganda';

// Display contact details on console
 mycontact.firstName + " " + mycontact.secondName + " " + mycontact.phoneNumber+ " " + mycontact.email+ " " + mycontact.address()

mycontact
