const { planets } = require('../../models/planets.model');

//console.log("planets controller");


async function getAllPlanets(req, res) {
  //console.log(planets);
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
