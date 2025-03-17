from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from ..models.Domain import Domain
from ..serializers.Domain_serializer import DomainSerializer


class DomainListView(APIView):
    def get(self, request):
        domains = Domain.objects.all()
        serializer = DomainSerializer(domains, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DomainCreateView(APIView):
    def post(self, request):
        if Domain.objects.filter(name=request.data["name"]).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = DomainSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DomainGetByIDView(APIView):
    def get(self, request, id):
        domain = get_object_or_404(Domain, id=id)
        serializer = DomainSerializer(domain)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DomainDeleteView(APIView):
    def delete(self, request, id):
        domain = get_object_or_404(Domain, id=id)
        domain.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DomainBlacklistedView(APIView):
    def get(self, request):
        domains = Domain.objects.filter(is_blacklisted=True)
        serializer = DomainSerializer(domains, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DomainAddToBlacklistView(APIView):
    def patch(self, request):
        received_data = request.data
        domain = get_object_or_404(Domain, name=received_data["name"])
        domain.is_blacklisted = True
        domain.save()
        return Response(status=status.HTTP_200_OK)


class DomainRemoveFromBlacklistView(APIView):
    def patch(self, request):
        received_data = request.data
        domain = get_object_or_404(Domain, name=received_data["name"])
        domain.is_blacklisted = False
        domain.save()
        return Response(status=status.HTTP_200_OK)


class DomainWhitelistedView(APIView):
    def get(self, request):
        domains = Domain.objects.filter(is_whitelisted=True)
        serializer = DomainSerializer(domains, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DomainAddToWhitelistView(APIView):
    def patch(self, request):
        received_data = request.data
        domain = get_object_or_404(Domain, name=received_data["name"])
        domain.is_whitelisted = True
        domain.save()
        return Response(status=status.HTTP_200_OK)


class DomainRemoveFromWhitelistView(APIView):
    def patch(self, request):
        received_data = request.data
        domain = get_object_or_404(Domain, name=received_data["name"])
        domain.is_whitelisted = False
        domain.save()
        return Response(status=status.HTTP_200_OK)
