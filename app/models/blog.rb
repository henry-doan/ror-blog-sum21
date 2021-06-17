class Blog < ApplicationRecord
  has_many :posts, dependent: :destroy
  validates :title, :category, presence: true
end
