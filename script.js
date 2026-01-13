const regform = document.getElementById("regform")
const first_name = document.getElementById('first-name')

regform.addEventListener("submit", (event) => {
    event.preventDefault()

    if(first_name.value === ''){
        alert("first name is required")
    }
})