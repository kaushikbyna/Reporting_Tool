import React,{useState,useEffect} from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import PublishIcon from '@material-ui/icons/Publish';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {createMuiTheme,MuiThemeProvider  } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import BallotIcon from '@material-ui/icons/Ballot';
import NfcIcon from '@material-ui/icons/Nfc';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import LinearProgress from '@material-ui/core/LinearProgress';
import logo from "../Images/logo.png"
import task from "../Images/task-assign.png"
import man1 from "../Images/man1.png"
import man2 from "../Images/man2.png"
import man3 from "../Images/man3.jpg"
import woman1 from "../Images/woman1.png"
import woman2 from "../Images/woman2.png"
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {Link} from "react-router-dom"
import Edit_Text from './Edit_Text';
import ButterToast,{POS_CENTER,POS_BOTTOM,Cinnamon} from "butter-toast"
import {DeleteSweep} from "@material-ui/icons"
import * as actions from "../redux/actions/actions";
import {connect} from "react-redux";

import "../style/table_content.css"
import "../style/project_main.css"
import "../style/badge.css"
import "../style/project_table.css"
import "../style/table_content_row.css"


  const theme = createMuiTheme({
    overrides: {
      MuiTooltip: {
        tooltip: {
          fontSize: "1rem",
          color:'white'
        }
      }
    }
  });
  
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
  }));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
  
  const StyledMenu = withStyles({
    paper: {
      // border: '1px solid #d3d4d5',
      borderRadius:'10px',
      backgroundColor:'white',
      color:'white !important',
      width:'3.5rem',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
          borderRadius:'10px',
        },
      },
    },
  }))(MenuItem);
  
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

