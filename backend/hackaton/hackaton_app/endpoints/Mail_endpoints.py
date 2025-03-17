from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from ..models.Mail import Mail
from ..serializers.Mail_serializer import MailSerializer


class MailListView(APIView):
    def get(self, request):
        mails = Mail.objects.all()
        serializer = MailSerializer(mails, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MailCreateView(APIView):
    def post(self, request):
        serializer = MailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MailGetByIDView(APIView):
    def get(self, request, id):
        mail = get_object_or_404(Mail, id=id)
        serializer = MailSerializer(mail)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MailDeleteView(APIView):
    def delete(self, request, id):
        mail = get_object_or_404(Mail, id=id)
        mail.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class MailQuarantineView(APIView):
    def get(self, request):
        mails = Mail.objects.filter(is_quarantined=True)
        serializer = MailSerializer(mails, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MailAddToQuarantineView(APIView):
    def patch(self, request, id):
        mail = get_object_or_404(Mail, id=id)
        mail.is_quarantined = True
        mail.save()
        return Response(status=status.HTTP_200_OK)


class MailRemoveFromQuarantineView(APIView):
    def patch(self, request, id):
        mail = get_object_or_404(Mail, id=id)
        mail.is_quarantined = False
        mail.save()
        return Response(status=status.HTTP_200_OK)
