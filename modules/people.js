const name = require('./names');
const hobbies = require('./hobbies');

function newObj(){
  return obj = {
    fullname: name('Paolo','Bitta'),
    hobbies: hobbies('Football', 'Basket', 'Dama')
  }
}

console.log(newObj());
