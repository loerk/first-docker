import properties from '../package.json' assert { type: 'json' };
import distance from '../service/distance.js';

const controller = {
  about: (_, res) => {
    const aboutInfo = {
      name: properties.name,
      version: properties.version,
    };
    res.json(aboutInfo);
  },
  getDistance: (req, res) => {
    distance.find(req, res, (data) => {
      if (!data) res.send({ message: 'error occured' });
      res.json(data);
    });
  },
};

export default controller;
