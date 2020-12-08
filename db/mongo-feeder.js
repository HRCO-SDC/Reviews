/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Review = require('./Review.js');
const faker = require('faker');
const mongoose = require('mongoose');

const createFakeReview = function() {
  return new Review({
    rating: faker.random.number(),
    recommend: faker.random.boolean(),
    response: faker.random.word(),
    body: faker.random.words(),
    date: faker.date.past(),
    reviewer_name: faker.internet.userName(),
    helpfulness: faker.random.number(),
    reported: faker.random.boolean(),
    product_id: faker.random.number()
  });
}

const createBatch = function() {
  const reviews = [];

  for (let i = 0; i < 1000000; i++) {
    reviews.push(createFakeReview());
  }
  return reviews;

}
let reviews = createBatch();
mongoose.connect('mongodb://localhost:27017/test',
    { useNewUrlParser: true, useUnifiedTopology: true });

Review.insertMany(reviews)
  .then(() => mongoose.disconnect())
  .catch(() => {});


/*
async function seed() {
  for (let i = 0; i < 1000; i++) {
    let review = new Review({
      rating: faker.random.number(),
      recommend: faker.random.boolean(),
      response: faker.random.word(),
      body: faker.random.words(),
      date: faker.date.past(),
      reviewer_name: faker.internet.userName(),
      helpfulness: faker.random.number(),
      reported: faker.random.boolean(),
      product_id: faker.random.number()
    });
    await review.save();
  }
}

seed();
mongoose.disconnect();*/

