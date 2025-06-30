from rest_framework import serializers
from .models import Zonaturistica, Guia, Tour

class ZonaturisticaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zonaturistica
        fields = '__all__'

class GuiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guia
        fields = '__all__'

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'