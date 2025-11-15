function getData() {
  return new Promise((resolve, reject) => {
    const url = "https://jsonplaceholder.typicode.com/todos/2"; //API Endpoint

    //Make API call using fetch()
    fetch(url)
      .then((response) => {
        //this block will execute in case of success
        let data = response.json();
        resolve(data); // getData().then() will execute
      })
      .catch((error) => {
        //this block will execute in case of error
        reject("Fetch Error:", error); // getData().catch() will execute
      });
  });
}

getData()
  .then((result) => {
    console.log("Title:", result.title);
    console.log("Completed:", result.completed);

    let html = document.getElementById("tbody");
    html = "<tr>";
    html +=
      "<td>" +
      result.id +
      "</td> <td>" +
      result.title +
      "</td> <td>" +
      result.completed +
      "</td>";
    html += "</tr>";
    document.getElementById("tbody").innerHTML = html
  })
  .catch((error) => {
    console.log("Error:", error);
  });
