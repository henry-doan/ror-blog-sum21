class Api::PostsController < ApplicationController
  before_action :set_blog
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: @blog.posts
  end

  def show
    render json: @post 
  end

  def create
    @post = @blog.posts.new(post_params)
    if @post.save
      render json: @post
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  def update 
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    render json: { message: 'post deleted' }
  end

  private 
    def set_blog
      @blog = Blog.find(params[:blog_id])
    end

    def set_post
      # @post = Post.find(params[:id])
      @post = @blog.posts.find(params[:id])
    end
    # { post: { title: "asfdasd", body: "ADfasdf", author: "adfadf" } }
    def post_params
      params.require(:post).permit(:title, :body, :author)
    end
end
