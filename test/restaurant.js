'use strict';

var chai = require('chai');

// tdd style
var assert = chai.assert;
// bdd stlye
var expect = chai.expect;
chai.should();

var Restaurant = require('../src/models/restaurant.js');

describe('Restaurant Model', function() {
	
	describe('list', function() {
		it('should have an array of ratings', function() {
			var restaurant = new Restaurant();
			restaurant.ratings.should.not.equal(undefined);
		});

		it('should calculate average rating', function() {
			var restaurant = new Restaurant({
				ratings: [{
					rating: 1
				}, {
					rating: 2
				}]
			});

			restaurant.calculateAverageRating().should.equal(1.5);
		});

		it('should set average rating of 0 if no ratings', function() {
			var restaurant = new Restaurant();

			restaurant.calculateAverageRating().should.equal(0);
		});

		it('should truncate the name to 10 characters', function() {
			var restaurant = new Restaurant({
				name: 'A very long name'
			});
			var otherRestaurant = new Restaurant({
				name: 'Another long name'
			});

			restaurant.shortName().should.equal('A very lon');
			otherRestaurant.shortName().should.equal('Another lo');
		});
	});

	describe('details', function() {
		it('should show the reviews with ratings', function() {
			var restaurant = new Restaurant({
				name: 'El Dragon Verde',
				ratings: [{
					rating: 1,
					comments: 'Yuck!'
				}, {
					rating: 2,
					comments: 'Tastes like dog'
				}]
			});

			restaurant.showReviews().should.equal('1 - Yuck!\n2 - Tastes like dog');
		});

		describe('word', function() {
			var restaurant;

			beforeEach(function() {
				restaurant = new Restaurant({
					ratings: [{
						rating: 1
					}]
				});
			});

			it('should show very bad when rating < 2', function() {
				restaurant.ratings[0].rating = 1;
				restaurant.getAverageRatingDescription().should.equal('very bad');
			});

			it('should show bad when rating < 3', function() {
				restaurant.ratings[0].rating = 2;
				restaurant.getAverageRatingDescription().should.equal('bad');
			});

			it('should show OK when rating < 4', function() {
				restaurant.ratings[0].rating = 3;
				restaurant.getAverageRatingDescription().should.equal('OK');
			});

			it('should show good when rating < 5', function() {
				restaurant.ratings[0].rating = 4;
				restaurant.getAverageRatingDescription().should.equal('good');
			});

			it('should show excellent when rating is 5', function() {
				restaurant.ratings[0].rating = 5;
				restaurant.getAverageRatingDescription().should.equal('excellent');
			});

			it('should show description when float rating', function() {
				restaurant.ratings.push({ rating: 2});
				restaurant.getAverageRatingDescription().should.equal('very bad');
			});
		});
	});
});
