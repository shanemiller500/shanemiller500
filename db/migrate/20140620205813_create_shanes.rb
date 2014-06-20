class CreateShanes < ActiveRecord::Migration
  def change
    create_table :shanes do |t|

      t.timestamps
    end
  end
end
