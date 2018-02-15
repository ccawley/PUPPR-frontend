let form = document.querySelector("#create-owner")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  let name = document.querySelector("#name").value
  let user_name = document.querySelector("#user_name").value
  let password = document.querySelector("#password").value

  let newOwner = {
    name,
    user_name,
    password
  }

  createOwner(newOwner)
    .then(res => {
      alert("Owner profile successfully created!")
      sessionStorage.setItem('userId', res.data.id)
      window.location.replace("/create-dog.html")
    })
    .catch(err => {
      console.log(err)
    })
})

function createOwner(data) {
  return axios.post("http://localhost:3000/owners", data)
}
