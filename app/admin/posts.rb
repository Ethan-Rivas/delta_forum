ActiveAdmin.register Post do
  permit_params :user_id, :title, :content

  index do
    selectable_column
    id_column
    column "User" do |m|
      usr = User.find(m.user_id)
    end
    column :title
    column :content
    actions
  end

  filter :user_id

  form do |f|
    f.inputs "Post Details" do
      f.input :user_id, as: :select, collection: User.all.map { |u| [u.email]  }, include_blank: false
      f.input :title
      f.input :content
    end
    f.actions
  end

end
