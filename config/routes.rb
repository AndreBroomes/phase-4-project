Rails.application.routes.draw do
  resources :users
  resources :signups
  resources :positions
  resources :employees
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create, :destroy]
  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
