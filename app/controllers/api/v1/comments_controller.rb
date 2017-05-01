class Api::V1::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render json: @comments
  end

  def create
    @comment = Comment.create(comment_params)

    render json: @comment
  end

  def show
    @comment = Comment.find(params[:id])

    render json: @comment
  end

  def update
    @comment = current_user.comments.find(params[:id])
    @comment.update(comment_params)

    render json: @comment
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy!

    redirect_to '/posts'
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :content)
  end
end
