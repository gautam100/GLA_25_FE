function getData() {
  return new Promise((resolve, reject) => {
    let url;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    console.log(id);
    if (id === null) {
      url = "https://jsonplaceholder.typicode.com/todos"; //API Endpoint
    } else {
      url = "https://jsonplaceholder.typicode.com/todos/" + id; //API Endpoint
    }

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
    let html = "";
    if (serverResult.length === 200) {
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
    } else {
      html = "<tr> <td>"+serverResult.id+"</td> <td>"+serverResult.title+"</td> <td>"+serverResult.completed+"</td> </tr>";
    }
    document.getElementById("tbody").innerHTML = html;
  })
  .catch((error) => {
    console.timeLog("catch");
    console.log("Error:", error);
  });
