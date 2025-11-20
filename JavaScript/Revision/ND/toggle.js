let isDisplay = true;

const toggleDiv = function () {
  if (isDisplay) {
    document.getElementById("div1").style.display = "none";
    isDisplay = false;
  } else {
    document.getElementById("div1").style.display = "block";
    isDisplay = true;
  }
};

function test(){
    const pi = {value:3.141}
    pi.value = 5.0
}
test()