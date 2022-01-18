class User {
    constructor(user){
        this.id = user.id;
        this.name = user.name;
        this.pastBookings = [];
        this.futureBookings = [];
        this.allBookings = [];
        this.totalSpent = 0;
    };

};
module.exports = User;