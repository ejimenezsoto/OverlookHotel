import User from "./classes/User";
import Bookings from "./classes/Bookings";

const userDashboardSection = document.querySelector('.user-dashboard-section');
const welcomeMessage = document.querySelector('user-dashboard-welcome-message');
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
        
    }




}

export default domUpdates;