function Project_main(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    
    const [currency, setCurrency] = React.useState('Open');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentId ,setCurrentId] = useState(0);
    
    useEffect(()=>{
        props.fetchAllActions()
    },[]);
    
    
    const onDelete = id =>{
        const submit = ()=>{
            ButterToast.raise({
                content:<Cinnamon.Crisp title="Post Box"
                content= "Deleted Successfully"
                scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                icon ={<DeleteSweep />}
                />
            })
        }
        if(window.confirm('are you sure to delete this record'))
        props.deleteAction(id,submit)
    };
    
    
      const change = (event) => {
        setAge(event.target.value);
      };
        const handleChange = (event) => {
            setCurrency(event.target.value);
        };

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget)
            };

        const handleClose = () => {
        setAnchorEl(null);
        };

    return (
        <div className="projects_main_div">
            <div className="project_first_title">
                <HomeSharpIcon  style={{color:'#009092',fontWeight: '500',fontSize:'2rem'}} />
                <h3 className="project_heading">Projects</h3>
            </div>
            <div className="projects">
                <div className="projects_top">
                    <div className="project_left">
                        <h2>Projects</h2>
                    </div>
                    <div className="project_right">
                        <div>
                            <MuiThemeProvider theme={theme}>
                                <Tooltip title="Sample Project CSV" arrow 
                                placement="top" 
                                 style={{backgroundColor: "transparent" }} data-md-tooltip="Tooltip">
                                    <IconButton >
                                        <FileCopyOutlinedIcon  className="file" />
                                    </IconButton>
                                </Tooltip>
                            </MuiThemeProvider>
                        </div>
                        <div>
                            <MuiThemeProvider theme={theme}>
                                <Tooltip title="Import" arrow placement="top"  
                                style={{backgroundColor: "transparent"}} 
                                data-md-tooltip="Tooltip">
                                    <IconButton >
                                        <PublishIcon className="file"/>
                                    </IconButton>
                                </Tooltip>
                            </MuiThemeProvider>
                        </div>
                        <div>
                            <Link to={{
                                pathname:"/create"
                            }}>
                                <MuiThemeProvider theme={theme}>
                                    <Tooltip title="Create" arrow placement="top"  
                                        style={{backgroundColor: "transparent"}} 
                                        data-md-tooltip="Tooltip">
                                        <IconButton >
                                        <AddOutlinedIcon className="file" />
                                        </IconButton>
                                    </Tooltip>
                                </MuiThemeProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project_middle">
                    <div className="badge">
                        <div className="isBlue">
                            <button className="blue_button">
                                <h4>Open</h4>
                                <p>13</p>
                            </button>
                        </div>
                        <div className="isYellow">
                            <button className="yellow_button">
                                <h4>In Progress</h4>
                                <p>7</p>
                            </button>
                        </div>
                        <div className="isGray">
                            <button className="gray_button">
                                <h4>On Hold</h4>
                                <p>2</p>
                            </button>
                        </div>
                        <div className="isPink">
                            <button className="pink_button">
                                <h4>Cancel</h4>
                                <p>3</p>
                            </button>
                        </div>
                        <div className="isGreen">
                            <button className="green_button">
                                <h4>Completed</h4>
                                <p>6</p>
                            </button>
                        </div>
                        <div className="isRed">
                            <button className="red_button">
                                <h4>Overdue</h4>
                                <p>15</p>
                            </button>
                        </div>
                    </div>
                </div>                
                <div className="project_bottom">
                <div className="table">
                    <div className="table_top">
                        <div className="table_top_left">
                            <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">show</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={change}>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={25}>25</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>
                                    <MenuItem value={100}>100</MenuItem>
                                </Select>
                            </FormControl>
                            </div>
                        </div>
                        <div className="table_top_right">
                            <div>
                                <form className={classes.root} noValidate autoComplete="off">
                                <TextField 
                                id="standard-basic" 
                                label="Search..." 
                                />
                                </form>
                            </div> 
                            <div>
                            <InsertDriveFileIcon className="file" />
                            <BallotIcon className="file"/>
                            <NfcIcon className="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="table_bottom">
                    <div className="table_content">
                        <table>
                            <tr>
                                <th><div>Logo</div></th>
                                <th> <div>ID</div></th>
                                <th>
                                <div>
                                <span><SwapVertIcon /></span>
                                <span> Product Name</span> 
                                </div>
                                </th>
                                <th>
                                <div>
                                <span><SwapVertIcon /></span>
                                <span>Duration</span>
                                </div>
                                </th>
                                <th>
                                <div>
                                <span><SwapVertIcon /></span>
                                <span>Progress </span> 
                                </div>
                                </th>
                                <th>
                                <div>
                                <span><SwapVertIcon /></span>
                                <span>Creater </span>
                                </div>
                                </th>
                                <th>
                                <div>
                                <span><SwapVertIcon /></span>
                                <span>Assignied To </span>
                                </div>
                                </th>
                                <th>
                                <div>
                                <span><SwapVertIcon /></span> 
                                <span>Status </span>
                                </div>
                                </th>
                                <th>
                                <div>
                                <span><SwapVertIcon /></span> 
                                <span>Actions </span>
                                </div>
                                </th>
                            </tr>
                            {props.fetchAllList.map((record,index)=>(
                                <tr key={index}>
                                <td><img src={logo} /></td>
                                <td>
                                <Tooltip title="view" arrow>
                                    <IconButton >
                                    <Link to={{
                                        pathname:`/details`,
                                        search:`/${record.tableId}`
                                    }}>
                                        <p>{record.tableId}</p>
                                    </Link>
                                    </IconButton>
                                </Tooltip>
                                </td>
                                <td><div>
                                <span> 
                                    <Edit_Text value={record.projectName} />
                                    </span>
                                </div>
                                </td>
                                <td> 
                                <div>
                                    <p>start:<span>{record.startDate} </span></p>
                                    <p>End: <span>{record.endDate}</span></p>
                                </div>
                                </td>
                                <td>
                                <div>
                                <p>Progress <span> {record.progress}% </span></p>
                                <span>
                                    <BorderLinearProgress
                                    variant="determinate" 
                                    value={record.progress} 
                                    />
                                </span>
                                </div>
                                </td>
                                <td>
                                <Tooltip title={record.assignFrom} arrow>
                                <IconButton >
                                    <img 
                                    className={`img_none ${record.assignFrom == "omkar" && "img_view"}`}
                                    src={man1} />  
                                    <img 
                                    className={`img_none ${record.assignFrom == "visp patel" && "img_view"}`} 
                                    src={task} />
                                    <img 
                                    className={`img_none ${record.assignFrom == "jounie landa" && "img_view"}`} 
                                    src={woman2} />
                                </IconButton>
                                </Tooltip>
                                </td>
                                <td>
                                <div>
                                <span className={`img_view ${record.assignFirst === "" && "img_none"}`}>
                                    <Tooltip title={record.assignFirst} arrow>
                                    <IconButton >
                                    <img 
                                    className={`img_none ${record.assignFirst === "omkar" && "img_view"}`}
                                    src={man1} />
                                    <img 
                                    className={`img_none ${record.assignFirst === "visp patel" && "img_view"}`}
                                    src={task} />
                                    <img 
                                    className={`img_none ${record.assignFirst === "haner" && "img_view"}`}
                                    src={woman1} />
                                    <img 
                                    className={`img_none ${record.assignFirst === "junie landa" && "img_view"}`}
                                    src={man2} />
                                    </IconButton>
                                    </Tooltip>
                                </span>
                                <span 
                                    className={`img_view ${record.assignSecond === "" && "img_none"}`}
                                >
                                    <Tooltip title={record.assignSecond} arrow>
                                    <IconButton >
                                    <img 
                                    className={`img_none ${record.assignSecond === "omkar" && "img_view"}`}
                                    src={man1} />
                                    <img 
                                    className={`img_none ${record.assignSecond === "visp patel" && "img_view"}`}
                                    src={task} />
                                    <img 
                                    className={`img_none ${record.assignSecond === "haner" && "img_view"}`}
                                    src={woman1} />
                                    <img 
                                    className={`img_none ${record.assignSecond === "junie landa" && "img_view"}`}
                                    src={man2} />
                                    </IconButton>
                                    </Tooltip>
                                </span>
                                <span 
                                    className={`img_view ${record.assignThird === "" && "img_none"}`}
                                >
                                    <Tooltip title={record.assignThird} arrow>
                                    <IconButton >
                                    <img 
                                    className={`img_none ${record.assignThird === "omkar" && "img_view"}`}
                                    src={man1} />
                                    <img 
                                    className={`img_none ${record.assignThird === "visp patel" && "img_view"}`}
                                    src={task} />
                                    <img 
                                    className={`img_none ${record.assignThird === "haner" && "img_view"}`}
                                    src={woman1} />
                                    <img 
                                    className={`img_none ${record.assignThird === "junie landa" && "img_view"}`}
                                    src={man2} />
                                    </IconButton>
                                    </Tooltip>
                                </span>
                                </div>
                                </td>
                                <td>
                                <div>
                                    <span>
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
                                            <option key={record.status} value={option.value}>
                                            {record.status}
                                            </option>
                                        ))}
                                        </TextField>
                                        </span>
                                        <Tooltip 
                                        className={`watch_icon ${record.overdue && "watch_icon_saw"}`} 
                                        title={record.overdue} arrow>
                                        <IconButton>
                                        <span>
                                        <AvTimerIcon style={{color:'red'}}/></span>
                                        </IconButton>
                                        </Tooltip>
                                    </div>
                                </td>
                                <td>
                                <div>
                                    <Button
                                    style={{borderRadius:'50%',background:'transparent',boxShadow:'none'}}
                                    aria-controls="customized-menu"
                                    aria-haspopup="true"
                                    variant="contained"
                                    onClick={handleClick}
                                    >
                                    <MoreVertSharpIcon style={{borderRadius:'100%'}} />
                                </Button>
                                <StyledMenu
                                    id="customized-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <StyledMenuItem >
                                    <ListItemIcon>
                                    <MuiThemeProvider theme={theme}>
                                    <Link to={{pathname:"/details_edit"}}>
                                        <Tooltip title="edit" arrow placement="top"  
                                        style={{backgroundColor: "transparent" }} 
                                        data-md-tooltip="Tooltip">
                                            <EditOutlinedIcon onClick={() =>{setCurrentId(record._id)
                                            console.log(record._id)}} />
                                        </Tooltip>
                                    </Link>
                                    </MuiThemeProvider>
                                    </ListItemIcon>
                                    </StyledMenuItem>
                                    <StyledMenuItem >
                                    <ListItemIcon>
                                    <MuiThemeProvider theme={theme}>
                                        <Tooltip title="Delete" arrow placement="top"  
                                        style={{backgroundColor: "transparent" }} 
                                        data-md-tooltip="Tooltip">
                                    <DeleteOutlinedIcon onClick={()=>onDelete(record._id)} />
                                    </Tooltip>
                                    </MuiThemeProvider>
                                    </ListItemIcon>
                                    </StyledMenuItem>
                                    </StyledMenu>
                                </div>
                                </td>
                                </tr>
                            ))}
                        </table>
                        <div className="table_bottom_info">
                            <div className="table_left">
                                <p>Showing 1 to {age} of 30 entries</p>
                            </div>
                            <div className="table_right">
                                <button>First</button>
                                <button>previous</button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>Next</button>
                                <button>Last</button>
                            </div>
                        </div>
                    </div>
                </div>
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
      fetchAllActions : actions.fetchAll,
      deleteAction:actions.Delete
  };
  
  export default connect(mapStatesToProps,mapActionsToProps) (Project_main);
  