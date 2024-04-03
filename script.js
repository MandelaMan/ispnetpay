document.addEventListener("DOMContentLoaded", function () {
  document.head.insertAdjacentHTML(
    "beforeend",
    '<link rel=stylesheet href="/styles/payment.css">'
  );

  var mpesaButton = document.createElement("button");
  mpesaButton.id = "mpesaButton";

  img =
    '<img style="width: 30px; display: inline; margin: -9px 9px -9px -10px;" src= "/images/mpesa.png">';

  mpesaButton.innerHTML = img + "Pay via Mpesa";

  document.body.appendChild(mpesaButton);

  mpesaButton.addEventListener("click", function (e) {
    e.preventDefault();
    var paymentModal = document.createElement("div");
    paymentModal.id = "paymentModal";

    phoneInstruction =
      "<strong><em>We will send an Mpesa payment request to this phone number</em></strong>";
    form =
      '<form"><input class="mpesaInput" type="text" placeholder="Enter Amount" name="phone" id="mpesaAmount"></input><br>\
             <input class="mpesaInput" type="text" placeholder="Enter mobile No" name="phone" id="mpesaPhoneNumber"></input><br>' +
      phoneInstruction +
      '<br><br><button href="" id="mpesaSend" class="mpesaBtn" style="width: 100%;">' +
      img +
      '<span style="margin-left: 15px;">Complete Payment</span></button></form>';
    formMarkup =
      '<div id="mpesaForm" ><h3 class="mpesaHeader">Proceed to pay with Mpesa</h3>' +
      form +
      "</div>";

    paymentModal.innerHTML = formMarkup;

    document.body.appendChild(paymentModal);
    paymentModal.style.display = "block";

    paymentModal.addEventListener("click", (e) => {
      if (e.target.contains(paymentModal)) {
        paymentModal.style.display = "none";
      }
    });

    payButton = document.getElementById("mpesaSend");

    payButton.addEventListener("click", function (e) {
      e.preventDefault();
      payButton.disabled = true;
      document.getElementById("mpesaAmount").disabled = true;
      document.getElementById("mpesaPhoneNumber").disabled = true;

      console.log("Ready to send form");
      // formDiv = document.getElementById("mpesaForm");
      // if (url !== undefined) {
      //   var xhttp = new XMLHttpRequest();
      //   xhttp.open("POST", url, true);
      //   xhttp.setRequestHeader(
      //     "Content-type",
      //     "application/x-www-form-urlencoded"
      //   );
      //   xhttp.send(
      //     "phone=" + phoneInput.value + "&amount=" + amountInput.value
      //   );
      //   xhttp.onreadystatechange = function () {
      //     if (this.readyState == 4 && this.status == 200) {
      //       formDiv.innerHTML = success;
      //     } else {
      //       formDiv.innerHTML =
      //         'Something went wrong. Contact website developer. Error: "We could not POST to the URL specified!"';
      //     }
      //   };
      // } else {
      //   setTimeout(function () {
      //     formDiv.innerHTML =
      //       'Something went wrong. Contact website developer. Error: "No URL specified!"';
      //   }, 3000);
      // }
      // loader.style.display = "";
    });

    // Add event listener to close modal when clicking outside the content
  });
});
