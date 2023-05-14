// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

// returns all drivers that match the passed in name
const findMatching = (p, q) =>
  p.filter((p) => p.toLowerCase() === q.toLowerCase());

// returns a driver if beginning provided letters match
const fuzzyMatch = (p, q) => p.filter((p) => p.charAt(0) === q.charAt(0));

// accesses the data structure to check if name matches
const matchName = (p, q) => p.filter((p) => p.name === q);
