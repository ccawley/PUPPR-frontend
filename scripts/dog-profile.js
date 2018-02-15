axios.get("http://localhost:3000/dogs/id")
  .then(function(result) {
    renderDog(result.data)
  })
  .catch(function() {
    alert("ERROR!")
  })

function renderDog(data) {
  console.log(data)
}
