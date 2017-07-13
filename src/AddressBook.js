function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.getInitialContacts = function(cb) {
    const self = this;
    
    setTimeout(() => {
        self.initialComplete = true;
        if(cb) {
            return cb();
        }
    }, 3);
}

AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function (index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function (index) {
    this.contacts.splice(index, 1); 
}