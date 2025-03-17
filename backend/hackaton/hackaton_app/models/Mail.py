from django.db import models


class Mail(models.Model):
    content = models.TextField(max_length=100)
    sender = models.CharField(max_length=100)
    receiver = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    is_quarantined = models.BooleanField(default=False)

    def __str__(self):
        return self.title
