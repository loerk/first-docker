import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.ZIPCODE_API_KEY;
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';
const distance = {
  find: async (req, res) => {
    const response = await fetch(
      zipCodeURL +
        apiKey +
        '/distance.json/' +
        req.params.zipcode1 +
        '/' +
        req.params.zipcode2 +
        '/mile'
    );
    const result = await response.json();
    if (response.status === 200) {
      res.send(result);
    } else {
      console.log('error occurred distance');
      res.send({ distance: -1 });
    }
  },
};

export default distance;
