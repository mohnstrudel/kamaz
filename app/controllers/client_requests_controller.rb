class ClientRequestsController < ApplicationController

  def create
    @client_request = ClientRequest.new(client_request_params)

    if @client_request.save
      respond_to do |format|
        format.js { render 'create', layout: false }
      end
    end
  end

  private

  def client_request_params
    params.require(:client_request).permit(:name, :email, :phone, :message)
  end
end
