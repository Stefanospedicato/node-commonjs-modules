const name = require('./names');
const hobbies = require('./hobbies');
const objHobbies = require('./hobbies');

function newObj(){
  const {hobbies} = objHobbies('Football', 'Basket', 'Dama')
  return {
    fullname: name('Paolo','Bitta'),
    hobbies
    }
}

console.log(newObj());
