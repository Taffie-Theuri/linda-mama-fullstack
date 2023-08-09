class AppointmentsController < ApplicationController
  skip_before_action :is_doc, only: [:index]
  skip_before_action :authorize, only: [:index]

  def index
    render json: Appointment.all.order(:startDate), status: :ok
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: appointment, status: :ok
  end

  def create
    render json: Appointment.create!(appointment_params), status: :created
  end

  def update
    appointment = Appointment.find(params[:id])
    render json: appointment.update!(appointment_params), status: :created
  end

  def destroy
    appointment = Appointment.find(params[:id])
    appointment.destroy
    head :no_content
  end

  private

  def appointment_params
    params.permit(:startDate, :endDate, :title, :location, :doctor_id, :patient_id, :notes, :id)
  end
end
