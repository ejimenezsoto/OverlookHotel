import './css/base.scss';
import User from './classes/User';
import Bookings from './classes/Bookings';
import Hotel from './classes/Hotel'
import Room from './classes/Room';
import { customerData, roomData, bookingData,updateBookings } from './apiCalls';
import domUpdates from './domUpdates'


const checkBookings = document.getElementById('checkDateAvail');
const filterRoom = document.getElementById('checkRoomType');
const allRoomsSection = document.querySelector('.all-rooms-section');
const logInSection = document.querySelectorAll('.log-in-Section');
const logInButton = document.getElementById('log-in-button');





//Global Variables
let currentUser;
let allUsers = [];
let allRooms = [];
let allBookings = [];
let hotel;

// Promise.all([customerData, roomData, bookingData])
// .then((data) => {
//    data[2].bookings.forEach(booking => allBookings.push(new Bookings(booking)));
//    data[1].rooms.forEach(room => allRooms.push(new Room(room)))
//    data[0].customers.forEach(user => allUsers.push(new User(user,allRooms)))
//    currentUser = allUsers[Math.floor(Math.random() * allUsers.length)]
//    currentUser.getAllBookings(allBookings);
//    currentUser.returnTotalSpent(allRooms)
//    domUpdates.displayDashboardInfo(currentUser,allRooms);
//    hotel = new Hotel(currentUser,allRooms,allBookings)
// });







const bookRoom = (currentUser,event,availableRooms) => {
   const date = new Date(checkBookings.value).toISOString().split('T')[0].split('-').join('/');
   const rooms = availableRooms.find(room => event.target.id == room.roomNumber)
   const bookingObject = {
      'userID': currentUser.id,
      'date': date,
      'roomNumber': rooms.roomNumber
   }
   updateBookings(bookingObject)

}

checkBookings.addEventListener('change', function (){
     hotel.filterAvailableRooms(checkBookings.value)
});

filterRoom.addEventListener('change', function (){
   domUpdates.filterRoomType(filterRoom.value,hotel.availableRooms)
})

allRoomsSection.addEventListener('click', function(event) {
   bookRoom(currentUser,event,hotel.availableRooms.flat(1))
})

logInButton.addEventListener('click', function(event) {
   event.preventDefault()
   console.log(event)
})

