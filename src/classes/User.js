class User {
    constructor(id,name,bookings){
        this.id = id;
        this.name = name;
        this.bookings = bookings;
        this.pastBookings = [];
    }

}
module.exports = User;