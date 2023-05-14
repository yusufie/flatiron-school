// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function arraysFunction() {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
}

arraysFunction();


function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

destructivelyAppendCat("Ralph");


function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

destructivelyPrependCat("Bob");


function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

destructivelyRemoveLastCat();


function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

destructivelyRemoveFirstCat();


function appendCat(name) {
  const newCats = [...cats.slice(0), name];
  return newCats;
}

appendCat("Broom");


function prependCat(name) {
  const copyOfCats = [...cats];
  copyOfCats.unshift(name);
  return copyOfCats;
}

prependCat("Arnold");


function removeLastCat() {
  const copyOfCats = [...cats];
  copyOfCats.pop();
  return copyOfCats;
}

removeLastCat();


function removeFirstCat() {
  const copyOfCats = [...cats];
  copyOfCats.shift();
  return copyOfCats;
}

removeFirstCat();
