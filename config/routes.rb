Rails.application.routes.draw do
  get 'search', to: 'search#index'
  get 'users/profile'
  devise_for :users,  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :posts do
    resources :comments
  end


  root 'pages#home'
  get '/u/:id', to:'users#profile', as:'user'
  get 'about', to:'pages#about'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
