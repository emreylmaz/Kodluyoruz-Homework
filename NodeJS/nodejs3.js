/*
FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.


Kolay gelsin.
* */


const fs = require('fs')

const writeFile = (file, data) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, 'utf8', (err) => {
            if (err) reject(err)
            resolve("File written successfully : " + data)
        })
    })
}

const readFile = (file) => {

    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err,data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

const appendFile = (file, data) => {

    return new Promise((resolve, reject) => {
        fs.appendFile(file, '\n' + data, 'utf8', (err) => {
            if (err) reject(err)
            resolve("File update successfully : " + data)
        })
    })
}

const deleteFile = (file) => {

    return new Promise((resolve, reject) => {
        fs.unlink(file, (err) => {
            if (err) reject(err)
            resolve("File deleted successfully")
        })
    })
}



const asyncProcess = async () => {

    await writeFile("employees.json", '{ "name": "Employee 1 Name", "salary": 2000 }').
    then((result)=>{console.log(result)}).
    catch((err)=>{console.log(err)});

    await readFile("employees.json").
    then((result)=>{console.log(result)}).
    catch((err)=>{console.log(err)});

    await appendFile("employees.json", '{ "name": "Emre Yilmaz", "salary": 10000 }').
    then((result)=>{console.log(result)}).
    catch((err)=>{console.log(err)});

    await deleteFile("employees.json").
    then((result)=>{console.log(result)}).
    catch((err)=>{console.log(err)});
}

asyncProcess();