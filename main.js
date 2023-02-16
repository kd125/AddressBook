let userList = [];

const fetchUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((user) => (userList = user));
};
