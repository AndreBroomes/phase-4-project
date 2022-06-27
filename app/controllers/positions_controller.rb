class PositionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :Record_not_found
    def index
        positions = Position.all
        render json: positions, status: 200
    end

    def destroy
        position = Position.find(params[:id])
        position.destroy
        head :ok
    end

    private
    def Record_not_found
        render json: {error: "Position not found"}, status: 404
    end
end
