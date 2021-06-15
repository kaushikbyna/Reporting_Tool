import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import task from "../Images/task-assign.png"
import man1 from "../Images/man1.png"
import man2 from "../Images/man2.png"
import man3 from "../Images/man3.jpg"
import woman1 from "../Images/woman1.png"
import woman2 from "../Images/woman2.png"
import Date_info from './Date_info';
import Tab from "./Tab";
import Details_Edit from "./Details_Edit" 
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ListIcon from '@material-ui/icons/List';
import CancelIcon from '@material-ui/icons/Cancel';
import Date_Picker from './Date_Picker';
import {Link } from 'react-router-dom';
import "../style/details_main.css"
import Edit_Text from './Edit_Text';
import * as actions from "../redux/actions/actions";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
      display:'flex',
      flexDirection:'column',
    backgroundColor: "#F5F5F5",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border:'none',
    borderRadius:'5px '
  }
}));

const currencies = [
    {
      value: 'open',
      label: 'Open',
    },
    {
      value: 'In Progress',
      label: 'In Progress',
    },
    {
      value: 'Completed',
      label: 'Completed',
    },
    {
      value: 'On Hold',
      label: 'On Hold',
    },
    {
      value: 'Cancel',
      label: 'Cancel',
    },
  ];

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 15,
      width:'10rem',
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:'#d6cbcb',
    },
    bar: {
      backgroundColor: '#8be9eb',
    },
  }))(LinearProgress);
  


  const initialFieldValues = {
    tableId:"",
    projectName:"",
    clientName:"",
    startDate:"",
    endDate:"",
    status:"",
    assignFrom:"",
    assignTo:"",
    demoUrl:"",
    billingType:"",
    hourlyRate:"",
    estimateHours:"",
    progress:"",
    milestone:"",
    milestoneTarget:"",
    projectz:"",
    description:""
};

const Details_Main = (props) =>{

    const [currency, setCurrency] = React.useState('Open');
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();
    const handleChange = (event) => {
        setCurrency(event.target.value); 
      };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
             <div className="bottom_first">
                    <div className="left">
                        <span>#P000119</span>
                        <span>Check </span>
                    </div>
                    <div className="right">
                        <span>
                            <Link to={{
                                pathname:"/details_edit"}}>
                                    <Tooltip title="Edit" arrow>
                                        <IconButton >
                                            <EditIcon className="edit_icon"/>
                                        </IconButton>
                                    </Tooltip>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="bottom_second">
                    <div className="second_left">
                        <div className="left_first">
                            <div className="common version">
                                    <p>Version</p>
                                    <p>1.0</p>
                                </div>
                            <div className="common status">
                                    <p>Status</p>
                                    <p>
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            label=""
                                            value={currency}
                                            onChange={handleChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined">
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </p>
                                </div>
                            <div className="common created">
                                    <p>created by</p>
                                    <div>
                                    <p><img src={task} slt="img" /><span>Vips patel</span></p>                          
                                    </div>
                                </div>
                            <div className="common assigned">
                                <p>assigned To</p>
                                    <div>
                                        <p>
                                            <Tooltip title="Visp Patel" arrow>
                                                <IconButton >
                                                <img src={woman1} slt="img" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Visp Patel" arrow>
                                                <IconButton >
                                                <img src={man2} slt="img" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Visp Patel" arrow>
                                                <IconButton >
                                                <img src={woman1} slt="img" />
                                                </IconButton>
                                            </Tooltip>
                                        </p>
                                    </div>
                            </div>
                            <div className="common progress">
                                <p>Progress</p>
                                <span>
                                    50%
                                    <BorderLinearProgress variant="determinate" value={50} />
                                </span>
                            </div>
                        </div>
                        <div className="left_second">    
                           <Date_info dateTitle="clientName" date="Simone Griffin" />                     
                           <Date_info dateTitle="Start Date" date="27-05-2021" />                     
                           <Date_info dateTitle="end Date" date="30-07-2021" />                     
                           <Date_info dateTitle="Estimate hours" date="900:00" />   
                           <Date_info dateTitle="actual hours" date="00:01" />   
                           <Date_info dateTitle="Demo url" date="" />   
                           <Date_info dateTitle="billing type" date="Fixed Rate" />   
                           <Date_info dateTitle="Budjet" date="0" />   
                           <Date_info dateTitle="created" date="27-05-2021 08:46" />   
                           <Date_info dateTitle="updated" date="27-05-2021 08:46" />                     
                        </div>
                    </div>
                    <div className="second_right">
                        <div className="descritpion">                    
                            <p>Description</p>
                            <p> <Edit_Text value="check" /></p>
                        </div>
                        <div className="custom_field">                    
                            <h3>Custom Fields</h3>
                            <div className="milestone_main">
                                <div className="milestone_first">
                                    <p>milestone</p>
                                    <p>check</p>
                                </div>
                                <div className="milestone_second">
                                    <p>milestone target</p>
                                    <p>11-05-2021</p>
                                </div>
                                <div className="milestone_three">
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="todo">
                            <p>todo</p>
                            <div>
                            <Tooltip title="Create" arrow>
                                <IconButton >
                                    <AddIcon className="create" onClick={handleOpen} />
                                    <Modal
                                        className={classes.modal}
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                        timeout: 500
                                        }}
                                    >
                                        <Fade in={open}>
                                        <div className={classes.paper}>
                                            <div className="todo_model" >
                                                <div className="todo_model_title">
                                                    <div className="title_left">
                                                        <ListIcon />
                                                        <p>TODO</p>
                                                    </div>
                                                    <div className="title_right">
                                                        <CancelIcon onClick={handleClose} />
                                                    </div>
                                                </div>
                                                <div className="todo_model_desc">
                                                  <p>Description</p>
                                                    <textarea placeholder="Enter Description" rows={3}cols={50} ></textarea>
                                                </div>
                                                <div className="todo_model_dueDate">
                                                    <p>due date</p>
                                                    <Date_Picker/>
                                                </div>
                                                <div className="todo_model_buttons">
                                                    <button  onClick={handleClose}>Close</button>
                                                    <button>Create</button>
                                                </div>
                                            </div>
                                        </div>
                                        </Fade>
                                    </Modal>
                                </IconButton>
                            </Tooltip>
                            </div>
                        </div>
                        <div className="bottom_route">
                               <Tab />
                        </div>
                    </div>
                </div>
        </div>
    )
}

const mapStatesToProps = state =>({
    fetchAllList : state.fetchReducer.list,
  }) ;
  
  const  mapActionsToProps = {
      update:actions.update
  };
  
  export default connect (mapStatesToProps,mapActionsToProps)(Details_Main);
  
