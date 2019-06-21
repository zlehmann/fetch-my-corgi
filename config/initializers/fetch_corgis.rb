require 'unirest'
require 'pry'

#get access token from petfinder servers
t_res = Unirest.post "https://api.petfinder.com/v2/oauth2/token",
        parameters: {"grant_type" => "client_credentials",
                      "client_id" => "#{ENV["PETFINDER_APIKEY"]}",
                      "client_secret" => "#{ENV["PETFINDER_SECRET"]}"
                    }

ENV["PETFINDER_TOKEN"] = t_res.body['access_token']

response = Unirest.get "https://api.petfinder.com/v2/animals?type=dog&breed=corgi",
              headers: {Authorization: "Bearer #{ENV["PETFINDER_TOKEN"]}"}

dog_list = response.body['animals']

dog_list.each { |dog|
  new_dog = Dog.find_by source_id: dog['id']
  binding.pry
  if new_dog != nil
    Dog.create(
      name: dog['name'],
      source_id: dog['id'],
      url: dog['url'],
      imageURL: dog['photos'][0]['small']
    )
  end
}
