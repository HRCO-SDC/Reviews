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

const create10KReviews = function() {
  const reviews = [];

  for (let i = 0; i < 10000; i++) {
    reviews.push(createFakeReview());
  }
  return reviews;
}

const seedDatabase = function() {
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

  let done = 0;
  const reviews = create10KReviews();

  for (let i = 0; i < reviews.length; i++) {
    reviews[i].save((err, result) => {
      done++;
      if (done === reviews.length) {
        mongoose.disconnect();
      }
    });
  }
}

for (let i = 0; i < 100; i++) {
  seedDatabase();
}




/*
let filename = 'reviews';
let count = 1;

function generateData(file, counter) {
  const filename = './' + file + counter.toString() + '.csv';
  const data = [];
  for (let i = 0; i < 100000; i++) {
    data.push(createFakeReview())
  }
  return data;
}

for (let i = 0; i < 100; i++) {
  generateData(filename, count);
  count++;
}*/