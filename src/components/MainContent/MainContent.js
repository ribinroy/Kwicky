import React, { useContext, useState, useEffect } from 'react';
import './MainContent.scss';
import AdminContext from './../../store/Context';
import Card from './../Card/Card';
import { ReactComponent as Share } from './../../assets/svg/Share.svg';
import { ReactComponent as ViewMain } from './../../assets/svg/View Main.svg';
import { ReactComponent as ViewSmall } from './../../assets/svg/View Small.svg';

export default function MainContent() {
    const contextData = useContext(AdminContext);
    const [isShortView, setShortView] = useState(false);

    return (
        <div className='main-container'>
            <div className='main-content-wrap'>
                <div className='banner-information-wrap md-only'>
                    <div className='text-info'>
                        <div className='date'>TODAY</div>
                        <div className='company'>COAL INDIA LIMITED</div>
                    </div>
                    <div className='filter-functions'>
                        <div className='date-selections'>
                            <div className='custom-date'>
                                <div className='triangle'></div>
                                CUSTOM DATES
                            </div>
                            <div className='current-selected-date'>
                                <span>04</span>
                                <span>September</span>
                                <span>2020</span>
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
                <div className='bottom-text'>PRAHLAD JOSHI MOC</div>

                <div className='current-selected-date-mobile xs-only'>
                    <span>04</span>
                    <span>September</span>
                    <span>2020</span>
                </div>
                {contextData.isLoading && <Loader />}
                {!contextData.isLoading && (
                    <RenderListInfo
                        array={contextData.data}
                        isShortView={isShortView}
                    />
                )}
            </div>
        </div>
    );
}

function Loader() {
    return <div className='loader'>Loading.. Please Wait..</div>;
}

function RenderListInfo({ array, isShortView }) {
    return (
        <div className='list-data-wrap'>
            {isShortView && (
                <div className='table-row table-header table-view md-only'>
                    <div className='table-row-item checkbox-items'>
                        <input type='checkbox' />
                    </div>
                    <div className='table-row-item headline'>Headline</div>
                    <div className='table-row-item publication'>
                        Publication
                    </div>
                    <div className='table-row-item edition'>Edition</div>
                    <div className='table-row-item reach'>Reach (000)s</div>
                    <div className='table-row-item pg'>PG#</div>
                    <div className='table-row-item language'>Language</div>
                </div>
            )}
            {array && array.length > 0
                ? array.map((el, index) => {
                      return (
                          <Card
                              key={
                                  el._id.$oid !== undefined
                                      ? el._id.$oid
                                      : index
                              }
                              data={el}
                              isShortView={isShortView}
                          />
                      );
                  })
                : ''}
        </div>
    );
}
