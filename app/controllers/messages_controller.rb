class MessagesController < ApplicationController
    def index
      @messages = Message.all
      render json: @messages
    end

    def show
      @message = Message.find(params[:id])
      render json: @message
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Message not found' }, status: :not_found
    end

    def create
      @message = Message.new(message_params)
      render json: @message, status: :created

    end

    # def create
    #   @message = Message.new(message_params)
    #   if @message.save
    #     render json: @message, status: :created
    #   else
    #     render json: @message.errors, status: :unprocessable_entity
    #   end
    # end

    def update
      @message = Message.find(params[:id])
      if @message.update(message_params)
        render json: @message
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Message not found' }, status: :not_found
    end

    def destroy
      @message = Message.find(params[:id])
      @message.destroy
      render json: { message: 'Message deleted successfully' }
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Message not found' }, status: :not_found
    end

    private

    def message_params
      params.require(:message).permit(:content, :sender, :timestamp)
    end
end