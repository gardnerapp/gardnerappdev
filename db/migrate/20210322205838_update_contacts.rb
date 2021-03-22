class UpdateContacts < ActiveRecord::Migration[6.0]
  def change
    rename_column :contacts, :nam, :name
  end
end
