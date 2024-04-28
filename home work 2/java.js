const userData = document.getElementById("userData");

function getData() {
    let userId = document.getElementById("userId").value;
    if (userId >= 1 && userId <= 10) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            userData.innerHTML = `
                <p>Name: <b> ${data.name} </b></p>
                <p>Username: <b> ${data.username} </b></p>
                <p>Phone: <b> ${data.phone} </b></p>
            `;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert("Прошу ввести число от 1 до 10");
    }   
}

document.getElementById("userId").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getData();
    }
});

function clearInput() {
    document.getElementById("userId").value = "";
    userData.innerHTML = "";
}


