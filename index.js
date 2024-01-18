const wraper = document.querySelector(".wraper");

const designList = [
  {
    title: "Glowing Neon Buttons",
    img: "./images/1.png",
    url: "./glowing-neon-button/gnb.html"
  },
  {
    title: "Neumorphism Login Form",
    img: "./images/2.png",
    url: "./glowing-neon-button/nlf.html"
  }
  
];

designList.forEach((item, index) => {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let heading = document.createElement("h3");
  let para = document.createElement("p");
  let link = document.createElement("a");

  card.classList.add("card");
  img.classList.add("card-img");
  img.src = item.img;
  heading.textContent = item.title;
  para.textContent = `Day - ${index + 1}`;
  link.href = item.url;
  link.textContent = "View Now";
  link.classList.add("btn");
  link.target = "_blank";
  card.appendChild(img);
  card.appendChild(heading);
  card.appendChild(para);
  card.appendChild(link);
  wraper.appendChild(card);
})