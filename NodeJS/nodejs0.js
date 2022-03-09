/*
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
Kolay gelsin.
*/

const areaCalculation = (r) => {
    const PI = Math.PI
    const result = PI * r**2;
    console.log(result)
}

areaCalculation(arguments[0]*1);