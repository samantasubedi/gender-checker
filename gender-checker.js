const fetchdata = () => {
  fetch("https://api.genderize.io?name=pert")
    .then((response) => {
      if (!response.ok) {
        throw new error("cannot fetch data");
      } else {
        return response.json();
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
