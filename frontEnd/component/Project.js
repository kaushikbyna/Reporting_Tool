import React from 'react'
import Project_main from './Project_main'
import Details from './Details'
import {Route,Switch} from "react-router-dom"
import Details_Edit from './Details_Edit'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CropFreeIcon from '@material-ui/icons/CropFree';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import "../style/project.css"
import "../style/header.css"
import Project_Create from './Project_Create'

function Project() {
    const handle = useFullScreenHandle();

    return (
            <FullScreen handle={handle}>
            <div className="project">
                <div className="header">
                    <div className="header_main">
                        <div>
                            <Tooltip title="FullScreen" arrow style={{color:'black'}}>
                                <IconButton aria-label="FullScreen">
                                <CropFreeIcon  onClick={handle.enter} />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip title="ToDo" arrow style={{color:'black'}}>
                                <IconButton aria-label="List">
                                <PlaylistAddCheckIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip title="Calender" arrow style={{color:'black'}}>
                                <IconButton aria-label="calender">
                                <CalendarTodayOutlinedIcon/>
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip title="Languages" arrow style={{color:'black'}}>
                                <IconButton aria-label="calender">
                                <img src="https://img.icons8.com/color/48/000000/usa.png"/>
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip title="Slider Layout Options" arrow style={{color:'black'}}>
                                <IconButton aria-label="calender">
                                    <SettingsOutlinedIcon/>
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div>
                        <img src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png"/>
                        </div>
                    </div>
                </div>
                <div className="project_main">
                    <Switch>
                        <Route exact path="/" component={Project_main} />
                        <Route exact path="/details" component={Details} />
                        <Route exact path="/details_edit" component={Details_Edit} />
                        <Route exact path="/create" component={Project_Create} />
                    </Switch>
                </div>
            </div>
            </FullScreen>
    )
}

export default Project;
