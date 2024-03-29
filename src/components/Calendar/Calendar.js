import React from 'react';
// import 'react-calendar/dist/Calendar.css';
import './Calendar.scss';
import Calendar from 'react-calendar';

function CalendarWebPart() {
    return (
        <div className='calendar-main-wrap'>
            <div className='calendar-top-banner'>
                <div className='date-box'>
                    <span>04</span>
                    <span>September</span>
                    <span>2020</span>
                </div>
                <div className='date-box'>
                    <span>07</span>
                    <span>September</span>
                    <span>2020</span>
                </div>
            </div>
            <div className='options'>
                <div className='option blue-text'>Today</div>
                <div className='option blue-text'>Reach</div>
                <div className='option blue-text'>12 Hours</div>
                <div className='option blue-text'>24 Hours</div>
                <div className='option blue-text'>36 Hours</div>
                <div className='option blue-text'>48 hours</div>
            </div>
            <div className='submit-button'>Submit</div>
            <div className='calendar-secondary-banner'>
                <div className='blue-text'>SEP 04 2020</div>
                <div className='blue-text'>DONE</div>
            </div>
            <div className='calendar-package-wrap'>
                <Calendar />
            </div>
        </div>
    );
}

export default React.memo(CalendarWebPart);
