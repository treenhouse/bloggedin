from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()  # To show author's username instead of ID
    categories = serializers.StringRelatedField(many=True)  # To show category names

    class Meta:
        model = Post
        fields = ['title', 'author', 'date_posted', 'categories', 'excerpt', 'quote']

    excerpt = serializers.SerializerMethodField()

    def get_excerpt(self, obj):
        return obj.excerpt()
