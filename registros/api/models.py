from django.db import models

# Create your models here.
class Zonaturistica(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Guia(models.Model):
    nombre = models.CharField(max_length=100)
    idioma = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre
    
class Tour(models.Model):
    titulo = models.CharField(max_length=100)
    fecha = models.DateField()
    zona = models.ForeignKey(Zonaturistica, on_delete=models.CASCADE, related_name='tours')
    guia = models.ForeignKey(Guia, on_delete=models.CASCADE, related_name='tours')

    def __str__(self):
        return self.titulo
