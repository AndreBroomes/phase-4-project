Rails.application.routes.draw do


  resources :signups, only: [:create]
  resources :positions, only: [:index, :destroy]
  resources :employees, only: [:index, :show, :create]
 
  get "signup", to: "users#new"
get "login", to: "sessions#new"
post "login", to: "sessions#create"
delete "logout", to: "sessions#destroy"
resources :users, except: [:new]

end
