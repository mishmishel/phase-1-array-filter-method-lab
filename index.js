// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching = (arr, query) => {
    return arr.filter(element => 
    element.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}
console.log(filterItems(drivers, "Bobby"));

function fuzzyMatch(array, query){
    return array.filter(x => x.startsWith(query));
} 

function matchName(array, query) {
    return array.filter(driver => driver.name === query);
}


