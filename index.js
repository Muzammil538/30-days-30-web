const wraper = document.querySelector(".wraper");

const designList = [
  {
    title: "Personal Portfolio Website",
    img: "./images/1.png",
    url: "./beginner/personal-portfolio/ppfw.html"
  },
  {
    title: "Simple To-Do List App",
    img: "./images/2.png",
    url: "./"
  }
  
];

designList.forEach((item, index) => {
  let card = document.createElement("div");
  // let img = document.createElement("img");
  let heading = document.createElement("h3");
  let para = document.createElement("p");
  let link = document.createElement("a");

  card.classList.add("card");
  // img.classList.add("card-img");
  // img.src = item.img;
  heading.textContent = item.title;
  para.textContent = `Day - ${index + 1}`;
  link.href = item.url;
  link.textContent = "View Now";
  link.classList.add("btn");
  link.target = "_blank";
  // card.appendChild(img);
  card.appendChild(heading);
  card.appendChild(para);
  card.appendChild(link);
  wraper.appendChild(card);
})