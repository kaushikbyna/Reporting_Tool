import React from 'react';
import "../style/calender.css"

//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed

class App extends React.Component {
  
  render() {
    return (
            <div className="maincontainer">
                  <p>Calender</p>
                  <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    initialView="dayGridMonth"
                    eventClick={
                      function(arg){
                        alert(arg.event.title)
                        alert(arg.event.start)
                      }
                    }
                    events={[
                      { title: 'Task', date: '2021-06-10' } ]}
                  />
            </div>
          )
      };
  }

export default App;