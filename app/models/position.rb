class Position < ApplicationRecord
    has_many :signups, dependent: :destroy
    has_many :employees, through: :signups
end
