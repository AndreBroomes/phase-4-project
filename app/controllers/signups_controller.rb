class SignupsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    def create
        signup = Signup.create!(signup_params)
        render json: signup.position, status: :created
    end

    private
    def signup_params
        params.permit(:year, :employee_id, :position_id)
    end

    def not_valid(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity

    end
end
