import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import BallotIcon from '@material-ui/icons/Ballot';
import NfcIcon from '@material-ui/icons/Nfc';
import SwapVertIcon from '@material-ui/icons/SwapVert';
// import Common_Content_Row from './Table_Content_Row';
import "../style/common_file.css"
import "../style/table_content.css"


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

function Common_file(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    
  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <div className="task">
            <div className="task_top">
                <div className="top_left">
                    <p>{props.title}</p>
                </div>
                <div className={`top_right ${props.isTimesheet && 'top_right_display'}`}>
                    <AddIcon className="add_icon" />
                </div>
            </div>
            <div className="task_bottom">
                <div className="bottom_first">
                    <div className="bottom_left">
                        <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">show</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={25}>25</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                                <MenuItem value={100}>100</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                    </div>
                    <div className="bottom_right">
                        <div>
                            <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Search..."  />
                            </form>
                        </div> 
                        <div>
                        <InsertDriveFileIcon className="file" />
                        <BallotIcon className="file"/>
                        <NfcIcon className="file"/>
                        </div>
                    </div>
                </div>
                <div className="bottom_second">
                <div className="table_content">
                  <table>
                    <tr>
                      <th> <div>{props.firstCol}</div></th>
                      <th>
                        <div>
                        <span><SwapVertIcon /></span>
                        <span>{props.secondCol}</span> 
                        </div>
                      </th>
                      <th>
                      <div>
                        <span><SwapVertIcon /></span>
                        <span>{props.thirdCol}</span>
                        </div>
                      </th>
                      <th>
                      <div>
                        <span><SwapVertIcon /></span>
                        <span>{props.fourthCol}</span> 
                        </div>
                      </th>
                      <th>
                      <div>
                        <span><SwapVertIcon /></span>
                        <span>{props.fiftCol}</span>
                        </div>
                      </th>
                      <th>
                      <div>
                        <span><SwapVertIcon /></span>
                        <span>{props.sixithCol}</span>
                        </div>
                      </th>
                      <th>
                      <div>
                        <span><SwapVertIcon /></span> 
                        <span>{props.seventhCol} </span>
                        </div>
                      </th>
                    </tr> 
                    <tr>
                      <td></td>
                      <td>No </td>
                      <td>Info</td>
                      <td>Available</td>
                      <td>On </td>
                      <td>Table</td>
                      <td></td>
                  </tr>
                  </table>
                  <div className="table_bottom_info">
                    <div className="table_left">
                      <p>Showing 1 to {age} of 30 entries</p>
                    </div>
                    <div className="table_right">
                      <button>First</button>
                      <button>previous</button>
                      <button>1</button>
                      <button>Next</button>
                      <button>Last</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Common_file;
