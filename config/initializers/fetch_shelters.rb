require 'unirest'
require 'pry'

#get access token from petfinder servers
t_res = Unirest.post "https://api.petfinder.com/v2/oauth2/token",
        parameters: {"grant_type" => "client_credentials",
                      "client_id" => "#{ENV["PETFINDER_APIKEY"]}",
                      "client_secret" => "#{ENV["PETFINDER_SECRET"]}"
                    }

ENV["PETFINDER_TOKEN"] = t_res.body['access_token']

response = Unirest.get "https://api.petfinder.com/v2/organizations?location=11221&distance=250&limit=100",
              headers: {Authorization: "Bearer #{ENV["PETFINDER_TOKEN"]}"}

shelter_list = response.body['organizations']

if shelter_list == nil
  puts "dog_list didn't populate"
else
  shelter_list.each do |shelter|
    existing_shelter = Shelter.find_by source_id: shelter['id']
    if existing_dog == nil
      if dog['photos'] == []
        image_url = ""
      else
        image_url = dog['photos'][0]['small']
      end

      new_dog = Dog.create(
        name: dog['name'],
        source_id: dog['id'],
        url: dog['url'],
        imageURL: image_url,
        description: dog['description']
      )
    end
  end
end
