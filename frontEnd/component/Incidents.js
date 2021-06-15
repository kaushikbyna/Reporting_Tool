import React from 'react'
import Common_file from './Common_file';

function Incidents() {
    return (
        <div>
            <Common_file 
            title="Incidents"
            firstCol="ID"
            secondCol="INCIDENTS NAME"
            thirdCol="START DATE"
            fourthCol="END DATE"
            fiftCol="ASSIGNED"
            sixithCol="PRIORITY"
            seventhCol="STATUS"
                    />
     </div>
    )
}

export default Incidents;
