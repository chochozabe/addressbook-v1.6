Meteor.publish("AddressBookData", function(count) {
    var userId = this.userId;

    if(userId) {
        return AddressBook.find({}, {limit:count, sort:{name:1}});
    }
})