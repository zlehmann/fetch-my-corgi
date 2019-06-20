Rails.application.routes.draw do

  namespace :api do
    resources :dogs, only: [:index, :show]
    resources :shelters, only: [:index, :show]
  end
end
