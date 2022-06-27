# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "👩👨 Seeding users..."



puts "🏕 Seeding employees..."
employee1 = Employee.create(name: 'Caitlin', age: 18)
employee2 = Employee.create(name: 'Lizzie', age: 19)
employee3 = Employee.create(name: 'Tom', age: 21)
employee4 = Employee.create(name: 'Morgan', age: 25)
employee5 = Employee.create(name: 'Danny', age: 21)
employee6 = Employee.create(name: 'Peter', age: 20)
employee7 = Employee.create(name: 'Amanda', age: 29)
employee8 = Employee.create(name: 'Nick', age: 32)

puts "🏕 Seeding positions..."
position1 = Position.create(name: 'Mechanic', )
position2 = Position.create(name: 'FrontEnd Developer' )
position3 = Position.create(name: 'Manager', )
position4 = Position.create(name: 'Physical Therapist' )
position5 = Position.create(name: 'Chef')
position6 = Position.create(name: 'Receptionist' )
position7 = Position.create(name: 'Pharmacist' )
position8 = Position.create(name: 'Teacher' )

puts "🏕 Seeding signups..."
Signup.create(employee_id: employee1.id, position_id: position2.id, year: 2022)
Signup.create(employee_id: employee1.id, position_id: position1.id, year: 2022)
Signup.create(employee_id: employee1.id, position_id: position4.id, year: 2022)
Signup.create(employee_id: employee2.id, position_id: position2.id, year: 2022)
Signup.create(employee_id: employee2.id, position_id: position1.id, year: 2022)
Signup.create(employee_id: employee4.id, position_id: position8.id, year: 2022)
Signup.create(employee_id: employee5.id, position_id: position7.id, year: 2022)
Signup.create(employee_id: employee3.id, position_id: position4.id, year: 2022)

puts "✅ Done seeding!"

puts "✅ Done seeding!"