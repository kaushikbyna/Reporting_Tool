import React from 'react'
import{Link} from "react-router-dom"
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BugReportIcon from '@material-ui/icons/BugReport';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import WarningIcon from '@material-ui/icons/Warning';
import Details_Main from "./Details_Main"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Calender from './Calender';
import Tasks from "./Tasks"
import Defects from "./Defects"
import Incidents from "./Incidents"
import {Route,Switch} from "react-router-dom";
import Timesheeets from "./Timesheeets"
import "../style/details.css"
import Details_Edit from './Details_Edit';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
          >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      display:'flex',
      justifyContent:'space-evenly',
    },
  }));
  

function Details() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className="details">
                <div className="details_top">
                <div className="top_first">
                    <HomeSharpIcon  style={{color:'#009092',fontWeight: '500',fontSize:'2rem'}} />
                    <h3>
                        <span > 
                            <Link 
                              style={{textDecoration:'none', 
                              color:'#009092'}}
                              to={{pathname:`/`}}>
                                  Projects 
                            </Link>
                        </span>  Details</h3>
                </div>
                <div className="top_second">
                    <div className={classes.root}>
                        <AppBar
                            position="static" color="#525457" 
                            backgroundColor='#f5f7fa'
                            >
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="scrollable force tabs example"
                            >
                            <Tab label="Details" icon={<InfoOutlinedIcon />} {...a11yProps(0)} />
                            <Tab label="Calender" icon={<CalendarTodayIcon />} {...a11yProps(1)} />
                            <Tab label="Tasks" icon={<AssignmentIcon />} {...a11yProps(2)} />
                            <Tab label="Defects" icon={<BugReportIcon />} {...a11yProps(3)} />
                            <Tab label="Incidents" icon={<WarningIcon />} {...a11yProps(4)} />
                            <Tab label="Timesheets" icon={<WatchLaterOutlinedIcon />} {...a11yProps(5)} />
                            </Tabs>
                        </AppBar>
                    </div>
                </div>
            </div>
            <div className="details_bottom">
            <TabPanel value={value} index={0}>
                <Details_Main />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Calender/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Tasks/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Defects/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Incidents/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Timesheeets/>
            </TabPanel>
            </div>
        </div>
    )
}

export default Details;
