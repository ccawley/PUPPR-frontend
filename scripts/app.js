axios.get("http://localhost:3000/dogs")
  .then(function(result) {
    renderDogs(result.data)
  })
  .catch(function() {
    alert("ERROR!")
  })

function getDog(id) {
  return axios.get("http://localhost:3000/dogs/" + id)
}

let dogCards = document.querySelector('#dog-cards')
let dogDetails = document.querySelector('#dog-details')

dogCards.addEventListener('click', renderDogDetail)

function renderDogDetail(e) {
  dogCards.style.display = 'none'
  let id = e.target.getAttribute('data-id')
  getDog(id)
  .then(function(result) {
    console.log(result.data)
    let details = document.createElement('div')
    details.innerHTML = result.data.name
    let dogDetails = document.querySelector("#dog-details")
    dogDetails.appendChild(details)
  })
  .catch(function() {
    alert("ERROR!")
  })
}

function renderDogs(data) {
  console.log(data)
  for(let i = 0; i < data.length; i++) {
    let dogCard = document.createElement("div")
    dogCard.style.background = `url(${data[i].picture_url})`
    dogCard.setAttribute('data-id', `${data[i].id}`)
    $(dogCard).addClass("dogCard")
    dogCard.innerHTML = `<div>${data[i].name}</div>`
    let dogCards = document.querySelector("#dog-cards")
    dogCards.appendChild(dogCard)
  }

}
