require 'rails_helper'

RSpec.describe "Bitcoins", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/bitcoins"
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET #convert TO BTC' do
    it 'return http success' do
      get '/bitcoins/convert', params: {
        source_currency: 'USD',
        target_currency: 'BTC',
        amount: rand(1..9999)
      }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET #convert FROM BTC' do
    it 'return http success' do
      get '/bitcoins/convert', params: {
        source_currency: 'BTC',
        target_currency: 'USD',
        amount: rand(1..9999)
      }
      expect(response).to have_http_status(:success)
    end
  end
end
