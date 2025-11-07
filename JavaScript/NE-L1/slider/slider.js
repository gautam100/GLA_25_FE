var pointer = 0;
var imgArray = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

let slider = (pointer = 0) => {
  console.log(pointer);
  if (pointer < imgArray.length) {
    document.getElementById("image-container").innerHTML =
      "<img src='" + imgArray[pointer] + "' />";

    document.getElementById("image_no").innerHTML =
      "<h1>" + imgArray[pointer] + "</h1>";
  }
};

let nextImage = () => {
  if (pointer < imgArray.length - 1) {
    pointer += 1;
  } else {
    pointer = 0;
  }
  slider(pointer);
};

let prevImage = () => {
  if (pointer > 0) {
    pointer -= 1;
  } else {
    pointer = imgArray.length - 1;
  }
  slider(pointer);
};
