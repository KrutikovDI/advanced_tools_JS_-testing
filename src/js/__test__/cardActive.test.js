import { cardActve } from "../main/cardActive";

test("проверяем отсутствие класса 'mask' у элемента Discover", () => {
  cardActve("Discover");
  const exam = document.querySelector("#Discover")
  expect(exam.classList.contains("mask")).toEqual(false);
});