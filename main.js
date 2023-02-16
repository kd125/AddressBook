let arrayOfUsers = [];

window.onload = function () {
  displayUsers();
};

const fetchUser = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((posts) => (arrayOfUsers = posts));
};

const consoleUser = () => {
  console.log(arrayOfUsers);
};

const displayUsers = () => {
  const allUsers = document.getElementById("displayUserList");
  arrayOfUsers.map((post, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `#${index}, gender: ${post.gender}: ${post.name} `
    );
    li.appendChild(text);
    allUsers.appendChild(li);
  });
};
