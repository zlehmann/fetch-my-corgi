require 'unirest'
require 'pry'

#clear existing dogs
Dog.delete_all
#get access token from petfinder servers
t_res = Unirest.post "https://api.petfinder.com/v2/oauth2/token",
        parameters: {"grant_type" => "client_credentials",
                      "client_id" => "#{ENV["PETFINDER_APIKEY"]}",
                      "client_secret" => "#{ENV["PETFINDER_SECRET"]}"
                    }

ENV["PETFINDER_TOKEN"] = t_res.body['access_token']

response = Unirest.get "https://api.petfinder.com/v2/animals?type=dog&breed=corgi&gender=male&limit=100",
              headers: {Authorization: "Bearer #{ENV["PETFINDER_TOKEN"]}"}

dog_list = response.body['animals']

if dog_list == nil
  puts "dog_list didn't populate"
else
  dog_list.each do |dog|
    existing_dog = Dog.find_by source_id: dog['id']
    if existing_dog == nil
      if dog['photos'] == []
        image_url = ""
      else
        image_url = dog['photos'][0]['small']
      end

      if dog['description'] == ''
        description = "There isn't a description of this corgi, but we're sure he's awesome!"
      else
        description = dog['description'] =~ /&#039;/
      end

      new_dog = Dog.create(
        name: dog['name'],
        source_id: dog['id'],
        url: dog['url'],
        imageURL: image_url,
        description: description
      )
    end
  end
end
