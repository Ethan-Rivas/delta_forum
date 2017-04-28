class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, :methods => :posts
  end

  def create
    @user = User.new(user_params)
    @user.save

    render json: @user
  end

  def update
    @user = User.find(params[:id])

    render json: @user
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
