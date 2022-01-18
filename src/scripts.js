import './css/base.scss';
import User from './classes/User';
import Bookings from './classes/Bookings';
import Room from './classes/Room';
import { customerData, roomData, bookingData } from './apiCalls';
import domUpdates from './domUpdates'


//Global Variables
let currentUser;
let allUsers = [];
let allRooms = [];
let allBookings = [];

Promise.all([customerData, roomData, bookingData])
.then((data) => {
   data[2].bookings.forEach(booking => allBookings.push(new Bookings(booking)));
   data[1].rooms.forEach(room => allRooms.push(new Room(room)))
   data[0].customers.forEach(user => allUsers.push(new User(user,allRooms)))

   currentUser = allUsers[Math.floor(Math.random() * allUsers.length)]
   currentUser.getAllBookings(allBookings);
   currentUser.returnTotalSpent(allRooms)

   domUpdates.displayDashboardInfo(currentUser,allRooms);
   
});

