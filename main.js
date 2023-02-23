window.onload = function () {
  fetchUser();
};

const fetchUser = () => {
  fetch("https://randomuser.me/api/?results=12")
    .then((res) => res.json())
    .then((data) => {
      displayUsers(data.results);
    });
};

const consoleUser = () => {
  console.log(arrayOfUsers);
};

const displayUsers = (arrayOfUsers) => {
  const allUsers = document.getElementById("displayUserList");
  arrayOfUsers.map((post, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = post.picture.large;
    const text = document.createTextNode(
      `#${index},  Gender: ${post.gender}: \n Name: ${post.name.first} ${post.name.last}, \n DOB: ${post.dob.date}, \n Address: ${post.location.street.number} \n ${post.location.street.name}, \n ${post.location.city}`
    );
    li.appendChild(text);
    li.appendChild(img);
    allUsers.appendChild(li);
  });
};
