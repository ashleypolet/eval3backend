# Evaluación Sumativa – Registro de Actividades Turísticas y Guías
El sistema de Registro de Actividades Turísticas y Guías es una aplicación web diseñada para gestionar de forma centralizada la información relacionada con zonas turísticas, guías y tours.
Permite a los administradores registrar, visualizar, editar y eliminar datos sobre lugares turísticos, los guías que trabajan en cada recorrido y los tours programados. Está orientado a facilitar la organización de actividades turísticas en una comunidad o región, ofreciendo una interfaz moderna y responsiva desarrollada con Django REST (backend) y React (frontend).
## Tecnologías utilizadas
Backend – Django
- Django 4+
- Django REST Framework
- Python 3.11
Modelos en backend:
- `ZonaTuristica`
- `Guia`
- `Tour`
Preparado para escalar con:
- `Comentario`
- `Reserva`
- `Usuario
---
Frontend – React
- React con `create-react-app`
- Axios para llamadas a la API
- React Router DOM para navegación
- Bootstrap 5 para estilos visuales

# Las funcionalidades que tiene
CRUD completo para:
- Zonas Turísticas  
- Guías  
- Tours

Cada entidad cuenta con:
- Página para listar
- Formulario para crear
- Formulario para editar
- Botón para eliminar

Todos los formularios están validados visualmente y estilizados con Bootstrap.

# Diagrama de los modelos y sus relaciones
  ZonaTuristica             Guia
   -------------           ------------
   id (PK)                id (PK)
   nombre                 nombre
   descripcion            idioma
        ▲                     ▲
        │                     │
        │                     │
        └────────────┬────────┘
                     │
                  ▼ Tour
             --------------------
             id (PK)
             titulo
             fecha
             zona_id (FK → ZonaTuristica)
             guia_id (FK → Guia)

- Un Tour pertenece a una Zona Turística
(ForeignKey zona → muchos tours pueden estar en una misma zona)
- Un Tour es guiado por un Guía
(ForeignKey guia → muchos tours pueden estar a cargo de un mismo guía)

Es una relación muchos-a-uno tanto desde Tour → Zona, como Tour → Guía.
