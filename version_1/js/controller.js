var app = angular.module('timeClockApp');

app.controller('ClockController', function($scope, timeService){




$scope.employeeData = [
{
	firstName: "Ryan", 
	lastName: "Graham", 
	id: 1,
	timeLog: [
		{
			date: "Nov 19 2015", 
			clockIn: 1447819048398, //time displayed in milliseconds 
			clockOut: 1447855338441 //time displayed in milliseconds
		}, 
		{
			date: "Nov 18 2015", 
			clockIn: 1447819048398, 
			clockOut: 1447855338441
		},
		{
			date: "Nov 17 2015", 
			clockIn: 1447819048398, 
			clockOut: 1447855338441  
		},
		{
			date: "Nov 16 2015", 
			clockIn: 1447819048398, 
			clockOut: 1447855338441 
		},
		{
			date: "Nov 15 2015", 
			clockIn: 1447819048398,
			clockOut: 1447855338441
		}
		]
	},
	{
		firstName: "Bob", 
		lastName: "Barker", 
		id: 2
	},
	{
		firstName: "Minny", 
		lastName: "Driver", 
		id: 3
	},
	{
		firstName: "Dolly", 
		lastName: "Presley", 
		id: 4
	},
	{
		firstName: "Duke", 
		lastName: "Nukum", 
		id: 5
	}
	];


	});