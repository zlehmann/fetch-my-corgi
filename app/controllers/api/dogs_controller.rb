class Api::DogsController < ApplicationController
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
    @dog.update_attributes()
    render json: @dog
  end

  private
    def dog_param
      params.require(:dog).permit(:fav)
    end
end
