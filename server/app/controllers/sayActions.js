// Declare the action

// const { name } = require("../config");

const sayWelcome = (req, res) => {
  console.info(req.query);

  res.send(
    `Welcome to Wild Series !, ${req.query.name}, i see you brought a ${req.query.slip} underwear. nice.`
  );
};

// Export it to import it somewhere else

module.exports = { sayWelcome };
