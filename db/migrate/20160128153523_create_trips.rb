class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :place
      t.string :url
      t.boolean :visited
      t.date :when
      t.text :memories
      t.text :plans

      t.timestamps null: false
    end
  end
end
