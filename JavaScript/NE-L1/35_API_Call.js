function getData() {
  return new Promise((resolve, reject) => {
    const url = "https://jsonplaceholder.typicode.com/todos"; //API Endpoint

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
  .then((serverResult) => {
    //console.log("Title:", serverResult.title);
    //console.log("Completed:", serverResult.completed);

    let html='';
    for (let result of serverResult) {
      html += "<tr>";
      html +=
        "<td>" +
        result.id +
        "</td> <td>" +
        result.title +
        "</td> <td>" +
        result.completed +
        "</td>";
      html += "</tr>";
    }
    document.getElementById("tbody").innerHTML = html;
  })
  .catch((error) => {
    console.log("Error:", error);
  });
