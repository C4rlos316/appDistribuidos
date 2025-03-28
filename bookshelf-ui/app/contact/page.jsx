import {
  Box,
  Container,
  Divider,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { ContactCard } from "../components/ContactCard";
import { cards, socialMedia } from "../constants/ContactCards";
import { FloodSharp } from "@mui/icons-material";


export default function Contact() {
  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">


          {cards.map((card, index) => (
            <ContactCard key={index} icon={card.icon} title={card.title} />
          ))}
        </Grid2>



        <Box sx={{ mt: 8 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
            }}
          >
            <Grid2 container spacing={4}>
              <Grid2 size={{ xs: 12, md: 7 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                    overflow: "hidden",
                    borderRadius: "8px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    border: "2px solid #DDD",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      borderRadius: "8px",
                    }}
                    src="https://www.google.com/maps/embed?...&loading=lazy"
                    allowFullScreen=""
                    tabIndex="0"
                  />
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 5 }}>
                <Typography variant="h6" sx={{ mt: { xs: 1, md: 2 } }}>
                  Contact Information
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Main Address:"
                      secondary="#1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH, Punjab, India"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email Address:"
                      secondary="info@snkcorp.mx"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Phone Number:"
                      secondary="+911234567890, 01610000000"
                    />
                  </ListItem>
                </List>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {socialMedia.map((media, index) => (
                    <IconButton
                      key={index}
                      color="primary"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#E3F2FD",
                          color: media.hoverColor,
                          transform: "scale(1.2)",
                          transition: "transform 0.3s ease-in-out",
                        },
                      }}
                    >
                      <media.icon />
                    </IconButton>
                  ))}
                </Box>
              </Grid2>
            </Grid2>
          </Paper>
        </Box>



      </Box>
    </Container>
  );
}
