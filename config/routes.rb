Rails.application.routes.draw do
  get 'bitcoins', to: 'bitcoins#index'
  get 'bitcoins/convert'
  root 'exchanges#index'
  get 'convert', to: 'exchanges#convert'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
