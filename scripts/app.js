document.addEventListener('DOMContentLoaded', function(){
  let url = "http://localhost:3000/dogs"
  let button = document.querySelector("#axios")

  button.addEventListener("click", function() {
    axios.get(url)
      .then(function(res) {
        let name = res.data[0].name
        console.log(name)
        document.querySelector("li").innerHTML = name
      })
      .catch(function() {
        alert("ERROR!")
      })
  })

})
