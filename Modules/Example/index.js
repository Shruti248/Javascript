// Importing
const { Book, Movie } = require("./classes");

const theGrapesOfWrath = new Book(
    "The Grapes of Wrath",
    null,
    "John Steinbeck"
  );
  const aNewHope = new Movie(
    "Episode 4: A New Hope",
    "Star Wars",
    "George Lucas"
  );

  console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath
  console.log(aNewHope.getInformation()); // Episode 4: A New Hope (Star Wars) [directed by George Lucas]
