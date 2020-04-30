class BitcoinsController < ApplicationController
  def index
  end

  def convert
    value = BitcoinService.new(params[:source_currency], params[:target_currency], params[:amount]).call
    render json: { value: value }
  end
end
