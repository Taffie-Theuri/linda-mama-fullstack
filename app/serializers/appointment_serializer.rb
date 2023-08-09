class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :endDate, :title, :location, :doctor_id, :patient_id, :notes, :patient

  def patient
    object.patient.name
  end

end
