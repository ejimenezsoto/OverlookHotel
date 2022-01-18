import User from "./classes/User";
import Bookings from "./classes/Bookings";
import { roomData } from "./apiCalls";

const userDashboardSection = document.querySelector('.user-dashboard-section');
const welcomeMessage = document.querySelector('.user-dashboard-welcome-message');
const pastBookingsTable = document.getElementById('past-bookings-table');
const futureBookingsTable = document.getElementById('future-bookings-table');
const totalSpent = document.querySelector('.total-spent')
const allRoomsSection = document.querySelector('.all-rooms-section');



const domUpdates = {
    hide(elements){
        elements.map(element => element.classList.add('hidden'));
    },
    show(elements){
        elements.map(element => element.classList.remove('hidden'));
    },

    displayDashboardInfo(currentUser,allRooms){

        welcomeMessage.innerText = '';
        pastBookingsTable.innerHTML = '';
        futureBookingsTable.innerHTML = '';
        totalSpent.innerText = '';
        welcomeMessage.innerText  = `Welcome ${currentUser.name} to your Dashboard!`
        currentUser.pastBookings.map(booking => {
            const room = allRooms.find(room => {
                if(room.roomNumber === booking.roomNumber) {
                    return room.type
                }
            })
            pastBookingsTable.innerHTML += `
            <tr>
              <td id="pastStayDate">${booking.date}</td>
              <td id="pastStayRoom">${booking.roomNumber} #</td>
              <td id="pastStayType">${room.type}</td>
            </tr>
            `
        })

        currentUser.futureBookings.map(booking => {
            const room = allRooms.find(room => {
                if(room.roomNumber === booking.roomNumber) {
                    return room.type
                }
            })
            futureBookingsTable.innerHTML += `
            <tr>
              <td id="pastStayDate">${booking.date}</td>
              <td id="pastStayRoom">${booking.roomNumber} #</td>
              <td id="pastStayType">${room.type}</td>
            </tr>
            `
        })
        totalSpent.innerText = `Your total spent at the Overlook Hotel is ${currentUser.totalSpent.toFixed(2)}`
    },


    filterRoomType(roomValue,availableRooms){
        allRoomsSection.innerHTML = '';
        if(roomValue === 'all-rooms'){
            this.displayRooms(availableRooms)
        } else {
            const roomType = availableRooms.flat(1).filter(room => room.type === roomValue)
            console.log(roomType)
            if(roomType.length > 0){
                roomType.forEach(room => {
                    allRoomsSection.innerHTML += `
                <div>
                    <ul>
                        <li>${room.type}</li>
                        <li>${room.roomNumber}</li>
                        <li>${room.hasBidet}</li>
                        <li>${room.numBeds}</li>
                        <li>${room.costPerNight}</li>
                    </ul>
                </div>
                    `
                })
            } else {
                allRoomsSection.innerHTML = '<h1>Sorry no rooms match your choices!</h1>'
            }
        }
    },



    displayRooms(availableRooms){
        allRoomsSection.innerHTML = '';
        if(availableRooms.length === 0){
            allRoomsSection.innerHTML = `<h1> Sorry theres no rooms available for that date! </h1>`
        } else {
            availableRooms.flat(1).forEach(room => {
                console.log(room)
                allRoomsSection.innerHTML += `
                <div>
                    <ul>
                    <li>${room.type}</li>
                    <li>${room.roomNumber}</li>
                    <li>${room.hasBidet}</li>
                    <li>${room.numBeds}</li>
                    <li>${room.costPerNight}</li>
                    </ul>
                </div>
                `
            })
        }
    }




}

export default domUpdates;