// Importa componentes de Material-UI para diseño y tipografía
import { Business, Group, Handshake, Lightbulb, Public, Settings } from '@mui/icons-material'; // Íconos de Material-UI
import { Grid2, Typography } from '@mui/material'; // Componentes de Material-UI.
import { border, Box, Container } from '@mui/system'; // Contenedores de Material-UI.

import Image from 'next/image'; // Componente para manejar imágenes en Next.js

import AboutCards from '../components/AboutCards'; // Componente personalizado para las tarjetas de la sección "About"

// Componente principal para la página "About"
export default function About() {
  return (
    // Contenedor principal con un ancho máximo "xl"
    <Container maxWidth='xl'>
      {/* Contenedor de cuadrícula para organizar los elementos con separación entre ellos */}
      <Grid2 container spacing={4} alignContent='center'>
        {/* Elemento de cuadrícula que ocupa 12 columnas en pantallas pequeñas y 6 en pantallas medianas */}
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            padding: { xs: 0, md: '0 0 0 100px' }, // Sin relleno en pantallas pequeñas, relleno izquierdo en medianas
          }}
        >
          {/* Componente Typography para mostrar un encabezado estilizado */}
          <Typography
            variant='h3' // Estilo de encabezado de nivel 3
            gutterBottom // Agrega un margen inferior
            sx={{ fontWeight: 'bold' }} // Texto en negrita
          >
            {/* Texto que representa el título de la sección */}
            Our Story
          </Typography>
          {/* Componente Box para una línea decorativa debajo del texto */}
          <Box
            sx={{
              borderBottom: '4px solid red', // Línea roja en la parte inferior
              width: '50px', // Ancho de la línea
              mb: 2, // Margen inferior
            }}
          />
          {/* Texto descriptivo sobre la historia de la organización */}
          <Typography
            variant='body1'
            sx={{
              color: 'text.light', // Color claro para el texto
              fontSize: '1.1rem', // Tamaño de fuente ligeramente mayor
              mb: 2, // Margen inferior
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quasi autem aperiam voluptatum
            iusto consequuntur modi animi assumenda delectus nisi hic, reprehenderit porro? Unde
            consequatur iure a nemo, error autem voluptatum.
          </Typography>
          {/* Segundo párrafo descriptivo */}
          <Typography variant='body1' sx={{ color: 'text.light', fontSize: '1.1rem', mb: 2 }}>
            Mauris nec nisl at magna vehicula tincidunt. Integer sit amet sapien dapibus, fermentum
            nunc nec, ultricies nunc. Nullam nec nunc nec nunc.I
          </Typography>
        </Grid2>

        {/* Sección de imagen alineada al centro */}
        <Grid2
          size={{ xs: 12, md: 6 }}
          display='flex'
          alignContent='center'
          justifyContent='center'
        >
          <Image
            src={'/500x300.svg'} // Ruta de la imagen
            alt='Picture of the author' // Texto alternativo para accesibilidad
            width={500} // Ancho de la imagen
            height={300} // Altura de la imagen
            priority // Prioriza la carga de esta imagen
            sx={{ boxShadow: '0px 4px 20 px rgba(0,0,0,0.1)' }} // Sombra para la imagen
          />
        </Grid2>
      </Grid2>

      {/* Sección de alcance global */}
      <Box
        sx={{
          mt: 6, // Margen superior
          mb: 8, // Margen inferior
          background: 'linear-gradient(to right, #E3F2FD, #BBDEFB)', // Fondo con degradado
          py: 8, // Padding vertical
        }}
      >
        {/* Encabezado de la sección */}
        <Typography
          variant='h3'
          align='center' // Texto centrado
          gutterBottom
          sx={{ fontWeight: 'bold' }} // Texto en negrita
        >
          Our global reach
        </Typography>
        {/* Texto descriptivo centrado */}
        <Typography
          variant='body1'
          align='center'
          sx={{ color: 'text.light', fontSize: '1.1rem', mb: 2 }}
        >
          Otro texto mas pequeño que se ve aquí para pruebas finales
        </Typography>
        {/* Línea decorativa centrada */}
        <Box
          sx={{
            width: '50px', // Ancho de la línea
            mb: 4, // Margen inferior
            mx: 'auto', // Centrado horizontal
          }}
        />

        {/* Contenedor de tarjetas con información global */}
        <Grid2
          container
          spacing={4}
          justifyContent='center'
          //Esto lo tuve que buscar en internet no estoy seguro de que comando era

          sx={{
            display: 'flex',
            flexDirection: 'row', // Asegura que los elementos estén en fila
            flexWrap: 'nowrap', // Evita que se vayan a una segunda fila
          }}
        >
          {/* Tarjetas con íconos y datos */}
          <AboutCards icon={Settings} title='25k' label='Services' />
          <AboutCards icon={Lightbulb} title='50k' label='Adavance technology' />
          <AboutCards icon={Business} title='40k' label='Innovation' />
          <AboutCards icon={Group} title='25k' label='Trusted by industry' />
          <AboutCards icon={Public} title='100' label='Customer' />
          <AboutCards icon={Handshake} title='150' label='Global presence' />
        </Grid2>
      </Box>
    </Container>
  );
}
