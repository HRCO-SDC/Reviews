/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

const createReview = function() {
  return {
    rating: faker.random.number(),
    recommend: faker.random.boolean(),
    response: faker.random.word(),
    body: faker.random.words(),
    date: faker.date.past(),
    reviewer_name: faker.internet.userName(),
    helpfulness: faker.random.number(),
    reported: faker.random.boolean(),
    product_id: faker.random.number()
  };
};

let reviews = [];
for (let i = 0; i < 10000000; i++) {
  reviews.push(createReview());
}

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  const db = client.db('test');
  const collection = db.collection('reviews');
  collection.insertMany(reviews, (err, result) => {
    client.close();
  });
});



