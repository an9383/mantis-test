import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  useMediaQuery,
  Grid,
  Chip,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';

// third-party
import { PatternFormat } from 'react-number-format';

// project import
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';

// assets
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

// ==============================|| EXPANDING TABLE - USER DETAILS ||============================== //

const ExpandingUserDetail = ({ data }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container spacing={2.5} sx={{ pl: { xs: 0, sm: 5, md: 6, lg: 10, xl: 12 } }}>
      <Grid item xs={12} sm={5} md={4} xl={3.5}>
        <MainCard>
          <Chip
            label={data.status}
            size="small"
            sx={{
              position: 'absolute',
              right: -1,
              top: -1,
              borderRadius: '0 4px 0 4px'
            }}
          />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={2.5} alignItems="center">
                <Avatar alt="Avatar 1" size="xl" src={getImageUrl(`avatar-${data.avatar}.png`, ImagePath.USERS)} />
                <Stack spacing={0.5} alignItems="center">
                  <Typography variant="h5">
                    {data.firstName} {data.lastName}
                  </Typography>
                  <Typography color="secondary">{data.role}</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="space-around" alignItems="center">
                <Stack spacing={0.5} alignItems="center">
                  <Typography variant="h5">{data.age}</Typography>
                  <Typography color="secondary">Age</Typography>
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack spacing={0.5} alignItems="center">
                  <Typography variant="h5">{data.progress}%</Typography>
                  <Typography color="secondary">Progress</Typography>
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack spacing={0.5} alignItems="center">
                  <Typography variant="h5">{data.visits}</Typography>
                  <Typography color="secondary">Visits</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0 } }}>
                <ListItem>
                  <ListItemIcon>
                    <MailOutlined />
                  </ListItemIcon>
                  <ListItemText primary={<Typography color="secondary">Email</Typography>} />
                  <ListItemSecondaryAction>
                    <Typography align="right">{data.email}</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneOutlined />
                  </ListItemIcon>
                  <ListItemText primary={<Typography color="secondary">Phone</Typography>} />
                  <ListItemSecondaryAction>
                    <Typography align="right">
                      <PatternFormat displayType="text" format="+1 (###) ###-####" mask="_" defaultValue={data.contact} />
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EnvironmentOutlined />
                  </ListItemIcon>
                  <ListItemText primary={<Typography color="secondary">Location</Typography>} />
                  <ListItemSecondaryAction>
                    <Typography align="right">{data.country}</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EnvironmentOutlined />
                  </ListItemIcon>
                  <ListItemText primary={<Typography color="secondary">Portfolio</Typography>} />
                  <ListItemSecondaryAction>
                    <Link align="right" href="https://google.com" target="_blank">
                      https://anshan.dh.url
                    </Link>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={7} md={8} xl={8.5}>
        <Stack spacing={2.5}>
          <MainCard title="Personal Details">
            <List sx={{ py: 0 }}>
              <ListItem divider={!matchDownMD}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={0.5}>
                      <Typography color="secondary">Full Name</Typography>
                      <Typography>
                        {data.firstName} {data.lastName}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={0.5}>
                      <Typography color="secondary">Father Name</Typography>
                      <Typography>Mr. {data.fatherName}</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem divider={!matchDownMD}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={0.5}>
                      <Typography color="secondary">Country</Typography>
                      <Typography>{data.country}</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={0.5}>
                      <Typography color="secondary">Zip Code</Typography>
                      <Typography>
                        <PatternFormat displayType="text" format="### ###" mask="_" defaultValue={data.contact} />
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Stack spacing={0.5}>
                  <Typography color="secondary">Address</Typography>
                  <Typography>{data.address}</Typography>
                </Stack>
              </ListItem>
            </List>
          </MainCard>
          <MainCard title="About me">
            <Typography color="secondary">
              Hello, I’m {data.firstName} {data.lastName} {data.role} based in international company, {data.about}
            </Typography>
          </MainCard>
        </Stack>
      </Grid>
    </Grid>
  );
};

ExpandingUserDetail.propTypes = {
  data: PropTypes.any
};

export default ExpandingUserDetail;
