let ownerSignUp = document.querySelector("#sign-up-owner")
let petterSignUp = document.querySelector("#sign-up-petter")
let ownerSignIn = document.querySelector("#sign-in-owner")
let petterSignIn = document.querySelector("#sign-in-petter")

ownerSignUp.addEventListener("click", function() {
  window.location.replace("/create-owner.html")
})

petterSignUp.addEventListener("click", function() {
  window.location.replace("/create-petter.html")
})

ownerSignIn.addEventListener("click", function() {
  window.location.replace("/owner-sign-in.html")
})

petterSignIn.addEventListener("click", function() {
  window.location.replace("/petter-sign-in.html")
})
