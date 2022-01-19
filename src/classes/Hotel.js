class Hotel {
    constructor(currentUser, allRooms, allBookings) {
        this.currentUser = currentUser;
        this.allRooms = allRooms;
        this.allBookings = allBookings;
        this.availableRooms = [];
    }

    filterAvailableRooms(date) {
        this.availableRooms = [];
        let checkDate = date.split("-").join("");
        const allBookings = this.allBookings.filter((booking) => {
            let bookedDate = booking.date.split("/").join("");
            return checkDate === bookedDate;
        });

        const availableRooms = this.allRooms.filter((room) => {
            const roomNums = allBookings.map((booking) => booking.roomNumber);
            return !roomNums.includes(room.roomNumber);
        });
        this.availableRooms.push(availableRooms);
    }
}

module.exports = Hotel;
