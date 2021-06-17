class Blog < ApplicationRecord
  has_many :posts
  validates :title, :category, presence: true
end
