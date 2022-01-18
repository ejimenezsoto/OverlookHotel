import User from "./classes/User";
import Bookings from "./classes/Bookings";

const userDashboardSection = document.querySelector('.user-dashboard-section');
const welcomeMessage = document.querySelector('.user-dashboard-welcome-message');
const pastBookingsTable = document.getElementById('past-bookings-table');
const futureBookingsTable = document.getElementById('future-bookings-table');
const totalSpent = document.querySelector('.total-spent')



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



    }




}

export default domUpdates;