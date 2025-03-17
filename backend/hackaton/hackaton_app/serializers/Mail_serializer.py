from rest_framework import serializers
from ..models.Mail import Mail


class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mail
        fields = "__all__"
        read_only_fields = ["date"]

    def create(self, validated_data):
        mail = Mail(
            content=validated_data["content"],
            sender=validated_data["sender"],
            receiver=validated_data["receiver"],
            title=validated_data["title"],
            is_quarantined=validated_data["is_quarantined"],
        )
        mail.save()
        return mail

    def update(self, instance: Mail, validated_data):
        instance.content = validated_data.get("content", instance.content)
        instance.sender = validated_data.get("sender", instance.sender)
        instance.receiver = validated_data.get("receiver", instance.receiver)
        instance.title = validated_data.get("title", instance.title)
        instance.is_quarantined = validated_data.get(
            "is_quarantined", instance.is_quarantined
        )

        instance.save()
        return instance
