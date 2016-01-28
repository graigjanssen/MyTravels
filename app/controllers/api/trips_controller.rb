class Api::TripsController < ApplicationController

  def index
    db_trips = Trip.all
    render json: {trips: db_trips}
  end

  def create
    new_trip = Trip.create( trip_params )
    render json: new_trip
  end

  private

  def trip_params
    params.require(:trip).permit(:place, :url, :visited, :date, :memories, :plans)
  end

end
