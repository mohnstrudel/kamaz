class CreateClientRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :client_requests do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :message

      t.timestamps
    end
  end
end
