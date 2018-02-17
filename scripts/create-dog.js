$(document).ready(function(){
  $('select').select()
})

let form = document.querySelector("#create-dog")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  let name = document.querySelector("#name").value
  let pet_me = document.querySelector("#pet_me").value
  let about_puppr = document.querySelector("#about_puppr").value
  let picture_url = document.querySelector("#picture_url").value
  let location = document.querySelector("#location").value
  let owner_id = document.querySelector("#owner_id").value

  let newPuppr = {
    name,
    pet_me,
    about_puppr,
    picture_url,
    location,
    owner_id
  }

  createDog(newPuppr)
    .then(res => {
      alert("NEW puppr created successfully!")
      window.location.replace("/all-dogs-view.html")
    })
    .catch(err => {
      console.log(err)
    })
})

function createDog(data) {
  return axios.post("http://localhost:3000/dogs", data)
}
