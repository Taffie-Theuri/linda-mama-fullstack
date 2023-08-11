class Result < ApplicationRecord
  belongs_to :patient, optional: true
end
