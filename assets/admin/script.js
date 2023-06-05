// Ссылки

const getLinks =() =>{
    let container = document.querySelector('.links-container')
    container.innerHTML = ''

    links.forEach(item =>{
        let link = `<h4>${item}</h4>`
        container.innerHTML += link
    })
}
getLinks()

const addLink = (e) =>{
    let inputText = e.previousElementSibling.value
    if(inputText.trim()){
        links.push(inputText)
        getLinks()
    }
}

const getTitle = () =>{
    let titleText = document.querySelector('.title h4')
    titleText.innerText = title

    titleText.style.display = 'block'
    titleText.parentNode.querySelector('.edit').style.display = 'block'

    titleText.parentNode.querySelector('.save').style.display = 'none'
    titleText.parentNode.querySelector('input[type=text]').style.display = 'none'
}
getTitle()

const editTitle = (e) =>{
    e.style.display = 'none'
    e.parentNode.querySelector('h4').style.display = 'none'

    e.parentNode.querySelector('.save').style.display = 'block'
    e.parentNode.querySelector('input[type=text]').style.display = 'block'
}

const saveTitle = (e) =>{
    title = e.parent.querySelector('input[type=text]').value
    getTitle()
}