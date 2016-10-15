[![Build Status](https://lambci-jorgevargas-buildresults-1c034toyg6bx8.s3.amazonaws.com/gh/vargasj/ratings-tdd/branches/master/398568cc583b5f1e448a8b66ca9f1646.svg)](https://lambci-jorgevargas-buildresults-1c034toyg6bx8.s3.amazonaws.com/gh/vargasj/ratings-tdd/branches/master/207b38ef0986810197472f0b4be9cd41.html)

We need a restaurant review application, where users will be able to rate restaurants 

We need to show a list of restaurants
	should show the average rating
	should truncate the name to 10 characters

We need to show the details of a restaurant
	should show the reviews with ratings
	should show a word describing the rating

Model:
	Restaurants
		Name
		Description
		Average Score
		Ratings
			Rating
			Comments
