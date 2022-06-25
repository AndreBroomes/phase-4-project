class EmployeeWithPositionsSerializer < ActiveModel::Serializer
  attributes :id, :name, :age

  has_many :positions
end
