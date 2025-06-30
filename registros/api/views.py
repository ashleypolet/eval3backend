from rest_framework import viewsets
from .models import Zonaturistica, Guia, Tour
from .serializers import ZonaturisticaSerializer, GuiaSerializer, TourSerializer

class ZonaViewSet(viewsets.ModelViewSet):
    queryset = Zonaturistica.objects.all()
    serializer_class = ZonaturisticaSerializer

class GuiaViewSet(viewsets.ModelViewSet):
    queryset = Guia.objects.all()
    serializer_class = GuiaSerializer

class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer