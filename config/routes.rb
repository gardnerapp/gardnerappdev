Rails.application.routes.draw do
  resources :posts, path: 'SuperCoolTechBlog'
  devise_for :users, skip: [:registrations]
  resources :contacts
  root 'home#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
