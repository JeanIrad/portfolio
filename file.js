document.addEventListener("DOMContentLoaded", () => {
  const p = document.querySelector("p");
  const colors = ["#ccc", "purple", "cyan", "#48a", "#d626", "#673", "#594acd"];
  const btn = document.querySelector("button");
  const quoteBtn = document.querySelector(".get-quote");

  // qoutes variables
  const personImage = document.querySelector(".qoute-holder");
  const personName = document.querySelector("#person-name");
  const personQoute = document.querySelector("#qoute-name");
  

  btn.onclick = () => {
    let color = colors[Math.floor(Math.random() * (colors.length - 1))];
    p.style.backgroundColor = color;
    // console.log(color)
  };
  quoteBtn.onclick = () => {
    let color = colors[Math.floor(Math.random() * (colors.length - 1))];
    let imgUrl = getQoute().then((data) => {
      personImage.src = data.photo;
      personImage.alt = data.name;
      personName.innerHTML = ` _ ${data.name}`;
      personQoute.innerHTML = ` "${data.qoute}"`;
      personQoute.style.color = color
    });
  };
  window.onload = function(){
    console.log('hello')
    let color = colors[Math.floor(Math.random() * (colors.length - 1))];
    let imgUrl = getQoute().then((data) => {
      personImage.src = data.photo;
      personImage.alt = data.name;
      personName.innerHTML = ` _ ${data.name}`;
      personQoute.innerHTML = ` "${data.qoute}"`;
      personQoute.style.color = color 
    }
    )
}
  const urlData = "./persons.json";
  const getQoute = async () => {
    const res = await fetch(urlData);
    const data = await res.json();
    let index = Math.floor(Math.random() * (data.length - 1));
    let randomQoute = data[index];
    return randomQoute;
  };
});
