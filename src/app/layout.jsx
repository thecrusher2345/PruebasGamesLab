import './globals.css';
import '@fontsource/audiowide';
export const metadata = {
  title: 'GamesLab',
  description: 'Laboratorio de juegos y realidad virtual',
};

export default function RootLayout({ children }) {
  return (

      <html lang="es">
        <body className="bg-background  ">{children}</body>
      </html>

  );
}