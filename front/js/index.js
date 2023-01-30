const button = document.querySelector('#buttonLogin')

 button.addEventListener('click', loginClient)

 function loginClient() {
    const email = document.querySelector("#iemail").value 

    try {
      if(typeof email === "number") {
         alert('Email inválido')
      }

      const password = document.querySelector('#ipassword').value
    } catch(e) {
      
    }
 }

export default email