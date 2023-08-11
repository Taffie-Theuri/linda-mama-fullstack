class Appointment < ApplicationRecord
  belongs_to :patient, optional: true
  belongs_to :doctor, optional:true
end
