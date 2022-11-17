import controller from './controller.js';

export default (server) => {
  server.route('/about').get(controller.about);
  server.route('/distance/:zipcode1/:zipcode2').get(controller.getDistance);
};
