class AddFieldsToDogs < ActiveRecord::Migration[5.0]
  def change
    add_column :dogs, :name, :string
    add_column :dogs, :url, :string
    add_column :dogs, :source_id, :string
  end
end
