from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    categories = models.ManyToManyField(Category)
    quote = models.CharField(max_length=255, blank=True)  # Optional quote field

    def excerpt(self):
        return self.content[:100]  # Customize the length of the excerpt as needed

    def __str__(self):
        return self.title
