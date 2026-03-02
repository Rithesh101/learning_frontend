const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  }
];


const users = [
  { id: 1, name: "Alice", email: "alice@example.com", isActive: true, role: "admin" },
  { id: 2, name: "Bob", email: "bob@example.com", isActive: false, role: "user" },
  { id: 3, name: "Charlie", email: "charlie@example.com", isActive: true, role: "user" }
];
var numbers = [1,2,3,4,4];
function double(x){
  return x*2;
}
var doubled = numbers.map(double);
var newd = [];
 numbers.forEach(function big(x) {
  newd.push(x*2);
 })
var car = numbers.map(x => x*2);
const new_array  = users.filter(user => user.isActive === true);
var newm = numbers.filter(x => x > 1);
numbers.forEach(function greeater(x){
  newd.push();
});
var red = numbers.reduce((sum,num)=>{return sum+num});
var findd =  numbers.findIndex(x => x > 3);

var meanings = emojipedia.map(x=> x.meaning.substring(0,100));
console.log(meanings);