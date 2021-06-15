import React from 'react'
import Common_file from './Common_file';

function Defects() {
    return (
        <div>
           <Common_file 
            title="Defects"
            firstCol="ID"
            secondCol="DEFECT NAME"
            thirdCol="START DATE"
            fourthCol="END DATE"
            fiftCol="ASSIGNED"
            sixithCol="SEVERITY"
            seventhCol="STATUS"
                     />
        </div>
    )
}

export default Defects;
