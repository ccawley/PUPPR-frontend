let form = document.querySelector("#create-petter")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  let name = document.querySelector("#petter-name").value
  let user_name = document.querySelector("#petter-user_name").value
  let password = document.querySelector("#petter-password").value

  let newPetter = {
    name,
    user_name,
    password
  }

  createPetter(newPetter)
    .then(res => {
      alert("Petter profile successfully created!")
      sessionStorage.setItem('userId', res.data.id)
      window.location.replace("/all-dogs-view.html")
    })
    .catch(err => {
      console.log(err)
    })
})

function createPetter(data) {
  return axios.post("http://localhost:3000/petters", data)
}
