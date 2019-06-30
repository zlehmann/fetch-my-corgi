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
    if existing_shelter == nil
      new_shelter = Shelter.create(
        name: shelter['name'],
        source_id: shelter['id'],
        url: shelter['url'],
        state: shelter['address']['state'],
        city: shelter['address']['city'],
        address: shelter['address']['address1']
      )
    end
  end
end
