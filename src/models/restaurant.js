'use strict';

function Restaurant(obj) {
	this.ratings = [];

	Object.assign(this, obj);

	this.getTotalRatings = function() {
		var totalRatings = 0;
		for (var i = 0; i < this.ratings.length; i++) {
			totalRatings += this.ratings[i].rating;
		}

		return totalRatings;

	};

	this.calculateAverageRating = function() {
		var totalRatings = this.getTotalRatings();

		if (this.ratings.length === 0)
			return 0;

		return totalRatings / this.ratings.length;
	};

	this.shortName = function() {
		return this.name.substring(0, 10);
	};

	this.showReviews = function() {
		var allReviews = '';
		for (var i = 0; i < this.ratings.length; i++) {
			allReviews += this.ratings[i].rating + ' - ' + this.ratings[i].comments;
			if (i !== this.ratings.length - 1)
				allReviews += '\n';
		}
		return allReviews;
	};

	this.getAverageRatingDescription = function() {
		var averageRatingsDescriptions = [
			'very bad',
			'bad',
			'OK',
			'good',
			'excellent'
		];
		var averageRating = Math.floor(this.calculateAverageRating());
		return averageRatingsDescriptions[averageRating - 1];
	};
}

module.exports = Restaurant;
