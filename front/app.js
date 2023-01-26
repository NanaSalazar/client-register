 const button = document.querySelector('#ilogon')

 button.addEventListener('click', loginClient)

 function loginClient() {
    const email = document.querySelector("#iemail").value 

    console.log(email)
 }

module.exports = {button}