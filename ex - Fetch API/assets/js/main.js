const loadResponse = (response) => {
  const div = document.querySelector(".response");
  div.innerHTML = response;
  console.clear();
  console.log(response);
};

async function loadPage(element) {
  const url = element.getAttribute("href");
  try {
    const response = await fetch(url);
    if (response.status !== 200) throw new Error("Nao achei a pagina");
    const html = await response.text();
    loadResponse(html);
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("click", (event) => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();
  if (tag !== "a") return;
  event.preventDefault();
  loadPage(element);
});
