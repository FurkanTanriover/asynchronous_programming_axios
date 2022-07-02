const getBtn=document.getElementById("get");
const postBtn=document.getElementById("post");
const putPatchBtn=document.getElementById("put");
const deleteBtn=document.getElementById("delete")


postBtn.addEventListener("click",getPost);
getBtn.addEventListener("click",getData);
putPatchBtn.addEventListener("click",putPatch);
deleteBtn.addEventListener("click",deleteData);


function getData(){
    axios({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
    })
    .then(response=>sonucuEkranaYazdir(response))
    .catch(hata=>console.log(hata))
    .then(()=>console.log("get isteği tamamlandı"))
}

function getPost(){
    axios.post("https://jsonplaceholder.typicode.com/users",{
            name:"Furkan",
            username:"Tanrıöver",
            email:"ff@gmail.com",
        }
    )
    .then(response=>sonucuEkranaYazdir(response))
    .catch(hata=>console.log(hata))
    .then(()=>console.log("post isteği tamamlandı"))
}

function putPatch(){
    // axios.put("https://jsonplaceholder.typicode.com/users/1",{
    //     name:"Furkan",
    //     username:"Tanrıöver",
    //     email:"ft@gmail.com",
    // })
    axios.patch("https://jsonplaceholder.typicode.com/users/1",{
        name:"Furkan",
        username:"Tanrıöver",
        email:"ft@gmail.com",
    })
    .then(response=>sonucuEkranaYazdir(response) )
    .catch(hata=>console.log(hata))
    .then(()=>console.log("put isteği tamamlandı"))
}

function deleteData(){
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(response=>sonucuEkranaYazdir(response))
    .catch(hata=>console.log(hata))
    .then(()=>console.log("delete isteği tamamlandı"))
}


function sonucuEkranaYazdir(response){
    document.querySelector(".sonuc").innerHTML=`
    <div class="notification is-info">
    <div class"column">
    <h1 class="title">${response.status}</h1>
    </div>
    </div>

    <div class="notification is-info">
    <div class"column">
    <h1 class="title">${JSON.stringify(response.headers)}</h1>
    </div>
    </div>

    <div class="notification is-info">
    <div class"column">
    <h1 class="title">${JSON.stringify(response.data)}</h1>
    </div>
    </div>
    `
}