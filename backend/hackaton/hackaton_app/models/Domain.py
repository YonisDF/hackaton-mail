from django.db import models


class Domain(models.Model):
    name = models.CharField(max_length=100)
    is_whitelisted = models.BooleanField(default=False)
    is_blacklisted = models.BooleanField(default=False)

    def __str__(self):
        return self.name
