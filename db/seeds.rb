# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Dog.create(name: 'Bryce', url: 'https://www.petfinder.com/dog/bryce-44700619/pa/narberth/new-leash-on-life-usa-pa825/', source_id: 'bryce-44700619', imageURL: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44700619/4/?bust=1559571809&width=560')
Shelter.create(name: 'New Leash on Life USA', state: 'PA', city: 'Narberth', url: 'https://www.petfinder.com/member/us/pa/narberth/new-leash-on-life-usa-pa825/', address: '')
