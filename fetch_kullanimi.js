const btnApidenJSONGetir = document.getElementById("btn-apiden-json-getir");


btnApidenJSONGetir.addEventListener("click", getJSONfromAPI);

function getJSONfromAPI(e) {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((sonuc) => console.log(sonuc));
}


