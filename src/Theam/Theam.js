const { createTheme } = require("@mui/material");

export const darkTheam = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#FFD717',
        },
        secondary: {
          main: '#FFD717',
        },
        background: {
          default: 'linear-gradient(to bottom, #001F3F, #0C0C0C)', // Gradient from dark blue to light blue
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#FFFFFF',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              background: 'linear-gradient(to bottom, #030750, #212121)', // Gradient from dark blue to light blue
              minHeight: '100vh',
              margin: 0,
              padding: 0,
            },
          },
        },
      },
})

