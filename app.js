<script>
function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let message = document.getElementById("message").value;

  let myNumber = "94710510428"; // 👉 ඔයාගේ WhatsApp number එක දාන්න (94 format)

  let url = "https://wa.me/" + myNumber + "?text="
    + "New Customer Request:%0a"
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Service: " + service + "%0a"
    + "Message: " + message;

  window.open(url, "_blank");
}
</script>
function doPost(e) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.phone,
    data.service,
    data.message,
    new Date()
  ]);

  return ContentService.createTextOutput("Success");
}