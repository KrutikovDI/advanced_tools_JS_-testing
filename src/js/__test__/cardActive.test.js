import { cardActve } from "../main/cardActive";

test('проверяем отсутствие класса mask у элемента #Discover', () => {
  cardActve('cardActve');
  const exam = document.querySelector('#Discover')
  expect(exam.classList.contains('mask')).toEqual(false)
})