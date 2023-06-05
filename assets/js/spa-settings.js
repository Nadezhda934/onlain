const information = [
    {
        url: './assets/pages/components/header.html',
        include: '.wrapper'
    },
    {
        url: './assets/pages/components/main.html',
        include: '.include-main'
    },
    {
        url: './assets/pages/components/category.html',
        include: '.include-category'
    },
    {
        url: './assets/pages/components/cards.html',
        include: '.include-cards'
    },

    {
        url: './assets/pages/basket.html',
        include: '.basket-include'
    },
    {
        url: './assets/pages/order.html',
        include: '.order-include'
    },
    {
        url: './assets/pages/product.html',
        include: '.product-include'
    }
]

information.forEach(item =>{
    fetch(item.url)
        .then(response =>{
            return response.text()
        })
        .then(data => {
            document.querySelector(item.include).innerHTML = data
            if(item.include === '.include-cards'){
                setCards(cards)
            }
            if(item.include === '.order-include'){
                setCheckbox()
            }
        })
})



