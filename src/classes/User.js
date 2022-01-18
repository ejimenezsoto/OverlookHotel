class User {
    constructor(user){
        this.id = user.id;
        this.name = user.name;
        this.pastBookings = [];
        this.futureBookings = [];
        this.allBookings = [];
        this.totalSpent = 0;
    };
    getAllBookings(bookings){
        this.futureBookings = [];
        this.pastBookings = [];
        bookings.forEach(booking => {
            if(booking.userID === this.id){
                this.allBookings.push(booking)
                let todaysDate = new Date();
                let bookingDate = new Date(booking.date);
                if(bookingDate < todaysDate){
                    this.pastBookings.push(booking)
                } else {
                    this.futureBookings.push(booking)
                }
            }
        }) 
    }
  
};
module.exports = User;