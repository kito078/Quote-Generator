const btn = document.querySelector('#btn');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const put = document.querySelector('.put');
const btnGroup = document.querySelector('.btn-grp');
const loading = document.querySelector('.loading');



const list = [
    {
        book:'lost in the iland',
        img:"https://m.media-amazon.com/images/I/41oOL8PFaCL._SL500_.jpg",
        info:"Lorem ipsum dolor sit amet consectetur",
        img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGoB5qOqimClX92vaPabBATWn8MuQDRFS6cz0BzsdoywFIofeoiIuB6ki7Du55q-U5vk&usqp=CAU",
        author: "kito"
    },
    {
        book: "Rich dad poor dad",
        img:"https://addicted2success.com/wp-content/uploads/2020/04/Top-10-Productivity-Books-You-Must-Read-to-Prepare-Yourself-for-Success.png",
        info:" Instead of visually formatting your text, you enter your manuscript text intertwined",
        img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNH8Q5uD8ufjfmBSv1zfbISAYJoBOaLy3V75bTvE5mSGC-fMN8ZtqpbVXuWuSnvuY79FI&usqp=CAU",
        author: "Craig"
    },
    {
        book:"she is mad",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEKpxzVrrbI5pDPcypd1teFrM2k1qXPkx4A&usqp=CAU",
        info:" in contrast to standard word processors, your document",
        img2:"https://miro.medium.com/max/1000/0*5bjkLBf1VvAiMwhp",
        author: "Timz"
    }
];


btn.addEventListener('click', function(){
    newQuote();
    put.style.display = 'none';
    loading.style.display = 'block';

    setTimeout(newQuote, 2000);

})

function newQuote(){
    var randomNumber = Math.floor(Math.random()*list.length)
    
   let textQoute =`
    <h3>${list[randomNumber].book}</h3>
    <div class="book-1"><img src=${list[randomNumber].img} alt=""></div>
    <p id="info">${list[randomNumber].info}.</p>
    <div class="avatar d-flex">
        <img src=${list[randomNumber].img2} alt="">
        <h5 id="author" class="p-2">${list[randomNumber].author}</h5>
   </div>
   `;
   put.innerHTML= textQoute;

   put.style.display = 'block';
   loading.style.display = 'none';

 
    if(list[randomNumber].author==='kito'){
        console.log('he is the best')
        const upper =document.createElement('div');
        upper.className = 'header';
        upper.append(document.createTextNode('He is the best author and he has been writting books for 10years'))
        put.appendChild(upper);
    }else{
        return;
    }

setTimeout(bookQuote, 2000);
}

function bookQuote(){
    put.style.display = 'none';
}

