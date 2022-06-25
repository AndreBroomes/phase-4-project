class CreateSignups < ActiveRecord::Migration[7.0]
  def change
    create_table :signups do |t|
      t.integer :employee_id
      t.integer :position_id
      t.integer :year

      t.timestamps
    end
  end
end
