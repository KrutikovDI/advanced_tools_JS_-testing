import { cardActve } from "../main/cardActive";

test("проверяем отсутствие класса 'mask' у элемента Discover", () => {
    document.body.innerHTML = `<div class="cards-list">
    <div class="card-conteiner">
      <div class="card mask" id="Discover">
        <img src="./img/Discover.png" alt="Discover" class="card-img">
      </div>
    </div>
  </div>`;
  cardActve("Discover");
  const exam = document.getElementById("Discover")
  expect(exam.classList.contains("mask")).toEqual(false);
});
