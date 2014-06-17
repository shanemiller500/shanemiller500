Rails.application.routes.draw do
  resources :shanes

  root 'shanes#index'
end
