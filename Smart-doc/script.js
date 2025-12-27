async function uploadFile() {
  const fileInput = document.getElementById("fileInput");

  if (!fileInput.files.length) {
    alert("Please select a file");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  const response = await fetch("https://smart-doc-function.azurewebsites.net/api/uploadDocument", {
    method: "POST",
    body: formData
  });

  const result = await response.text();
  alert(result);
}
