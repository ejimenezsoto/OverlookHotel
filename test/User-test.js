import { expect } from "chai";
import User from '../src/classes/User';
import Bookings from "../src/classes/Bookings";
import Room from "../src/classes/Room";
import { customer } from "./test-data/user-test-data";
import { rooms } from "./test-data/rooms-test-data";
import { bookings } from "./test-data/bookings-test-data";


describe('User', () => {
    const user = new User(customer);
    const hotelRooms = rooms.map(room => new Room(room));
    const roomBookings = bookings.map(booking => new Bookings(booking));

    it('should be a function', () => {
        expect(User).to.be.a('function')
    })

    it('should be an instance of a User', () => {
        expect(user).to.be.an.instanceOf(User)
    })

    it('should have a name', () => {
        expect(user.name).to.equal('Leatha Ullrich')
    })

    it('should have an id', () => {
        expect(user.id).to.equal(1)
    })

    user.getAllBookings(roomBookings);
    user.returnTotalSpent(hotelRooms);

    it('should hold all bookings', () => {
        expect(user.allBookings.length).to.equal(4)
    })

    it('should hold all bookings', () => {
        expect(user.futureBookings.length).to.equal(2)
    })

    it('should hold all bookings', () => {
        expect(user.pastBookings.length).to.equal(2)
    })

    it('should return total cost of rooms', () => {
        expect(user.totalSpent).to.equal(837.81)
    })
})
