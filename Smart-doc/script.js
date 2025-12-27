const fileInput = document.getElementById("fileInput");
const fileNameText = document.getElementById("fileName");

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileNameText.textContent = fileInput.files[0].name;
  } else {
    fileNameText.textContent = "No file chosen";
  }
});

async function uploadFile() {
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file first");
    return;
  }

  const reader = new FileReader();
  reader.onload = async () => {
    const base64Data = reader.result.split(",")[1];

    const response = await fetch("https://smart-doc-function.azurewebsites.net/api/uploadDocument", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ file: base64Data })
    });

    const result = await response.text();
    alert(result);
  };

  reader.readAsDataURL(file);
}

