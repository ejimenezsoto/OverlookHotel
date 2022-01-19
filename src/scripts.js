import './css/base.scss';
import User from './classes/User';
import Bookings from './classes/Bookings';
import Hotel from './classes/Hotel'
import Room from './classes/Room';
import { customerData, roomData, bookingData,updateBookings} from './apiCalls';
import domUpdates from './domUpdates'


const checkBookings = document.getElementById('checkDateAvail');
const filterRoom = document.getElementById('checkRoomType');
const allRoomsSection = document.querySelector('.all-rooms-section');
const logInSection = document.querySelector('.log-in-Section');
const logInButton = document.getElementById('log-in-button');
const username = document.getElementById('username');
const password = document.getElementById('password')
const navSection = document.querySelector('.nav-buttons');
const userDashboardSection = document.querySelector('.user-dashboard-section');
const logOutButton = document.querySelector('.log-out-button');



//Global Variables
let currentUser;
let allUsers = [];
let allRooms = [];
let allBookings = [];
let hotel;
let id;

 export const updateUserData = (id) => {

      Promise.all([customerData, roomData, bookingData])
      .then(data => {
         domUpdates.show([userDashboardSection])
         allRooms = [];
         allBookings = [];
         hotel = '';
         currentUser = '';
         data[2].bookings.forEach(booking => allBookings.push(new Bookings(booking)));
         data[1].rooms.forEach(room => allRooms.push(new Room(room)));
         data[0].customers.forEach(user => allUsers.push(new User(user,allRooms)));
         currentUser = allUsers.find(user => user.id === id);
         hotel = new Hotel(currentUser,allRooms,allBookings);
         currentUser.getAllBookings(allBookings);
         currentUser.returnTotalSpent(allRooms);
         
         domUpdates.displayDashboardInfo(currentUser,allRooms);
      })
}

const bookRoom = (currentUser,event,availableRooms) => {
   domUpdates.hide([allRoomsSection])
   domUpdates.show([allRoomsSection])
   allRoomsSection.innerHTML = `
   <p>Thank You for booking a room!</p>
   `
   const date = new Date(checkBookings.value).toISOString().split('T')[0].split('-').join('/');
   const rooms = availableRooms.find(room => event.target.id == room.roomNumber)
   const bookingObject = {
      'userID': currentUser.id,
      'date': date,
      'roomNumber': rooms.roomNumber
   }

   updateBookings(bookingObject)
   .then(response => updateUserData(id))
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
   if(username.value.slice(0,8) === 'customer' && password.value === 'overlook2021'){
       id = parseInt(username.value.substring(8))

      domUpdates.hide([logInSection])
      domUpdates.show([allRoomsSection,navSection,userDashboardSection,logOutButton])
      
      updateUserData(id)
   }
})

logOutButton.addEventListener('click', function() {
   location.reload()
})

