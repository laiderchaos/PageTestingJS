// Closures

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`;
    };
}

const comUrl = urlGenerator('com');
//console.log(comUrl('google'));

//====================================================================

// Adding createElement class to the DOM tree.
//one.classList.add('two','three');
// Remove createElement class to the DOM tree.
//one.classList.remove('two');

// Click event.
//but.onclick = function (){
//    this.classList.toggle('two')
//};

// Attributes data
//but.getAttribute('data');
//document.querySelectorAll('link')[0].getAttribute('href');
// Gas calculator test.
let gas = document.querySelectorAll('.gas');
let gasAmount = document.querySelector('.amount_of_gas')
for (let i = 0; i < gas.length; i++ ){
    gas[i].onclick = function () {
        let gallons = document.querySelector('.liters').value;
        let amount = this.getAttribute('data-scale');
        gasAmount.value = gallons * amount;
    }
}
let createElement = document.createElement('div');
createElement.innerHTML = 'Hello';
// Add a child.
// let testDiv = document.querySelector('.test').appendChild(createElement)
// console.log(createElement)
// If you click on the text, the text will be entered into the hello log.
// testDiv.onclick = function () {
//     console.log("hello")
// }

// Getter & Setter
let object_test = {
    allUsername: [],
    _name: 'vlad',

    showHistory(){
        console.log(this.allUsername)
    },

    get username(){
        return this._name
    },

    set username(name){
        if (name.length >= 2){
            this._name = name;
            this.allUsername.push(name);
        }else{
            //console.log('Name is too short')
        }
    }
};

let object = Object.create(object_test)
object.username = 'g';// Name is too short
object.username = "garry";
object.showHistory()

// Local storage - page linking, shopping basket

const arr1 = [32,42,55];
localStorage.setItem('arr1', JSON.stringify(arr1)); // Set a local array
let arr1Get = localStorage.getItem('arr1') // Getting a local array
console.log(arr1Get)

const arr2 = {
    hello: 5,
    world: 1
};
localStorage.setItem('arr2', JSON.stringify(arr2)); // Set a local object
let arr2Get = localStorage.getItem('arr2') // Getting a local object
console.log(arr2Get)

// Clear local storage
function populateStorage() {
    localStorage.setItem('bgcolor', 'red');
    localStorage.setItem('font', 'Helvetica');
    localStorage.setItem('image', 'miGato.png');

    localStorage.clear();
};
