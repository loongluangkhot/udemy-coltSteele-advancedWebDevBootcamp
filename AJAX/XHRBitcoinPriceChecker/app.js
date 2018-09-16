const price = document.querySelector("#price");
const refresh = document.querySelector("#refresh");
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
// const url = 'https://api.coindesk.com/v1/bpi/currentp.json';

// Using XHR
/*function updatePrice() {
    let currency = document.querySelector("input[name=currency]:checked").value;
    console.log(currency);
    
    let XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200) {
            let data = JSON.parse(XHR.responseText);
            console.log(data["bpi"]);
            price.innerHTML = `${data["bpi"][currency]['rate']} ${currency}`;
        }
    }
    XHR.open("GET", url);
    XHR.send();
}*/


// Using fetch API
function updatePrice() {
    let currency = document.querySelector("input[name=currency]:checked").value;
    console.log(currency);
    
    fetch(url)
    // then clause below is used to catch any req err
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
        console.log(data["bpi"]);
        price.innerHTML = `${data["bpi"][currency]['rate']} ${currency}`;
    })
    // By default catch will only handle errors related to connection failures, and not req err
    .catch(function(err) {
        console.log(err);
    });
}

updatePrice();

refresh.addEventListener('click', function() {
    updatePrice();
})