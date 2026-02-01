// Dog Image API
async function searchDog() {
  const breed = document.getElementById("breed").value;
  const result = document.getElementById("result");

  if (breed === "") {
    result.innerHTML = "Please select a breed.";
    return;
  }

  const url = `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    result.innerHTML = `<img src="${data.message}" alt="Dog Image">`;
  } catch {
    result.innerHTML = "Error loading image.";
  }
}

// Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters.");
    return false;
  }

  return true;
}
