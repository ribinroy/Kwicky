import React, { useContext, useState } from 'react';
import './MainContent.scss';
import RenderListInfo from './RenderListInfo';
import Calendar from './../Calendar/Calendar';
import Moment from 'react-moment';
import AdminContext from './../../store/Context';
import { ReactComponent as Share } from './../../assets/svg/Share.svg';
import { ReactComponent as ViewMain } from './../../assets/svg/View Main.svg';
import { ReactComponent as ViewSmall } from './../../assets/svg/View Small.svg';

function MainContent({ isMaxWidth }) {
    const contextData = useContext(AdminContext);
    const [isShortView, setShortView] = useState(false);
    const [showCalendar, setCalendarShow] = useState(false);
    const [date, setDate] = useState(new Date());

    return (
        <div className='main-container'>
            <div
                className={'main-content-wrap ' + (isMaxWidth ? 'active' : '')}>
                <div className='banner-information-wrap md-only'>
                    <div className='text-info'>
                        <div className='date'>TODAY</div>
                        <div className='company'>COAL INDIA LIMITED</div>
                    </div>
                    <div className='filter-functions'>
                        <div className='date-selections'>
                            <div className='custom-date'>
                                <span
                                    onClick={() =>
                                        setCalendarShow(!showCalendar)
                                    }>
                                    <div className='triangle'></div>
                                    CUSTOM DATES
                                </span>
                                {showCalendar && <Calendar />}
                            </div>
                            <div className='current-selected-date'>
                                <Moment format='DD'>{date}</Moment>
                                <Moment format='MMMM'>{date}</Moment>
                                <Moment format='YYYY'>{date}</Moment>
                            </div>
                        </div>
                        <div className='functional-items-wrap'>
                            <Share />
                            <ViewMain
                                onClick={() => setShortView(false)}
                                className={!isShortView ? 'active' : ''}
                            />
                            <ViewSmall
                                onClick={() => setShortView(true)}
                                className={isShortView ? 'active' : ''}
                            />
                        </div>
                    </div>
                </div>
                <div className='selected-dates md-only'>
                    SEP 04 2020 - SEP 07 2020
                </div>
                <div className='bottom-text'>PRAHLAD JOSHI MOC</div>

                <div className='current-selected-date-mobile xs-only'>
                    <Moment format='DD'>{date}</Moment>
                    <Moment format='MMMM'>{date}</Moment>
                    <Moment format='YYYY'>{date}</Moment>
                </div>
                {contextData.isLoading && <Loader />}
                {!contextData.isLoading && (
                    <RenderListInfo
                        array={contextData.data}
                        isShortView={isShortView}
                        dateSelected={date}
                    />
                )}
            </div>
        </div>
    );
}

function Loader() {
    return <div className='loader'>Loading.. Please Wait..</div>;
}

export default React.memo(MainContent);
