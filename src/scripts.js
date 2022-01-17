import './css/base.scss';
import User from '../src/classes/User';
import Booking from '../src/classes/Bookings';
import { customerData, roomData, bookingData } from './apiCalls';


//Global Variables
let currentUser;
let users;
let bookings;

Promise.all([customerData, roomData, bookingData])
.then((data) => {
    bookings = new Booking(data[2].bookings, data[1].rooms);
    users = data[0].customers.map((customer) => {
        return new User(customer.id,customer.name, bookings)
    })
    currentUser = users[Math.floor(Math.random()* users.length)];
    console.log(currentUser)
})