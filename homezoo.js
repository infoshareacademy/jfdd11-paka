function get(selector) {
  return document.querySelector(selector);
}

const formNode = get(".form_submit");
const emailNode = get(".email");

formNode.addEventListener("submit", function(e) {
  e.preventDefault();
  const fetchUrl = "https://homezooapp.firebaseio.com/email.json";
  let personalData = {
    email: emailNode.value
  };
  addForm(personalData, fetchUrl);
});

const addForm = (data, fetchUrl) =>
  fetch(fetchUrl, {
    method: "POST",
    headers: {
      "Content-Type": "email/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      response.json();
      location.href = "./Whacamole/index.html";
    })
    .catch(error => console.error("Error:", error));
