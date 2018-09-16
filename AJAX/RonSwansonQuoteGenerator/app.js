// Select DOM elements
const quote = document.querySelector('#quote');
const xhrBtn = document.querySelector('#xhr');
const fetchBtn = document.querySelector('#fetch');
const jqueryBtn = document.querySelector('#jquery');
const axiosBtn = document.querySelector('#axios');

console.log(quote);
console.log($("#quote"));

// API url
const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


// Event listeners
xhrBtn.addEventListener('click', handleXhr);
fetchBtn.addEventListener('click', handleFetch);
jqueryBtn.addEventListener('click', handleJquery);
axiosBtn.addEventListener('click', handleAxios);

function handleXhr() {
    let data;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText);
            handleData(data);
        }
    }
    xhr.open('GET', url);
    xhr.send();
}

function handleFetch() {
    fetch(url)
    .then(function(res) {
        if(!res.ok) {
            throw Error(res.status);
        }
        return res;
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleData(data);
    })
    .catch(function(err) {
        console.log(err);
    })
}

function handleJquery() {
    $.getJSON(url)
        .done(handleData)
        .fail(function(err) {
            console.log(err);
        })
}

function handleAxios() {
    axios.get(url)
        .then(function(res) {
            handleData(res.data);
        })
        .catch(function(err) {
            console.log(err);
        })
}

// Update quote
function handleData(quoteStr) {
    console.log(quoteStr);
    quote.innerText = quoteStr;
}