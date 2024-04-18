document.addEventListener("DOMContentLoaded", function () {
  document.head.insertAdjacentHTML(
    "beforeend",
    '<link rel=stylesheet href="https://ispnetpay.vercel.app/payment.css">'
  );

  var e = document.createElement("button");
  (e.id = "mpesaButton"),
    (img =
      '<img style="width:30px;display:inline;margin:-9px 9px -9px -10px;" src= "/images/mpesa.png">'),
    (e.innerHTML = img + "Pay via Mpesa"),
    document.body.appendChild(e),
    e.addEventListener("click", function (e) {
      e.preventDefault();
      var t = document.createElement("div");
      (t.id = "paymentModal"),
        (formMarkup =
          '<div id="mpesaForm" ><h3 class="mpesaHeader">Proceed to pay with Mpesa</h3>' +
          (form =
            '<form"><input class="mpesaInput" type="text" placeholder="Enter Amount" name="phone" id="mpesaAmount"></input><br>             <input class="mpesaInput" type="text" placeholder="Enter mobile No" name="phone" id="mpesaPhoneNumber"></input><br>' +
            (phoneInstruction =
              "<strong><em>We will send an Mpesa payment request to this phone number</em></strong>") +
            '<br><br><button href="" id="mpesaSend" class="mpesaBtn" style="width: 100%;">' +
            img +
            '<span style="margin-left: 15px;">Complete Payment</span></button></form>') +
          "</div>"),
        (t.innerHTML = formMarkup),
        document.body.appendChild(t),
        (t.style.display = "block"),
        t.addEventListener("click", (e) => {
          e.target.contains(t) && (t.style.display = "none");
        }),
        (payButton = document.getElementById("mpesaSend")).addEventListener(
          "click",
          function (e) {
            e.preventDefault(),
              (payButton.disabled = !0),
              (document.getElementById("mpesaAmount").disabled = !0),
              (document.getElementById("mpesaPhoneNumber").disabled = !0),
              (amount = document.getElementById("mpesaAmount").value),
              (bundle_id = document.getElementById("bundle_id").value),
              (mac_address = document.getElementById("mac_address").value),
              (phone = document.getElementById("mpesaPhoneNumber").value);

            const data = {
              phone,
              amount,
            };

            const inputOptions = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            };

            console.log(amount + bundle_id + mac_address + phone);

            // fetch("https://ispnetpay.vercel.app/api/pay/stk", inputOptions)
            //   .then((response) => {
            //     if (!response.ok) {
            //       throw new Error("Network response was not ok");
            //     }
            //     return response.json(); // Parse the JSON data
            //   })
            //   .then((data) => {
            //     console.log("Response data:", data);
            //     // Handle the response data as needed
            //   })
            //   .catch((error) => {
            //     console.error(
            //       "There was a problem with the POST request:",
            //       error
            //     );
            //     // Handle errors
            //   });
          }
        );
    });
});
