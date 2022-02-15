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
import ProgrammingSkills from './ProgrammingSkills';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import Projects from './Projects'
import { typography } from '@mui/system';


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
        <Box>
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
    <Container id="about" disableGutters maxWidth={false}>
    <Box sx={{ width: '100%',
    height:'100vh',
    padding:'0px'}}>
      <typography> Resume</typography>
      <Box sx={{ padding:'0px', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
          <Tab sx={{p:'0px', width:'10px'}}icon={<HistoryIcon/>}  {...a11yProps(0)} />
          <Tab sx={{p:'0px'}} icon={<LaptopMacIcon />} {...a11yProps(1)} />
          <Tab sx={{p:'0px'}} icon={<AiOutlineFundProjectionScreen  size={25}/>}  {...a11yProps(2)} />
          <Tab sx={{p:'0px'}} icon={<SchoolIcon/>}  {...a11yProps(3)} />
          <Tab sx={{p:'0px'}} icon={<InterestsIcon/>} {...a11yProps(4)} />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel sx={{padding:'0px'}} value={value} index={0} dir={theme.direction}>
          <WorkTimeLine />
        </TabPanel>
        <TabPanel sx={{padding:'0px'}} value={value} index={1} dir={theme.direction}>
        <ProgrammingSkills />
        </TabPanel>
        <TabPanel  sx={{padding:'0px'}} value={value} index={2} dir={theme.direction}>
        <Projects />
        </TabPanel>
        <TabPanel  sx={{padding:'0px'}} value={value} index={3} dir={theme.direction}>
          
          <Education />
        </TabPanel>
        <TabPanel  sx={{padding:'0px'}} value={value} index={4} dir={theme.direction}>
          
        </TabPanel>
      </SwipeableViews>
    </Box>
    </Container>
  );
}