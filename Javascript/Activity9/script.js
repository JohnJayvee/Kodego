// Fetch unknown data
fetch("https://reqres.in/api/unknown")
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return { message: "Data not found" };
        }
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(err));


// Function to create a new user
function createUser(name, job) {
    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, job })
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return { message: "Failed to create user" };
            }
        })
        .then((json) => console.log(json))
        .catch((err) => console.log('Error:', err));
}

createUser("Jayvee Siuagan", "Software Developer");



// Function to update a user
function updateUser(userId, name, job) {
    fetch(`https://reqres.in/api/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, job })
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return { message: "Failed to update user" };
            }
        })
        .then((json) => console.log(json))
        .catch((err) => console.log('Error:', err));
}

updateUser(2, "Jayvee Siuagan", "Product Manager");
