import { checkSystem } from "./checkSystem";
import { cardActve } from "./cardActive";


export default class CheckingCard {
  constructor() {
    this.form = document.querySelector(".form");
    this.onSubmitCheckCard = this.onSubmitCheckCard.bind(this);
    this.cardNoActive = this.cardNoActive.bind(this);
  }

  checkCard() {
    this.form.addEventListener("submit", this.onSubmitCheckCard);
  }

  onSubmitCheckCard(e) {
    e.preventDefault();
    const input = document.querySelector(".input");
    const data = input.value.trim();
    if (!isNaN(data)) {
      let checkNumber = data[data.length - 1];
      let checkData = data.slice(0, -1);
      let dataRevers = checkData.split("").reverse().join("");
      let total = 0;
      for (let index = 0; index < dataRevers.length; index++) {
        let number = Number(dataRevers[index]);
        if (index % 2 == 0) {
          if (number * 2 > 9) {
            total = total + (number * 2 - 9);
          } else {
            total = total + number * 2;
          }
        } else {
          total = total + number;
        }
      }
      if ((total + Number(checkNumber)) % 10 == 0) {
        this.cardNoActive();
        input.value = "";
        cardActve(checkSystem(data));

      } else {
        this.cardNoActive();
        input.value = "";
        alert("Номер карты неверный");

      }
    } else {
      input.value = "";
      this.cardNoActive();
      alert("Номер карты неверный");
    }
  }

  cardNoActive() {
    const allCards = document.querySelectorAll(".card");
    for (let index = 0; index < allCards.length; index++) {
      let card = allCards[index];
      if (!card.classList.contains("mask")) {
        card.classList.add("mask");
      }
    }
  }
}
