# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Trip.create({
  place: 'Hawaii',
  url: 'http://www.civilbeat.com/wp-content/uploads/2014/06/lanikai-pillboxes-trail.jpg',
  visited: true,
  date: 'October, 2014',
  memories: 'Hiking to the Lanikai pillbox for an incredible view.  Best breakfasts ever.'
  })

Trip.create({
  place: 'New Orleans',
  url: 'http://www.strengthsinternational.com/wp-content/uploads/2013/12/New-Orleans.jpg',
  visited: false,
  date: 'November, 2016',
  plans: 'Listen to as much music as possible while eating decadent food and drinking a ton'
  })
