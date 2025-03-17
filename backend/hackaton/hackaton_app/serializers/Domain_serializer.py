from rest_framework import serializers
from ..models.Domain import Domain


class DomainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domain
        fields = "__all__"

    def create(self, validated_data):
        domain = Domain(
            name=validated_data["name"],
        )
        domain.save()
        return domain

    def update(self, instance: Domain, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.is_whitelisted = validated_data.get(
            "is_whitelisted", instance.is_whitelisted
        )
        instance.is_blacklisted = validated_data.get(
            "is_blacklisted", instance.is_blacklisted
        )

        instance.save()
        return instance
