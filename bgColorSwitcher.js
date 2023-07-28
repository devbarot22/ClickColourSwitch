const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    
    if (e.target.id === "btn1") {
      body.style.backgroundColor = "red";
	  buttons.forEach(function (button) {
        button.style.backgroundColor = "#FF6B6B";
      });
    document.getElementById('bgcs').style.color = '#FF6B6B';
    }
    if (e.target.id === "btn2") {
      body.style.backgroundColor = "green";
	  buttons.forEach(function (button) {
        button.style.backgroundColor = "#86B049";
      });
      document.getElementById('bgcs').style.color = '#86B049';
    }
    if (e.target.id === "btn3") {
      body.style.backgroundColor = "blue";
	  buttons.forEach(function (button) {
        button.style.backgroundColor = "#1AA7EC";
      });
      document.getElementById('bgcs').style.color = '#1AA7EC';
    }
  });
});
