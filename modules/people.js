const name = require('./names');
const hobbies = require('./hobbies');

function newObj(){
   obj = {
    fullname: name('Paolo','Bitta'),
    hobbies: hobbies('Football', 'Basket', 'Dama')
    }
  return obj
}

console.log(newObj());
