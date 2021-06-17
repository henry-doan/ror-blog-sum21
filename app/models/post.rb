class Post < ApplicationRecord
  belongs_to :blog
  validates :title, :body, :author, presence: true
end
