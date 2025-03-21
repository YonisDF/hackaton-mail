# Generated by Django 5.1.3 on 2025-03-17 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hackaton_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mail_address',
            name='is_allowed',
        ),
        migrations.AddField(
            model_name='mail_address',
            name='is_quarantined',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='mail_address',
            name='is_whitelisted',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='mail',
            name='receiver',
            field=models.CharField(max_length=100),
        ),
    ]
