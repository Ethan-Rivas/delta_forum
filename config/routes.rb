Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do
    authenticated :user do
      root 'frontend#show', as: :authenticated

      namespace :api do
        namespace :v1 do
          resources :users
          resources :posts do
            resources :comments
          end
        end
      end
      match "*path", to: "frontend#show", via: :all
    end
  end

  unauthenticated :user do
    root to: 'devise/sessions#new'
  end
end
