class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.pastBookings = [];
        this.futureBookings = [];
        this.allBookings = [];
        this.totalSpent = 0;
    }

    getAllBookings(bookings) {
        this.futureBookings = [];
        this.pastBookings = [];
        bookings.forEach((booking) => {
            if (booking.userID === this.id) {
                this.allBookings.push(booking);
                let todaysDate = new Date();
                let bookingDate = new Date(booking.date);
                if (bookingDate < todaysDate) {
                    this.pastBookings.push(booking);
                } else {
                    this.futureBookings.push(booking);
                }
            }
        });
        this.sortBookingsByDate();
    }
    sortBookingsByDate() {
        this.futureBookings = this.futureBookings.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
        this.pastBookings = this.pastBookings.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );
    }

    returnTotalSpent(allRooms) {
        this.totalSpent = 0;
        allRooms.forEach((room) => {
            this.pastBookings.forEach((booking) => {
                if (booking.roomNumber === room.roomNumber) {
                    this.totalSpent += room.costPerNight;
                }
            });
        });
        console.log(this.totalSpent, "totalSpent");
        return this.totalSpent.toFixed(2);
    }
}
module.exports = User;
