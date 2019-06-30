class AddSourceIdToShelters < ActiveRecord::Migration[5.0]
  def change
    add_column :shelters, :source_id, :string
  end
end
