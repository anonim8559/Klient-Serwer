var json = [];
async function getData() {
  const data = await fetch("http://localhost:3000");
  json = await data.json();
  console.log(json);
  createListElement();
}
getData();
function createListElement() {
  document.getElementById("ul").innerHTML = "";

  for (let i = 1; i <= json.length - 1; i++) {
    const li = document.createElement("li");
    document.getElementById("ul").appendChild(li);
    li.innerHTML = json[i].nazwa;
  }
}
async function sendMsg() {
  const input = document.getElementById("input").value;
  const data = await fetch(`http://localhost:3000/gettask/${input}`);
  getData();
}
