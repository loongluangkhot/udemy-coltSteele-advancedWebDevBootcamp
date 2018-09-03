// Select DOM elements
const img = document.querySelector('#avatar');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const btn = document.querySelector('#btn');

const APIurl = 'https://randomuser.me/api/';

// Add event listener to 'next user' btn
btn.addEventListener('click', updateUser);

// Logic
function updateUser() {
    fetch(APIurl)
    .then(handleBadRes)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        // Update DOM
        let userData = data.results[0]
        console.log(userData);
        img.src = userData.picture.medium;
        fullname.innerText = `${capitalizeStr(userData.name.first)} ${capitalizeStr(userData.name.last)}`;
        username.innerText = userData.login.username;
        email.innerText = userData.email;
        city.innerText = capitalizeStr(userData.location.city);
    })
    .catch(function(err) {
        console.log(err);
    })
}


function handleBadRes(res) {
    if(!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function capitalizeStr(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}