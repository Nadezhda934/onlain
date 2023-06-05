let links = []

let title = 'Тестовый заголовок'

fetch('https://run.mocky.io/v3/7c14ed0c-e2bb-4b27-8439-ad438162ee45')
.then(response => {
    return response.json()
}).then(data =>{
    links.push(...data)
    let linksContainer = document.querySelector('header .nav-links')
    links.forEach(item =>{
        let link = `<a href="#" onclick="navigation('main-page')">${item.title}</a>`
        linksContainer.innerHTML += link
    })
})