Rails.application.routes.draw do

  #get 'api/dogs/fetch', to: 'api/dogs#fetch'

  namespace :api do
    resources :dogs, only: [:index, :show]
    resources :shelters, only: [:index, :show]
  end
end
