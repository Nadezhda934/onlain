function changePrice(change = 0){
    let price_html = document.querySelector('.item #second p')
    let price = price_html.innerHTML.replace('$','')
    price = parseFloat(price)

    let new_price = price - change

    if(new_price > price){
        price_html.setAttribute('style','color:red;')
    }
    else if(new_price < price){
        price_html.setAttribute('style','color:green;')
    }
    else{
        price_html.setAttribute('style','color:blue;')
    }

    price_html.innerHTML = '$' + new_price
    console.log(new_price)
    
    return new_price
}

changePrice(-10)

function deleteProduct(){
    let product = document.querySelector('.item')
    product.innerHTML = ''
}
