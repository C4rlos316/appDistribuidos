import { Grid2, Icon, Typography } from '@mui/material';
const AboutCards = ({ icon: Icon, title, label }) => {
  return (
    <Grid2 size={{ xs: 12, md: 6, sm: 4 }} sx={{ textAlign: 'center' }}>
      <Icon sx={{ fontSize: '40', color: 'text.light', mb: 1 }} />

      <Typography variant='h4' align='center'>
        {title}
      </Typography>

      <Typography variant='subtitle1' align='center' sx={{ color: 'text.light' }}>
        {label}
      </Typography>
    </Grid2>
  );
};

export default AboutCards;
