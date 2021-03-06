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

  let name = document.querySelector("option:nth-of-type(1)").value;
  let username = document.querySelector("option:nth-of-type(2)").value;
  let email = document.querySelector("option:nth-of-type(3)").value;
  let filter = document.getElementById("filter").value;
  let searchInput = document.querySelector("input:nth-of-type(1)").value;
  let submitBtn = document.getElementById("submit");

  const filterByUserName = () => {
    let filtered = users_parsed.filter((found) =>
      found.username.includes(searchInput)
    );
    console.log(filtered);
    row.innerHTML = "";
    let cardFilered = `<div class="col col-6">
      <div class="card" style="width: 18rem;">
          <div class="card-header">
              Featured
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${filtered[0].name}</li>
              <li class="list-group-item">${filtered[0].username} in</li>
              <li class="list-group-item">${filtered[0].email}</li>
          </ul>
      </div>
      </div>`;
    row.innerHTML = row.innerHTML + cardFilered;
    filtered = [];
  };

  const filterByEmail = () => {
    let filtered = users_parsed.filter((found) =>
      found.email.includes(searchInput)
    );
    console.log(filtered);
    row.innerHTML = "";
    let cardFilered = `<div class="col col-6">
      <div class="card" style="width: 18rem;">
          <div class="card-header">
              Featured
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${filtered[0].name}</li>
              <li class="list-group-item">${filtered[0].username} in</li>
              <li class="list-group-item">${filtered[0].email}</li>
          </ul>
      </div>
      </div>`;
    row.innerHTML = row.innerHTML + cardFilered;
    filtered = [];
  };

  const filterByName = () => {
    let filtered = users_parsed.filter((found) =>
      found.name.includes(searchInput)
    );
    console.log(filtered);
    row.innerHTML = "";
    let cardFilered = `<div class="col col-6">
      <div class="card" style="width: 18rem;">
          <div class="card-header">
              Featured
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${filtered[0].name}</li>
              <li class="list-group-item">${filtered[0].username}</li>
              <li class="list-group-item">${filtered[0].email}</li>
          </ul>
      </div>
      </div>`;
    row.innerHTML = row.innerHTML + cardFilered;
    filtered = [];
  };

  if (filter === name) {
    submitBtn.addEventListener("click", filterByName);
  } else if (filter === username) {
    submitBtn.addEventListener("click", filterByUserName);
  } else if (filter === email) {
    submitBtn.addEventListener("click", filterByEmail);
  }
  console.log(users_parsed);

  const extractName = () => {
    let name = users_parsed.map((n) => n.name);
    return name;
  };

  console.log(extractName());

  const createAddress = () => {
    // const { city, street, suite, zip_code } = users_parsed[0].address;

    users_parsed.forEach((user) => {
      const { city, street, suite, zipcode } = user.address;
      let personal_address = city + " " + street + " " + suite + " " + zipcode;
      console.log(personal_address);
    });
  };
  createAddress();

  let sort = document.getElementById('sort')

  const sortByName = ()=>{
    
    //ALPHABETICALLY ORDER A TO Z
    let aToZ = users_parsed.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })

    //ALPHABETICALLY ORDER Z TO A
    let zToA = users_parsed.sort(function(a, b){
      if(a.name > b.name) { return -1; }
      if(a.name < b.name) { return 1; }
      return 0;
    })

    const createaToZ = ()=>{
      for (let i = 0; i < aToZ.length; i++) {
        inner = `<div class="col col-6">
          <div class="card" style="width: 18rem;">
              <div class="card-header">
                  Featured
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${aToZ[i].name}</li>
                  <li class="list-group-item">${aToZ[i].username} in</li>
                  <li class="list-group-item">${aToZ[i].email}</li>
              </ul>
          </div>
      </div>`;
  
        row.innerHTML += inner;
      }
    }
    
    const createZtoA = ()=>{
      for (let i = 0; i < zToA.length; i++) {
        inner = `<div class="col col-6">
          <div class="card" style="width: 18rem;">
              <div class="card-header">
                  Featured
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${zToA[i].name}</li>
                  <li class="list-group-item">${zToA[i].username} in</li>
                  <li class="list-group-item">${zToA[i].email}</li>
              </ul>
          </div>
      </div>`;
  
        row.innerHTML += inner;
      }
    }

    
    row.innerHTML = ''

    if(users_parsed!==aToZ){
      createaToZ()
    }
    else if(users_parsed=aToZ){
      createZtoA()
    }
  }
  sort.addEventListener('click', sortByName)
};
