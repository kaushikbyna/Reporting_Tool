import React from 'react'
import Common_file from './Common_file';

function Tasks() {
    return (
        <div>
            <Common_file 
            title="Tasks"
            firstCol="ID"
            secondCol="TASK NAME"
            thirdCol="START DATE"
            fourthCol="END DATE"
            fiftCol="ASSIGNED"
            sixithCol="PRIORITY"
            seventhCol="STATUS"
                    />
     </div>
    )
}

export default Tasks
