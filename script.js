const regform = document.getElementById("regform")
const first_name = document.getElementById('first-name')
const last_name = document.getElementById('last-name')
const username = document.getElementById('username')

regform.addEventListener("submit", (event) => {
    event.preventDefault()

    if(first_name.value === ''){
        alert("first name is required")
    }

    if(last_name.value.trim() === ''){
        alert("Last name is required")
    }
})