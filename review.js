function addReview() {
  let name = document.getElementById("name").value;
  let review = document.getElementById("review").value;

  let div = document.createElement("div");
  div.innerHTML = `<strong>${name}</strong><p>${review}</p>`;

  document.getElementById("reviews").appendChild(div);
}
