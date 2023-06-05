const users = [
    {
        id:1,
        email: 'test',
        phone: '777',
        password: 'qwerty'
    }
]

let phoneAuth = document.querySelector('#auth input[type=tel]')
let phoneReg = document.querySelector('#reg input[type=tel]')
const maskOptions = {
    mask: '+{7}(000)000-00-00'
}

let phoneAuthMask = IMask(phoneAuth,maskOptions)
let phoneRegMask = IMask(phoneReg,maskOptions)

const login = () =>{
    let email = document.querySelector('#auth input[type=email]').value
    let phone = phoneAuthMask.unmaskedValue
    let password = document.querySelector('#auth input[type=password]').value

    if(email === 'admin' && phone === '7' && password === 'admin'){
        window.location = './assets/admin/admin.html'
    }
    users.forEach(user =>{
        if(user.password === password && user.email === email 
            && user.phone === phone)
        {
            window.location = 'app.html'
        }
    })
}

const reg = () =>{
    let user_email = document.querySelector('#reg input[type=email]')
    let user_phone = phoneRegMask.unmaskedValue
    let user_password = document.querySelector('#reg input[type=password]')
    let user_phone_input = document.querySelector('#reg input[type=tel]')

    if(user_email.value.trim() === '' || 
        user_password.value.trim() === '' || 
        user_phone.trim() === ''){
            if(user_password.value === ''){
                user_password.style = 'border:1px solid red;'
                function deleteStyle(){
                    user_password.style = 'border:1px solid gray;'
                }
                user_password.addEventListener('keydown', deleteStyle)
            }
            if(user_phone_input.value === ''){
                user_phone_input.style = 'border:1px solid red;'
                function deleteStyle(){
                    user_phone_input.style = 'border:1px solid gray;'
                }
                user_phone_input.addEventListener('keydown', deleteStyle)
            }
            if(user_email.value === ''){
                user_email.style = 'border:1px solid red;'
                function deleteStyle(){
                    user_email.style = 'border:1px solid gray;'
                }
                user_email.addEventListener('keydown', deleteStyle)
            }
        alert('Все поля должны быть заполнены')
    }
    else{
        users.push({
            id: users[users.length - 1] + 1,
            email: user_email,
            phone: user_phone,
            password: user_password
        })

        document.getElementById('reg').classList.remove('open')
        document.getElementById('auth').classList.add('open')
    }
}

const navigate = (e) =>{
    document.getElementById('reg').classList.add('open')
    document.getElementById('auth').classList.add('open')

    e.parentNode.classList.remove('open')
}