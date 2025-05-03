import React from 'react'
import './RealTimeDashboard.css'
import { CalendarCheck,CalendarClock,NotepadText  } from 'lucide-react';



function RealTimeDashboard() {

    const data = [{
        title: "Total Students",
        number: 100,
        icon:NotepadText
        },
        {
        title: "Students placed",
        number: 70,
        icon:CalendarCheck
        },
        {
        title: "Yet to be placed",
        number: 30,
        icon:CalendarClock
    }]

  return (
      <>
          {
              data.map((data, index) => {
                  const Icon = data.icon
                  return (
                      <div className="RealTimeDashboardRuntime" key={ index}>
                <div className="RealTimeDashboardRuntimeHeading">
                              <p>{data.title}</p>
                             <Icon/>
                </div>
                <div className="RealTimeDashboardRuntimeBackground">
                              <p>image</p>
                </div>
                <div className="RealTimeDashboardRuntimeNumber">
                              <p>{ data.number}</p>
                </div>
                      </div>
                  )
              })
          }
          
          </>
     
  )
}

export default RealTimeDashboard