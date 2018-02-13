document.addEventListener('DOMContentLoaded', function(){
  // let button = document.querySelector("button")
  axios.get("http://localhost:3000/dogs")
    .then(function(result) {
      renderDogs(result.data)
    })
    .catch(function() {
      alert("ERROR!")
    })

  function renderDogs(data) {
    console.log(data)
    for(let i = 0; i < data.length; i++) {
      let dogCard = document.createElement("div")
      dogCard.style.background = `url(${data[i].picture_url})`
      $(dogCard).addClass("dogCard")
      dogCard.innerHTML = `<div>${data[i].name}</div>`
      let dogCards = document.querySelector("#dog-cards")
      dogCards.appendChild(dogCard)
    }
  }

})
