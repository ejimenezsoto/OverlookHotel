import './css/base.scss';
import User from './classes/User';
import Bookings from './classes/Bookings';
import Hotel from './classes/Hotel'
import Room from './classes/Room';
import { customerData, roomData, bookingData } from './apiCalls';
import domUpdates from './domUpdates'


const checkBookings = document.getElementById('checkDateAvail');
const filterRoom = document.getElementById('checkRoomType');


//Global Variables
let currentUser;
let allUsers = [];
let allRooms = [];
let allBookings = [];
let hotel;

Promise.all([customerData, roomData, bookingData])
.then((data) => {
   data[2].bookings.forEach(booking => allBookings.push(new Bookings(booking)));
   data[1].rooms.forEach(room => allRooms.push(new Room(room)))
   data[0].customers.forEach(user => allUsers.push(new User(user,allRooms)))

   currentUser = allUsers[Math.floor(Math.random() * allUsers.length)]
   currentUser.getAllBookings(allBookings);
   currentUser.returnTotalSpent(allRooms)

   domUpdates.displayDashboardInfo(currentUser,allRooms);

   hotel = new Hotel(currentUser,allRooms,allBookings)
   
   
});





checkBookings.addEventListener('change', function (){
     hotel.filterAvailableRooms(checkBookings.value)
      
})

filterRoom.addEventListener('change', function (){
   domUpdates.filterRoomType(filterRoom.value,hotel.availableRooms)
})





