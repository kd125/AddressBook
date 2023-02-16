window.onload = function () {
  fetchUser();
};

const fetchUser = () => {
  fetch("https://randomuser.me/api/?results=10")
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
      `#${index}, ${post.picture.large} Gender: ${post.gender}: Name: ${post.name.first} ${post.name.last}, DOB: ${post.dob.date}, Address: ${post.location.street.number} ${post.location.street.name}, ${post.location.city}`
    );
    li.appendChild(text);
    li.appendChild(img);
    allUsers.appendChild(li);
  });
};
