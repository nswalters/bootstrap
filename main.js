/* 
  1. Create a collection of 8 ducks
    * a. split between male/female (not all the same)
    * b. same with size
    * c. At least 3 rubber ducks
  2. Print to DOM
*/

const ducks = [
  {
    color: "Black",
    name: "Daffy",
    breed: "Black Duck",
    size: "large", // one of: small, medium, large
    temperament: "mild",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/180px-Daffy_Duck.svg.png",
    gender: "male", // one of: male, female
    age: 75, //int
    isRubber: false, // bool
  },
  {
    color: "Green/Gray",
    name: "Ducky",
    breed: "Mallard",
    size: "medium", // one of: small, medium, large
    temperament: "docile",
    imageUrl:
      "https://www.allaboutbirds.org/guide/assets/photo/60021831-720px.jpg",
    gender: "male", // one of: male, female
    age: 6, //int
    isRubber: false, // bool
  },
  {
    color: "Yellow",
    name: "DeBugger",
    breed: "duckling",
    size: "small", // one of: small, medium, large
    temperament: "inantimate",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1321/6369/products/DSCF1961_large.jpg?v=1518578452",
    gender: "female", // one of: male, female
    age: 1, //int
    isRubber: true, // bool
  },
  {
    color: "Exotic",
    name: "Woody",
    breed: "Wood Duck",
    size: "medium", // one of: small, medium, large
    temperament: "mild",
    imageUrl:
      "https://www.allaboutbirds.org/guide/assets/photo/65533521-720px.jpg",
    gender: "male", // one of: male, female
    age: 4, //int
    isRubber: false, // bool
  },
  {
    color: "Yellow",
    name: "Charlie",
    breed: "artsy",
    size: "large", // one of: small, medium, large
    temperament: "angry",
    imageUrl:
      "https://exceptionnotfound.net/content/images/2017/05/rubber-duck-art-piece.jpg",
    gender: "male", // one of: male, female
    age: 13, //int
    isRubber: true, // bool
  },
  {
    color: "Black",
    name: "Francis",
    breed: "Swan",
    size: "large", // one of: small, medium, large
    temperament: "hostile",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Black_swan_jan09.jpg",
    gender: "female", // one of: male, female
    age: 32, //int
    isRubber: false, // bool
  },
  {
    color: "Brown/Gray",
    name: "Honksy",
    breed: "Canadian Goose",
    size: "large", // one of: small, medium, large
    temperament: "aggressive",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Canada_goose_on_Seedskadee_NWR_%2827826185489%29.jpg/1920px-Canada_goose_on_Seedskadee_NWR_%2827826185489%29.jpg",
    gender: "female", // one of: male, female
    age: 17, //int
    isRubber: false, // bool
  },
  {
    color: "blue",
    name: "Charlie",
    breed: "BathingDucky",
    size: "small", // one of: small, medium, large
    temperament: "peaceful",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/500x659/products/501/10536/blue-Rubber-Duck-ad-line-1__97181.1569599632.jpg?c=2",
    gender: "male", // one of: male, female
    age: 7, //int
    isRubber: true, // bool
  },
];

const printToDom = (selector, toPrint) => {
  document.querySelector(selector).innerHTML = toPrint;
};

const buildDuckCards = () => {
  let domString = "";

  for (let index = 0; index < ducks.length; index++) {
    const duck = ducks[index];

    domString += `
    <div class="duck">
      <h3>${duck.name}</h3>
      <img src="${duck.imageUrl}">
      <p>${duck.name} is a ${duck.breed}.  ${
      duck.gender === "male" ? "He" : "She"
    } is ${duck.age} years old, is a ${duck.size}, ${
      duck.color
    } duck, and very ${duck.temperament}.</p>
    `;

    if (duck.isRubber) {
      domString += `<p>Don't let the above fool you though.  This is actually just a rubber duck!</p></div>`;
    } else {
      domString += `</div>`;
    }
  }

  printToDom("#ducks", domString);
};

const init = () => {
  buildDuckCards();
};

init();
