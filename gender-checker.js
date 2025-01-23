const fetchdata = () => {
  const name = document.getElementById("name").value;

  fetch(`https://api.genderize.io?name=${name}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("cannot fetch data");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      // const { gender, probability, count } = data;//this extracts the data from the object ie data of gender,probability and count and stores that data creating the variable of same name.
      // console.log(gender, probability, count);
      // we can also store the data creating our own variables manually as below
      const gender = data.gender;
      const probability = data.probability;
      const count = data.count;
      console.log(gender, probability, count);
      document.getElementById("gen").textContent = gender;
      document.getElementById("prob").textContent = probability;
      document.getElementById("num").textContent = count;
    })
    .catch((error) => console.error(error));
};
