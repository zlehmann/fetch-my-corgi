require 'unirest'

class Api::DogsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update]

  def index
    @dogs = Dog.all
    render json: @dogs
  end

  def show
    @dog = Dog.find(params[:id])
    render json: @dog
  end

  def update
    @dog = Dog.find(params[:id])
    @dog.update_attributes(dog_param)
    render json: @dog
  end

  def update_backend
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
  end

  private
    def dog_param
      params.require(:dog).permit(:fav)
    end
end
