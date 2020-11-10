window.onload = async () => {
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  let users_parsed = await users.json();

  //   let card = document.querySelector(".card");
  let row = document.querySelector(".row");
  let inner;

  for (let i = 0; i < users_parsed.length; i++) {
    inner = `<div class="col col-6">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            Featured
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${users_parsed[i].name}</li>
            <li class="list-group-item">${users_parsed[i].username} in</li>
            <li class="list-group-item">${users_parsed[i].email}</li>
        </ul>
    </div>
</div>`;

    row.innerHTML += inner;
  }

  console.log(users_parsed);
};
