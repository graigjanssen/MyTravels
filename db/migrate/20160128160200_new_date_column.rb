class NewDateColumn < ActiveRecord::Migration
  def change
    add_column :trips, :date, :string
  end
end
