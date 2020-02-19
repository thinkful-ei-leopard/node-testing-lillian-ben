'use strict';

const supertest = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /frequency', () => {
  it('should return an object of count,avg,highest', () => {
    return supertest(app)
      .get('/frequency?s=aaaBBBBAAAbbbbb')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.include.all.keys(
          'count', 'average', 'highest'
        );
      }
      );
  });
});