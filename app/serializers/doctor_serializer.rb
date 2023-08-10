class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :bio, :email, :doc,:appointments
  has_many :appointments
end
