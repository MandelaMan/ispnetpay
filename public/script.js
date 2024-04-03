document.addEventListener("DOMContentLoaded", function () {
  document.head.insertAdjacentHTML(
    "beforeend",
    '<link rel=stylesheet href="/styles/payment.css">'
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
            (phoneInstruction = "") +
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
              (phone = document.getElementById("mpesaPhoneNumber").value),
              (amount = document.getElementById("mpesaAmount").value),
              console.log("Ready to send form" + phone + " " + amount);
          }
        );
    });
});
