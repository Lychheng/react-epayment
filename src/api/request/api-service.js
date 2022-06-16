import axios from "axios";

export function getApi(data) {
    // console.log(data);
    fetch('http://localhost:3001', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        mode: "no-cors",
        credentials: "same-origin",
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}