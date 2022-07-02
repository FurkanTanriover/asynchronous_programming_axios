//promise
function ogrencileriGetir(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dizi=[];

            for(let i=0;i<30;i++){
                dizi.push({ad:"ogrenci"+(i+1),id:i+1})
            }

            resolve(dizi);
            reject("Hata çıktı")
        },2000)
    })
}

function ogrencileriYazdir(dizi){
    console.log(dizi);
}

ogrencileriGetir()
.then(ogrenciDizisi=>ogrencileriYazdir(ogrenciDizisi))
.catch(hataMesaji=>console.log(hataMesaji));


//promise all
const p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("3 saniye")
    },3000);
});

const p2= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("5 saniye")
    }, 5000);
});
Promise.all([p1,p2])
.then(sonuc=>console.log(sonuc));


//promise async- await
function getUser(id){
    console.log(`${id} id'li kullanıcı getiriliyor`);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({ad: "Furkan", id:id})
        }, 2000);
    })
}

function getCourses(userName){
    console.log(`${userName} adlı kullanıcının kursları getiriliyor`)
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(["java", "flutter", "js"])
        }, 3000);
    })
}

async function kurslariGoster(){
    try {
        const userObj=await getUser(1);
        const kurslarDizisi=await getCourses(userObj.ad)
        console.log(kurslarDizisi);
    } catch (error) {
        console.log("hata",error);
    }
}

kurslariGoster();