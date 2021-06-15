import React from 'react'
import Common_file from './Common_file';
 
function Timesheeets() {
    return (
        <div>
            <Common_file 
            isTimesheet
            title="Timesheets"
            firstCol="USER"
            secondCol="ENTRY"
            thirdCol="NOTE"
            fourthCol="START DATE"
            fiftCol="END DATE "
            sixithCol="HOURS"
            seventhCol="ACTIONS"
                    />
     </div>
    )
}

export default Timesheeets;
