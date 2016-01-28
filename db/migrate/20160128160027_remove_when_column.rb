class RemoveWhenColumn < ActiveRecord::Migration
  def change
    remove_column :trips, :when
  end
end
