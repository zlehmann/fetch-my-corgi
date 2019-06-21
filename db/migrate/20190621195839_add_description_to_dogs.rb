class AddDescriptionToDogs < ActiveRecord::Migration[5.0]
  def change
    add_column :dogs, :description, :string
  end
end
