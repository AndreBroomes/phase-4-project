class Employee < ApplicationRecord
    has_many :signups
    has_many :positions, through: :signups

    validates :name, presence: true
    validates :age, numericality: {greater_than_or_equal_to: 18}
end
