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

  end

  private
    def dog_param
      params.require(:dog).permit(:fav)
    end
end
