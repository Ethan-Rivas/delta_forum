class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts, :methods => :comments
  end

  def create
    @post = Post.create(post_params)

    render json: @post
  end

  def show
    @post = Post.find(params[:id])

    render json: @post, :methods => :comments
  end

  def update
    @post = current_user.posts.find(params[:id])
    @post.update(post_params)

    render json: @post
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    @post.destroy!

    redirect_to '/posts'
  end

  private
  def post_params
    params.require(:post).permit(:user_id, :title, :content)
  end
end
