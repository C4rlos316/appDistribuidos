import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/GlobalTheme";

//import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import AppbarGlobal from "./components/AppbarGlobal";


export const metadata = {
  title: "Create Next App",
  description: "Book Management App",
};

//importar el tema aqui 
//CssBaseline es un componente que proporciona estilos básicos para una aplicación y guarde los estilos
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppbarGlobal />
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
