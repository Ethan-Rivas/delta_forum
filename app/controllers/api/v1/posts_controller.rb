class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    @post = Post.new(post_params)
    @post.save

    render json: @post
  end

  private
  def post_params
    params.require(:post).permit(:user_id, :title, :content)
  end
end
