class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :endDate, :title, :location, :doctor_id, :patient_id, :notes, :patient
  belongs_to :doctor

  def patient
    object.patient.name
  end

end
