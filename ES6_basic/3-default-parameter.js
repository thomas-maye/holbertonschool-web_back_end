/* eslint-disable */
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  expansion1989 = typeof expansion1989 === 'undefined' ? 89 : expansion1989;
  expansion2019 = typeof expansion2019 === 'undefined' ? 19 : expansion2019;
  return initialNumber + expansion1989 + expansion2019;
}