class EmployeesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :Response_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :Record_not_valid
    def index
        employees = Employee.all
        render json: employees, status: 200
    end

    def show
        employee =Employee.find(params[:id])
        render json: employee, serializer: EmployeeWithPositionsSerializer
    end

    def create
        employee = Employee.create!(employee_params)
        render json: employee, status: :created
    end



    private
    def Response_record_not_found
        render json: {error: "Employee not found"}, status: 404
    end

    def employee_params
        params.permit(:name, :age)
    end
    
    def Record_not_valid(exception)
            render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end

