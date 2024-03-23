import { validatepassword } from "./passwordvalidator.js"

document.querySelector(".createaccountbtn").addEventListener("click",function(){
    if(validatepassword(document.querySelector(".passwordf").value)){
        fetch("https://django-nine-woad.vercel.app/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                "phone": document.querySelector(".phonenumberf").value,
                "password": document.querySelector(".passwordf").value 
            })
        }).then(response => response.json()).then(data =>{
            console.log(data.refresh)
        }).catch(error => {
            console.log(error)
        })
    }
});
    

    