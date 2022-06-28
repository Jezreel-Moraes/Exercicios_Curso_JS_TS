const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener("load", () => {
      xhr.status >= 200 && xhr.status < 300
        ? resolve(xhr.responseText)
        : reject(xhr.statusText);
    });
  });
};

const loadResponse = (response) => {
  const div = document.querySelector(".response");
  div.innerHTML = response;
  console.clear();
  console.log(response);
};

async function loadPage(element) {
  const requestConfig = {
    method: "GET",
    url: element.getAttribute("href"),
  };

  try {
    const response = await request(requestConfig);
    loadResponse(response);
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("click", (event) => {
  const element = event.target;
  const tag = element.tagName.toLowerCase();
  if (tag !== "a") return;
  event.preventDefault();
  loadPage(element);
});
