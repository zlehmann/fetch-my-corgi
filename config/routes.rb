Rails.application.routes.draw do

  #get 'api/dogs/fetch', to: 'api/dogs#fetch'

  namespace :api do
    get 'dogs/update_backend', to: 'dogs#update_backend'
    resources :dogs
    resources :shelters, only: [:index, :show]
  end
end
