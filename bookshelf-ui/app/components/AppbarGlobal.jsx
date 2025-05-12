// Importa los componentes e íconos necesarios desde Material-UI y Next.js
import { AutoStories } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { navItems } from '../constants/AppBarGlobal'; // Importa los elementos de navegación desde constantes
import { Box } from '@mui/material';
import Link from 'next/link'; // Importa Link para la navegación

// Definición del componente AppbarGlobal
const AppbarGlobal = () => {
  return (
    // Componente AppBar para crear una barra de navegación superior
    <AppBar position='static' sx={{ mb: 2 }}>
      <Toolbar>
        {/* Ícono AutoStories que se muestra en todos los tamaños de pantalla */}
        <AutoStories sx={{ display: { xs: 'flex' }, mr: 1 }} />

        {/* Componente Typography para el título de la aplicación, visible solo en pantallas medianas y grandes */}
        <Typography
          variant='h6'
          noWrap
          component={Link} // Usa Link de Next.js para la navegación
          href='/'
          sx={{
            display: { xs: 'none', md: 'flex' }, // Oculto en pantallas pequeñas
            fontFamily: 'monospace', // Usa fuente monoespaciada
            textDecoration: 'none', // Sin subrayado
            color: 'inherit', // Hereda el color del texto
            fontWeight: '700', // Texto en negrita
            letterSpacing: '0.2rem', // Espaciado entre letras
          }}
        >
          Bookshelft
        </Typography>

        {/* Componente Box para agrupar los botones de navegación, alineados a la derecha */}
        <Box sx={{ ml: 'auto', display: { xs: 'block' } }}>
          {/* Itera sobre navItems para crear un botón por cada enlace de navegación */}
          {navItems.map((item) => (
            <Button
              key={item.label} // Clave única para cada botón
              component={Link} // Usa Link de Next.js para la navegación
              href={item.path} // Ruta para la navegación
              color='inherit' // Hereda el color del texto
            >
              {item.label} {/* Muestra la etiqueta del elemento de navegación */}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Exporta el componente AppbarGlobal como exportación predeterminada
export default AppbarGlobal;
