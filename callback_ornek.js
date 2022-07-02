console.log("basladi")

const dizi=ogrencileriGetir(ogrencileriYazdir); //callback olarak ogrencileriYazdır verildi

console.log("bitti");

function ogrencileriGetir(callback){
    setTimeout(function() {
        const dizi=[];
        for (let i=0;i<30;i++){
            dizi.push({ad:"ogrenci" + (i+1),id:i+1})
        }
        callback(dizi);   // referans olarak geçilen fonksiyon tetikleniyor
    }, 3000);
}
function ogrencileriYazdir(ogrencilerDizisi){
    console.log(ogrencilerDizisi)
}