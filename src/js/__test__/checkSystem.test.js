import { checkSystem } from "../main/checkSystem"

test('проверяем функцию проверки системы карты', () => {
  const correct = 'American_Express'
  expect(checkSystem('379178626320995')).toBe(correct);
})