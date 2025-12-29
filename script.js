document.addEventListener("DOMContentLoaded", function () {
   let pickedDateText = document.getElementById("pickedDate")
   let pickedTimeText = document.getElementById("pickedTime")
   let nextBtn = document.getElementById("nextBtn")
   let msg = document.getElementById("msg")
   let chosenDay = ""
   let chosenTime = ""

   function updateUI() {
      if (chosenDay != "") {
         pickedDateText.textContent = chosenDay
      } else {
         pickedDateText.textContent = "none"
      }

      if (chosenTime != "") {
         pickedTimeText.textContent = chosenTime
      } else {
         pickedTimeText.textContent = "none"
      }

      if (chosenDay != "" && chosenTime != "") {
         nextBtn.disabled = false
         nextBtn.classList.remove("btnDisabled")
      } else {
         nextBtn.disabled = true
         nextBtn.classList.add("btnDisabled")
      }
   }

   // date buttons
   let monthText = document.querySelector(".calMonth").textContent
   let dayButtons = document.querySelectorAll(".day")

   for (let i = 0; i < dayButtons.length; i++) {
      dayButtons[i].addEventListener("click", function () {

         for (let j = 0; j < dayButtons.length; j++) {
            dayButtons[j].classList.remove("daySelected")
         }

         this.classList.add("daySelected")
         chosenDay = this.textContent + " " + monthText
         msg.textContent = ""
         updateUI()
      })
   }

   // time slot buttons
   let timeButtons = document.querySelectorAll(".slotBtn")

   for (let k = 0; k < timeButtons.length; k++) {
      timeButtons[k].addEventListener("click", function (e) {
         e.preventDefault()

         if (this.classList.contains("slotDisabled")) {
            return
         }

         for (let x = 0; x < timeButtons.length; x++) {
            timeButtons[x].classList.remove("slotSelected")
         }

         this.classList.add("slotSelected")

         chosenTime = this.getAttribute("data-time")
         if (!chosenTime) {
            chosenTime = this.textContent
         }

         msg.textContent = ""
         updateUI()
      })
   }

   updateUI()

})