/* console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 0);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
 */
//INTERVAL
/* setInterval(() => {
  console.log('Hola mundo');
}, 3000); */

//
/* setTimeout(() => {
  console.log('Se ejecutará una sola vez después de 5 segundos');
}, 5000) */

//Promesas
const myPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve({
          data: 'Todo salió bien',
          data2: 'Mensaje correcto'
        })
      }, 2000)
    } else {
      reject('Sucedió un error');
    }
  });
}

/* myPromise()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('Al final de la operación')) */

const API_URL = 'https://rickandmortyapi.com/api/character';
const ulList = document.querySelector('#main-content');
const spinner = document.querySelector('#main-content p');

function showListCharacterNames(arr) {
  arr.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element.name;
    ulList.appendChild(li);
  });
}

const getRickAndMorty = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.results.length > 0) {
        return fetch(`${API_URL}/${data.results[0].id}`)
      }
    })
    .then(response2 => response2.json())
    .then(data2 => {
      console.log(data2);
      return fetch(data2.location.url)
    })
    .then(response3 => response3.json())
    .then(data3 => console.log(data3))
    .catch(err => console.log(err))
    .finally(() => spinner.style.display = 'none')
}

/* const getCharacter = (id = 1) => {
  fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .then(data => console.log('GET CHARACTER ===>', data));
} */

getRickAndMorty();
//getCharacter();
