let form = document.querySelector('form')
let inputname = document.querySelector('#username')
let inputpassword = document.querySelector('#password')

form.addEventListener("submit" , (event)=>{
    event.preventDefault()

    if(inputname.value.length > 4 && inputpassword.value.length > 8){

        let apiurl = `http://localhost:3000/users?name=${inputname.value}&password=${inputpassword.value}`;
        fetch(apiurl)
        .then(res => res.json())
        .then(data => {console.log(data)
            
            if(data){
                alert("u can go in your panel")
            }else{
                alert("u must be singup")
            }
        
        })
        
    }else{
        alert("inputs values are invalid")
    }

    
})

