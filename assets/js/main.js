let cards = [
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 45
    },
    {
        img: "./assets/img/man.jpg",
        title: "Pullover winter collection",
        price: 60
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer collection",
        price: 80
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 45
    },
    {
        img: "./assets/img/man.jpg",
        title: "Pullover winter collection",
        price: 60
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer collection",
        price: 80
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 45
    },
    {
        img: "./assets/img/man.jpg",
        title: "Pullover winter collection",
        price: 60
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer collection",
        price: 80
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 45
    },
    {
        img: "./assets/img/man.jpg",
        title: "Pullover winter collection",
        price: 60
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer collection",
        price: 80
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 45
    },
    {
        img: "./assets/img/man.jpg",
        title: "Pullover winter collection",
        price: 60
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer collection",
        price: 80
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 42
    },
    {
        img: "./assets/img/man.jpg",
        title: "Pullover winter collection",
        price: 60
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer collection",
        price: 80
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 45
    },
    {
        img: "./assets/img/man.jpg",
        title: "Pullover winter collection",
        price: 60
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer collection",
        price: 80
    },
    {
        img: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 45
    },
    {
        img: "./assets/img/man.jpg",
        title: "Pullover winter collection",
        price: 60
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer collection",
        price: 80
    }
]

const setCards = (array) => {
    let container_for_cards = document.querySelector('.cards .container')
    container_for_cards.style.flexWrap = 'wrap';
    container_for_cards.innerHTML = ''
    array.forEach(card =>{
        let htmlCard = `
        <div class="card">
            <div class="cover">
                <img src=${card.img} alt="">
                <div class="circle"></div>
            </div>
            <div class="card-content">
                <h4>${card.title}</h4>
                <p class="price">${card.price}$</p>
            </div>
        </div>
        `
        container_for_cards.innerHTML += htmlCard
    })
}

const sortCards = (typeSort) =>{
    let cards_array = []
    cards_array.push(...cards)
    switch(typeSort){
        case 'DOWN':
            cards_array.sort((a,b) =>{
                return b.price - a.price
            })
            break
        case 'UP':
            cards_array.sort((a,b) =>{
                return a.price - b.price
            })
            break
        default:
            break
    }
    setCards(cards_array)
}


const navigation = (page_name) =>{
    const pages = document.querySelectorAll('.fullpage')

    pages.forEach(page =>{
        page.classList.remove('open')

        page.classList.forEach(class_name =>{
            if(class_name === page_name){
                page.classList.add('open')
            }
        })
    })
}

const changeCount = (action, element) =>{
    let count_html = element.parentNode.querySelector('.count')
    let count = parseInt(count_html.innerHTML)
    let item = element.closest('.item')
    if(action === 'minus'){
        if(count > 1){
            count -= 1
        }
        else{
            if(item){
                item.remove()
            }
        }
    }
    else{
        count += 1
    }
    count_html.innerHTML = count
    if(item){
        let total_html = item.querySelector('#forth p')
        let price = parseInt(item.querySelector('#second p').innerHTML.replace('$',''))
        total_html.innerHTML ='$' + (price * count)
    }
}

const changeCheckbox = (e) =>{
    e.parentNode.querySelector('.checkbox').classList.toggle('checked')
}

const setCheckbox =() =>{
    const checkbox_array = document.querySelectorAll('input[type=checkbox]')

    checkbox_array.forEach(item=>{
        if(item.checked){
            item.parentElement.querySelector('.checkbox').classList.add('checked')
        }
    })
}
const setSize = (e) =>{
    let size_html = e.target.parentElement
    let sizes = size_html.querySelectorAll('p')
    sizes.forEach(item =>{
        item.classList.remove('active')
    })
    e.target.classList.toggle('active')
}
const setColor = (e) =>{
    let color_html = e.target.closest('.color')
    let colors = color_html.querySelectorAll('.circle-container')
    colors.forEach(item =>{
        item.querySelector('.circle').classList.remove('active')
    })
    e.target.classList.toggle('active')
}

const modal = (open) =>{
    if(open){
        let modal = `
        <div class="modal" id="modalCat">
            <div class="modal-container">
            <div class="container">
                <h2>Категория</h2>
                <button onclick="modal(false)">X</button>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum reprehenderit, accusamus modi quisquam veritatis a unde quae nam deserunt ipsam iure maiores blanditiis excepturi doloremque autem. Asperiores velit neque voluptates.</p>
            <div class="container">
                <input type="button" value="Отменить" class="btn close" onclick="modal(false)">
                <input type="button" value="Сохранить" class="btn orange">
            </div>
            </div>
        </div>`
        document.body.innerHTML += modal
    }
    else{
        let modal = document.getElementById('modalCat')
        modal.remove()
    }
}

console.log(links)