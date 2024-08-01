// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

/* Here you code */

const browse = (req, res) => {
  res.json(categories);
};

const read = (req, res) => {
  const parsedId = Number.parseInt(req.params.id, 10);

  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

module.exports = {
  /* Here you export */
  browse,
  read,
};
