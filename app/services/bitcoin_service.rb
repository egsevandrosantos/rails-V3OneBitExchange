require 'rest-client'
require 'json'

class BitcoinService
  def initialize(source_currency, target_currency, amount)
    @source_currency = source_currency
    @target_currency = target_currency
    @amount = amount
  end

  def call
    begin
      get_value
    rescue RestClient::ExceptionWithResponse => e
      e.response
    end
  end

  private
    def get_value
      blockchain_api_url = Rails.application.credentials[:blockchain_api_url]
      url = blockchain_api_url
      if @source_currency == 'BTC'
        url = "#{url}/frombtc?currency=#{@target_currency}"
      else
        url = "#{url}/tobtc?currency=#{@source_currency}"
      end
      url = "#{url}&value=#{@amount}"
      res = RestClient.get url
      JSON.parse(res.body).to_f
    end
end
