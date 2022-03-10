/*
Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
Kolay gelsin.
 */

let posts = [
    { title: 'Blog 1', body: 'lorem ipsum 1', author: 'emreylmaz'},
    { title: 'Blog 2', body: 'lorem ipsum 2', author: 'emreylmaz'},
    { title: 'Blog 3', body: 'lorem ipsum 3', author: 'ylmazemre'},
    { title: 'Blog 4', body: 'lorem ipsum 4', author: 'ylmazemre'},
    { title: 'Blog 5', body: 'lorem ipsum 5', author: 'emre'}
]

let newPost = {
    title: 'LOREM IPSUM 6',
    body: 'LOREM IPSUM 6',
    author: 'Emre'
}

const listPost = (data) => {
    return new Promise((resolve, reject) => {
        console.log('Postlar listeleniyor.');
        if (data) {
            console.log('Başarılı.');
            resolve(posts);
        } else {
            reject('Postlar başarılı şekilde listelenemedi!');
        }
    });
};

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log('Post ekleniyor.');
        if (newPost) {
            posts.push(newPost);
            resolve('Ekleme başarılı oldu!');
        } else {
            reject('Ekleme başarısız oldu!');
        }
    });
};

const processPost = async () => {
    try {
        let listedPosts = await listPost(true);
        console.log(listedPosts);

        let isAdded = await addPost(newPost);
        console.log(isAdded);

        listedPosts = await listPost(true);
        console.log(listedPosts);

    } catch (err) {
        console.log(err);
    }
}

processPost();