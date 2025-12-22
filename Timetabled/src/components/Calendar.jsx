import React from 'react'
import Event from './Event'
const Calendar = () => {
  return (
    <div className='Calendar'>
     <table> 
     <thead> 
     <tr>
      <th></th>
      <th>Sunday</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
    </tr>
     </thead>
     <tbody>
     <tr>
        <td className="time">Insert Time</td>
     </tr>
     <tr>
        <td className="time">8AM</td>
         <Event event='Starbucks ☕️' location="Brooklyn" color ='green'/>
         <td></td>
         <td></td>
         <td></td>
          <Event event='Fancy Dinner 🎩' location='Maple & Ash' color='blue'/>
         <td></td>
         <Event event='Yolk 🍳' location color ='green'/>
     </tr>
     <tr>
        <td className="time">9AM</td>
        <td></td>
  <td></td>
  <td></td>
  <Event event='Subway 🚊' location="Grand Station" color ='pink'/>
  <td></td>
  <td></td>
  <Event event='The Bean 🫘' location="Bronx" color ='blue'/>
    </tr>
    <tr>
        <td className="time">10AM</td>
    </tr>
    <tr>
        <td className="time">11AM</td>
    </tr>
    <tr>
        <td className="time">12PM</td>
    </tr>
    <tr>
        <td className="time">1PM</td>
    </tr>
    <tr>
        <td className="time">2PM</td>
    </tr>
    <tr>
        <td className="time">3PM</td>
    </tr>
    <tr>
        <td className="time">4PM</td>
    </tr>
    <tr>
        <td className="time">5PM</td>
    </tr>
      </tbody>
     </table>
    </div>
  )
}

export default Calendar
