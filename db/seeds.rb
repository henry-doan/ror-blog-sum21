5.times do
  blog = Blog.create(
    title: Faker::Dessert.topping,
    category: Faker::Dessert.variety
  )

  3.times do
    Post.create(
      title: Faker::Space.moon,
      body: Faker::Space.agency,
      author: Faker::Space.galaxy,
      blog_id: blog.id
    )
  end
end

puts "Data seeded"