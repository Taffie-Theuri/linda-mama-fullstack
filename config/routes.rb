Rails.application.routes.draw do
  resources :results, only: [:index]
  resources :appointments
  resources :doctors, only: [:index, :show]
  resources :patients, only: [:index, :show, :create, :destroy]
  resources :departments, only: [:index]
  resources :diet_blogs

  get 'diet_blogs/show'
  get 'diet_blogs/index'
  get 'diet_blogs/create'
  resources :messages

  post '/doclogin', to: 'sessions#doclogin'
  post '/patientlogin', to: 'sessions#patientlogin'
  delete '/logout', to: 'sessions#logout'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
