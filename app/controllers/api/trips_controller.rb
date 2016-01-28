class Api::TripsController < ApplicationController

  def index
    db_trips = Trip.all
    render json: {trips: db_trips}
  end

  def create
    new_trip = Trip.create( trip_params )
    render json: new_trip
  end

  def destroy
    Trip.destroy( params[:id] )
    render json: {description: 'success'}
  end

  private

  def trip_params
    params.require(:trip).permit(:place, :url, :visited, :date, :memories, :plans)
  end

end
