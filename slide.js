console.log("Its working babe");
const images = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
    'images/image-6.jpg',
    'images/image-7.jpg',
    'images/image-8.jpg',
    'images/image-9.jpg',
    'images/image-10.jpg',
];

const img = document.getElementById('image-link');
let imageIndex = 0;
setInterval(()=>{
   
    if(imageIndex === images.length){
     imageIndex = 0;
    }
    const imageLength = images[imageIndex];
    console.log(imageLength);
    img.setAttribute('src',imageLength);
    imageIndex++;
   
},2000);