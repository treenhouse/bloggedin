from django.urls import path
from . import views
from .views import PostListView

urlpatterns = [
    path('', views.home, name='blog-home'),
    path('post/<int:pk>/', views.post_detail, name='post-detail'),
    path('api/posts/', PostListView.as_view(), name='post-list'),
]