import React from 'react';
import './RealTimeDashboard.css';
import { CalendarCheck, CalendarClock, NotepadText } from 'lucide-react';
import totalStudents from '../../assets/total_students.png';

function RealTimeDashboard() {
  const data = [
    {
      title: 'Total Students',
      number: 100,
      icon: NotepadText,
      backgroundImage: totalStudents,
      beforeGradient:
        'linear-gradient(143deg, rgba(198, 213, 255, 1) 0%, rgba(243, 207, 255, 1) 43%) ',
    },
    {
      title: 'Students placed',
      number: 70,
      icon: CalendarCheck,
      beforeGradient:
        'linear-gradient(167deg, rgba(153, 235, 255, 1) 33%, rgba(103, 192, 214, 1) 81%)',
      // ,
    },
    {
      title: 'Yet to be placed',
      number: 30,
      icon: CalendarClock,
    },
  ];

  return (
    <>
      {data.map((data, index) => {
        const Icon = data.icon;
        return (
          <div
            className="RealTimeDashboardRuntime"
            key={index}
            style={{
              background: data.beforeGradient,
              transition:'all 0.5s'
            }}
          >
            <div className="RealTimeDashboardRuntimeHeading">
              <p>{data.title}</p>
              <Icon />
            </div>
            <div className="RealTimeDashboardRuntimeBackground">
              <img src={data.backgroundImage} alt="" />
            </div>
            <div className="RealTimeDashboardRuntimeNumber">
              <p>{data.number}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RealTimeDashboard;
