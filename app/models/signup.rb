class Signup < ApplicationRecord
    belongs_to :position
    belongs_to :employee

    validates :year, numericality: { greater_than_or_equal_to: 2022 }
end
