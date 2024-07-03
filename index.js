let numlimitInput = document.querySelector(".numlimit");
let agelimitInput = document.querySelector(".agelimit");
let getUsers = document.querySelector("button");
let body = document.querySelector("body");

getUsers.addEventListener("click", (event) => {
    event.preventDefault();

    let numlimit = Number(numlimitInput.value);
    let agelimit = Number(agelimitInput.value);

    fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
        let users = data.users;
        let filterUsers = users.filter((user) => user.age >= agelimit);

        for (let i = 0; i < numlimit; i++) {
            let fuser = filterUsers[i];
            
            let box = document.createElement("div");
            let name = document.createElement("h2");
            let email = document.createElement("li");
            let address = document.createElement("li");
            let list = document.createElement("ul");

            box.classList.add("box");

            name.textContent = `${fuser.firstName} ${fuser.lastName}`;
            email.textContent = fuser.email;
            address.textContent = fuser.address.country;

            list.appendChild(email);
            list.appendChild(address);

            box.appendChild(name);
            box.appendChild(list);

            body.appendChild(box);

            numlimitInput.value = "";
            agelimitInput.value = "";
        }
    })
});
