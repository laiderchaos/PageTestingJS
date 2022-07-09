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
for (let i = 0; i < gas.length; i++ ){
    gas[i].onclick = function () {
        let gallons = document.querySelector('.liters').value;
        let amount = this.getAttribute('data-scale');
        console.log(gallons*amount);
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

