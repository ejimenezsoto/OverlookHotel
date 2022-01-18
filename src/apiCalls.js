
const customerData = fetch('http://localhost:3001/api/v1/customers')
.then((response) => response.json())

const roomData = fetch('http://localhost:3001/api/v1/rooms')
.then((response) => response.json())

const bookingData = fetch('http://localhost:3001/api/v1/bookings')
.then((response) => response.json())


const updateBookings = (booking) => {
    return fetch("http://localhost:3001/api/v1/bookings", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => console.log(response.json()))
  };

export {customerData, roomData, bookingData, updateBookings};