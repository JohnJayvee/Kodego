fetch("https://reqres.in/api/user/2")
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return JSON.stringify({ message: "User not found" });
        }
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(err));

fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
    }),
})
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return JSON.stringify({ message: "Login Failed" });
        }
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(err));