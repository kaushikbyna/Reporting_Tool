import React,{useEffect,useState} from 'react'
import { makeStyles, withStyles ,useTheme} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import OfflineBoltSharpIcon from '@material-ui/icons/OfflineBoltSharp';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DatePicker from './Date_Picker';
import GamesIcon from '@material-ui/icons/Games';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import {Link} from "react-router-dom"
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import useForm from "./useForm"
import * as actions from "../redux/actions/actions"
import {connect} from "react-redux";
import ButterToast,{POS_CENTER,POS_BOTTOM,Cinnamon} from "butter-toast"
import {AssignmentTurnedIn} from "@material-ui/icons"
import 'date-fns';
// import DatePicker from 'react-date-picker';
import TextField from '@material-ui/core/TextField';
import "../style/details_edit.css"
import "../style/project_create.css"
import "../style/Date_picker.css"



const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 150
       },
       noLabel: {
        marginTop: theme.spacing(2),
        border:'1px solid #a6a9ae',
        borderRadius:'5px',
        padding:'0.5rem',
        fontSize:'1rem'
          },
          container: {
            display: 'flex',
            flexWrap: 'wrap',
          },
          textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
          },
}));

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

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'omkar',
  'visp patel'
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const  Project_Create = (props)=> {
   
  const classes = useStyles();
  const theme = useTheme();
  const [status, SetStatus] = React.useState();
  const [assigned, SetAssigned] = React.useState();
  const [billingType ,setBillingType]= React.useState('');
  const [personName, setPersonName] = React.useState([]);
  const [value, onChange] = useState(new Date());
  const [StartDate,setStartDate] =  useState(new Date());
  const [EndDate,setEndDate] = useState(new Date());

  const validate = ()=>{
    let temp = {...errors}
    // temp.id = values.id ? "":"This Field is Required."
    // temp.projectName = values.projectName ? "":"This Field is Required."
    // temp.demoUrl = values.demoUrl ? "":"This Field is Required."
    // setErrors({
    //     ...temp
    // })
    return Object.values(temp).every(x => x=="") 
   }

  var {values,
      setValues,
      errors,
      setErrors,
      handleInputChange } = useForm(initialFieldValues);
    //   useEffect(() => {
    //     if(props.currentId !=0)
    //     console.log("current Id",props.currentId)
    //     setValues({
    //       ...props.fetchAllList.find(x =>x._id == props.currentId)
    //     })
    // }, [props.currentId])

  const handleSubmit = e =>{
    e.preventDefault()
    const submit = ()=> {
      content:<Cinnamon.Crisp title="Post Box"
      content= "Submitted Successfully"
      scheme={Cinnamon.Crisp.SCHEME_PURPLE}
      icon ={<AssignmentTurnedIn />}
      />
    }
    if(validate())
    props.create(values,submit)
    console.log(values)
    }

    const assignTo = (event) => {
      setPersonName(event.target.value);
    };

  const handleChanged =(event)=>{
    SetStatus(event.target.value)
  }
  const handleAssigned =(event)=>{
    SetAssigned(event.target.value)
  }  
  const billing_type =(event)=>{
    setBillingType(event.target.value);
  }

    return (
        <form onSubmit={handleSubmit}>
        <div className="details_edit">
            <div className="edit_top">
                <HomeIcon fontSize="1.2rem" />
                <Link 
                style={{textDecoration:'none',color:'#009092'}}
                to={{pathname:"/"}}>
                <p>Projects</p>
                </Link>
                <p>Create</p>
            </div>
            <div className="edit_middle">
                <div className="edit_middle_left">
                    <p className="left_title">Create Project</p>
                    <div className="middle_title">
                        <OfflineBoltSharpIcon />
                        <p>Project Info</p>
                    </div>
                    <div className="middle_second">
                        <div className="id">
                            <p>Project id</p>
                            <input 
                                type="text" 
                                required="required"
                                placeholder="Enter Project Id"
                                name="tableId"
                                value = {values.tableId}
                                onChange={handleInputChange}
                                {...(values.tableId && {error:true})}
                            />
                            </div>
                        <div className="project_name">
                            <p>Project Name</p>
                            <input type="text" 
                                name="projectName"
                                required="required"
                                placeholder="Enter Project Name" 
                                value ={values.projectName} 
                                onChange={handleInputChange}
                                {...(values.projectName && {error:true})}
                                />
                        </div>
                    </div>
                    <div className="middle_third">
                        <div className="version">
                            <p>Version</p>
                            <input type="text" value="P00119" value="1.0" />
                        </div>
                        <div className="client_name">
                            <p>Client Name</p>
                             <input 
                              type="text"
                              placeholder="Enter Client Name" 
                              required="required"
                              name="clientName"
                              value = {values.clientName}
                              onChange={handleInputChange}
                              {...(values.clientName && {error:true})}
                              />
                        </div>
                    </div>
                    <div className="middle_fourth">
                       <div className="first">
                            <p>status</p>
                            <FormControl className={classes.margin}>
                                <NativeSelect
                                  id="demo-customized-select-native"
                                  name="status"
                                  value={values.status = status}
                                  onChange={handleChanged}
                                  input={<BootstrapInput />}
                                >
                                  <option label="" value={""} />
                                  <option value="onHold">On Hold</option>
                                  <option value="onProgress">On Progress</option>
                                  <option value="cancel">Cancel</option>
                                  <option value="open">Open</option>
                                  <option value="completed">Completed</option>
                                </NativeSelect>
                              </FormControl>
                        </div>
                        <div className="assigned_group">
                          <p>Assigned From</p>
                          <FormControl className={classes.margin}>
                                <NativeSelect
                                  id="demo-customized-select-native"
                                  name="assignGrp"
                                  value={values.assignFrom = assigned}
                                  onChange={handleAssigned}
                                  input={<BootstrapInput />}
                                >
                                  <option label="" value="" />
                                  <option value="visp patel">visp patel</option>
                                  <option value="jounie landa">jounie landa</option>
                                  <option value="omkar">omkar</option>
                                 
                                </NativeSelect>
                              </FormControl>
                        </div>
                    </div>
                    <div className="middle_fifth">
                      <div className="assign_to">
                        <p>Assigned to</p>
                        <input 
                        name="assignFirst"
                        type="text" 
                        required="required"
                        placeholder="First Person Assign" 
                        value={values.assignFirst}
                        onChange={handleInputChange}
                        />                   
                        <input 
                        name="assignSecond"
                        type="text" 
                        required="required"
                        placeholder="Second Person Assign" 
                        value={values.assignSecond}
                        onChange={handleInputChange}
                        />                   
                        <input 
                        name="assignThird"
                        type="text" 
                        required="required"
                        placeholder="Third Person Assign" 
                        value={values.assignThird}
                        onChange={handleInputChange}
                        />                   
                      </div>
                      <div className="demo_url">
                        <p>Demo url</p>
                        <input 
                        name="demoUrl"
                        type="text" 
                        required="required"
                        placeholder="http://examle.com" 
                        value={values.demoUrl}
                        onChange={handleInputChange}
                        // {...(errors.demoUrl && {error:true,helperText:errors.demoUrl})}
                        />
                      </div>
                    </div>
                    <div className="middle_sixth">
                        <div className="projects_dates">
                          <CalendarTodayIcon />
                          <p>Projects Dates</p>
                        </div>
                        <div className="dates">
                            <div className="start_date">
                              <p>Start Date</p>
                              <DatePicker
                                  calendarAriaLabel="Toggle calendar"
                                  clearAriaLabel="Clear value"
                                  monthAriaLabel="Month"
                                  nativeInputAriaLabel="Date"
                                  name="startDate"
                                  onChange={setStartDate}
                                  value={values.startDate = EndDate}
                                  yearAriaLabel="Year"
                                />
                            </div>
                            <div className="end_date">
                            <p>End Date</p>
                               <DatePicker
                                  calendarAriaLabel="Toggle calendar"
                                  clearAriaLabel="Clear value"
                                  monthAriaLabel="Month"
                                  nativeInputAriaLabel="Date"
                                  name="endDate"
                                  onChange={setEndDate}
                                  value={values.endDate = EndDate}
                                  yearAriaLabel="Year"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit_middle_right">
                    <div className="other_info">
                      <GamesIcon/>
                      <p>Other Info</p>
                    </div>
                    <div className="billing_hours">
                      <div className="billing">
                        <p>billing type</p>
                        <FormControl className={classes.margin}>
                        <NativeSelect
                          id="demo-customized-select-native"
                          value={values.billingType = billingType}
                          name="billingType"
                          onChange={billing_type}
                          input={<BootstrapInput />}
                        >
                        <option label="" value="" />
                        <option value="fixedRate">Fixed Rate</option>
                        <option value="hourlyRate">Hourly Rate</option>
                        </NativeSelect>
                      </FormControl>
                      </div>
                      <div className="hours">
                        <p>Hourly rate ($)</p>
                        <input 
                          type="text" 
                          required="required"
                          placeholder="Enter Hourly Rate" 
                          name="hourlyRate"
                          value={values.hourlyRate}
                          onChange={handleInputChange}
                          {...(values.hourlyRate && {error:true})}
                          />
                      </div>
                    </div>
                    <div className="estimate">
                      <div className="estimate_hours">
                        <p>estimate hours</p>
                        <input 
                        type="text" 
                        required="required"
                        placeholder="Enter Hours" 
                        name="estimateHours"
                        value={values.estimateHours}
                        onChange={handleInputChange}
                        {...(values.estimateHours && {error:true})}
                        />
                      </div>
                      <div className="progress">
                        <p>Progress</p>
                        <input
                          type="text" 
                          required="required"
                          placeholder="Enter Progress"
                          name="progress"
                          value={values.progress}
                          onChange={handleInputChange}
                        {...(values.progress && {error:true})}
                        />
                      </div>
                    </div>
                    <div className="project_logo">
                      <p>project logo</p>
                      <p>Drop files here or click to upload</p>
                    </div>
                </div>
            </div>
            <div className="edit_bottom">
              <div className="custom_field">
                <StarBorderIcon/>
                <p>custom fields</p>
              </div>
              <div className="milestone_main">
                <div className="milestone">
                    <div className="mile_first">
                        <p>Milestone</p>
                        <EmojiObjectsOutlinedIcon />
                    </div>
                    <input 
                      type="text"
                     placeholder="Enter Milestone" 
                     name="milestone"
                     value={values.milestone}
                     onChange={handleInputChange}
                     {...(values.milestone && {error:true})}
                     />
                </div>
                <div className="milestone_target">
                  <div className="mile_second">
                    <p>milestone target</p>
                    <EmojiObjectsOutlinedIcon />
                  </div>
                    <DatePicker
                      calendarAriaLabel="Toggle calendar"
                      clearAriaLabel="Clear value"
                      dayAriaLabel="Day"
                      monthAriaLabel="Month"
                      nativeInputAriaLabel="Date"
                      name="milestoneTarget"
                      onChange={onChange}
                      value={values.milestoneTarget = value}
                      yearAriaLabel="Year"
                    />
                </div>
              </div>
              <div className="projectz">
                <div className="projectz_top">
                  <p>projects</p>
                  <EmojiObjectsOutlinedIcon />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter Projects"
                  name="projectz"
                  value={values.projectz}
                  onChange={handleInputChange}
                     {...(values.projectz && {error:true})}
                  />
              </div>
              <div className="description">
                <div className="desc_title">
                  <DescriptionOutlinedIcon />
                  <p>Description</p>
                </div>
                <textarea 
                  type="text" 
                  rows={4} 
                  placeholder="Enter Description"
                  name="description"
                  value={values.description}
                  value={values.description}
                  onChange={handleInputChange}
                     {...(values.description && {error:true})}
                  />
              </div>
              <div className="custom_buttons">
                <button>Cancel</button>
                <button>Create</button>
              </div>
            </div>
        </div>
        </form>
    )
}

const mapStatesToProps = state =>({
  fetchAllList : state.fetchReducer.list,
}) ;

const  mapActionsToProps = {
    create:actions.create
};

export default connect (mapStatesToProps,mapActionsToProps)(Project_Create);
