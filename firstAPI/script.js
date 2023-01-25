// fetch("https://swapi.dev/api/planets/2/")
//     .then((res) => {
//         console.log('Resolved', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     })


//const axios = require('axios').default;

// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log(res);
//     })
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });


const getStarWarsPerson = async (id) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data.name)
    return res;
};

const button = document.querySelector('button');
const listing = document.querySelector('ul')

button.addEventListener('click', () => {
    const person = document.createElement('p')
    let rand = Math.floor(Math.random() * 80) + 1;
    let newperson = getStarWarsPerson(rand)
    person.append(newperson);
    listing.append(person)
    console.log(rand, newperson)
})

getStarWarsPerson(11);