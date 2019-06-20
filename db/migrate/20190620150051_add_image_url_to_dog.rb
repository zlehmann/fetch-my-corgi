class AddImageUrlToDog < ActiveRecord::Migration[5.0]
  def change
    add_column :dogs, :imageURL, :string
  end
end
