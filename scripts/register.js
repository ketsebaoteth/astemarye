import { phonenumbervalidator } from "./phonenumbervalidator.js"
import { validatepassword } from "./passwordvalidator.js"

let submitbtn = document.querySelector(".createaccountbtn")

function senderror(error){
    let errorcontainer = document.querySelector(".errorstack")
    let newerror = document.createElement("div")
    newerror.classList.add("errors")
    let errortext = document.createElement("h1")
    errortext.textContent = error
    newerror.appendChild(errortext)
    errorcontainer.appendChild(newerror)

    newerror.addEventListener("click", function(e){
        errorcontainer.removeChild(newerror)    
    })
    setTimeout(() => {
        errorcontainer.removeChild(newerror)  
    }, 2000);
}



submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let user = document.querySelector(".usernamef").value;
    let pass = document.querySelector(".passwordf").value;
    let phonenumber = document.querySelector(".phonenumberf").value;

    if(phonenumbervalidator(phonenumber, senderror)){
        if(validatepassword(pass, senderror)){
            fetch("https://django-nine-woad.vercel.app/api/token",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    username: user,
                    password: pass,
                    phone: phonenumber
                })
            }).then(response => response.json()).then(data =>{
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    window.location("file:///c%3A/Users/admin/Music/Astemary/web/otp.html")


})