import { expect } from "chai";
import User from '../src/classes/User';
import Bookings from "../src/classes/Bookings";
import Room from "../src/classes/Room";
import { customer } from "./test-data/user-test-data";
import { rooms } from "./test-data/rooms-test-data";
import { bookings } from "./test-data/bookings-test-data";
import Hotel from "../src/classes/Hotel";

describe('Hotel', () => {
    const user = new User(customer);
    const hotelRooms = rooms.map(room => new Room(room));
    const roomBookings = bookings.map(booking => new Bookings(booking));
    const hotel = new Hotel(user,hotelRooms,roomBookings)

    it('should be a function', () => {
        expect(Hotel).to.be.a('function')
    })

    it('should be an instance of a User', () => {
        expect(hotel).to.be.an.instanceOf(Hotel)
    })

    
})
