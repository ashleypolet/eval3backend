from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ZonaViewSet, GuiaViewSet, TourViewSet

router = DefaultRouter()
router.register(r'zonas', ZonaViewSet)
router.register(r'guias', GuiaViewSet)
router.register(r'tours', TourViewSet)

urlpatterns = [
    path('', include(router.urls)),
]