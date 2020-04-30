require 'rails_helper'
require 'json'
require './app/services/bitcoin_service'

describe BitcoinService do
  let(:source_currency) { "USD" }
  let(:target_currency) { "BTC" }
  let(:api_return) do
    4.36
  end

  before do
    allow(RestClient).to receive(:get) { OpenStruct.new(body: api_return.to_json) }
  end

  it '#call' do
    amount = rand(0..9999)
    service_bitcoin = BitcoinService.new(source_currency, target_currency, amount).call
    expected_bitcoin = 4.36
    expect(service_bitcoin).to eq expected_bitcoin
  end
end
