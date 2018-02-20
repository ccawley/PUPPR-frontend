// Retrieves all dogs info from the database & calls the render function below.
axios.get("http://localhost:3000/dogs")
  .then(function(result) {
    renderDogs(result.data)
  })
  .catch(function() {
    alert("ERROR!")
  })

let dogCards = document.querySelector('#dog-cards')
let dogDetails = document.querySelector('#dog-details')

// Renders the page with a "mini-profile" for each dog in the database.
function renderDogs(data) {
  for(let i = 0; i < data.length; i++) {
    let dogCard = document.createElement("div")
    dogCard.style.background = `url(${data[i].picture_url})`
    dogCard.setAttribute('data-id', `${data[i].id}`)
    $(dogCard).addClass("dogCard")
    if (data[i].pet_me) {
      dogCard.innerHTML = `<div>${data[i].name}</div>
                           <div><i class="fas fa-paw petter"></i></div>`
    } else {
      dogCard.innerHTML = `<div>${data[i].name}</div>
                           <div><i class="fas fa-paw avoider"></i></div>`
    }
    let dogCards = document.querySelector("#dog-cards")
    dogCards.appendChild(dogCard)
  }

}

// Retrieves a specific dogs info from the server database.
function getDog(id) {
  return axios.get("http://localhost:3000/dogs/" + id)
}

// When a "mini-profile" is clicked, the full profile for the dog is displayed.
dogCards.addEventListener('click', renderDogDetail)

// Renders the selected dog's profile to the page.
function renderDogDetail(e) {
  dogCards.style.display = 'none'
  let id = e.target.getAttribute('data-id')
  getDog(id)
  .then(function(result) {
    console.log(result.data)
    let details = document.createElement('div')
    //let photo = document.createElement('img')
    //details.style.background = `url(${result.data.picture_url})`
    if (result.data.pet_me) {
      details.innerHTML = `<div class="row">
                            <div class="col s12 m7">
                              <div class="card">
                                <div class="card-image">
                                  <img src=${result.data.picture_url}>
                                  <span class="card-title">${result.data.name}</span>
                                </div>
                                <div class="card-content">
                                  <h5>About Puppr:</h5> <p>${result.data.about_puppr}</p>
                                  <h5>Location:</h5>
                                  <p>${result.data.location}</p>
                                </div>
                                <div class="card-action">
                                  <a href=""/all-dogs-view.html"">Back</a>
                                </div>
                              </div>
                            </div>
                           </div>`
    } else {
      details.innerHTML = `<div class="row">
                            <div class="col s12 m7">
                              <div class="card">
                                <div class="card-image">
                                  <img src=${result.data.picture_url}>
                                  <span class="card-title">${result.data.name}</span>
                                </div>
                                <div class="card-content">
                                  <h5>About Puppr:</h5> <p>${result.data.about_puppr}</p>
                                </div>
                                <div class="card-action">
                                  <a href=""/all-dogs-view.html"">Back</a>
                                </div>
                              </div>
                            </div>
                           </div>`
    }
    let dogDetails = document.querySelector("#dog-details")
    dogDetails.appendChild(details)

    // if (sessionStorage.getItem("userId") == result.data.owner_id) {
    //   let deleteButton = document.createElement("a")
    //   deleteButton.className = "waves-effect waves-light btn amber accent-4"
    //   deleteButton.innerHTML = "delete"
    //   deleteButton.appendChild(details)
    // }
    
  })
  .catch(function() {
    alert("ERROR!")
  })
}
