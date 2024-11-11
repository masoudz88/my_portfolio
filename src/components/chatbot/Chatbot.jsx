import { Button } from "@mui/material";
import { Chat } from '@material-ui/icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          fontSize: '0.9rem',
          borderRadius: '20px',
          padding: '10px 20px',
          boxShadow: '0 3px 5px 2px rgba(5, 170, 165, .3)',
          backgroundColor: 'rgba(5, 170, 165, 1)',
          color: 'white',
        }
      }
    }
  }
});

const Chatbot = ({setIsOpen}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={`fixed bottom-4 right-4`}>
                <Button color="secondary" startIcon={<Chat />} onClick={() => setIsOpen(true)}>
                    <span className="text-white">Chat with me</span>
                </Button>
            </div>
        </ThemeProvider>
    )
}

export default Chatbot;