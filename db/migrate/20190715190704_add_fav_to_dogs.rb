class AddFavToDogs < ActiveRecord::Migration[5.0]
  def change
    add_column :dogs, :fav, :boolean
  end
end
