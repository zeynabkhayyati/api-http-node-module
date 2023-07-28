let form = document.querySelector('form')
let inputname = document.querySelector('#username')
let inputpassword = document.querySelector('#password')

form.addEventListener("submit" , (event)=>{
    event.preventDefault()

    let apiurl = `http://localhost:3000/users?name=${inputname.value}&password=${inputpassword.value}`;
    fetch(apiurl)
    .then(res => res.json())
    .then(data => console.log(data))
})