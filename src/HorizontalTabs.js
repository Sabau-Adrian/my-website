import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkTimeLine from './WorkTimeLine';
import Education from './Education';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import { Container } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import InterestsIcon from '@mui/icons-material/Interests';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HorizontalTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container disableGutters maxWidth={false}>
    <Box sx={{ width: '100%',
    height:'100vh'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<HistoryIcon/>} label="Work history" {...a11yProps(0)} />
          <Tab icon={<SchoolIcon/>} label="Education" {...a11yProps(1)} />
          <Tab icon={<InterestsIcon/>} label="Interests" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <WorkTimeLine />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Education />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
    </Container>
  );
}
