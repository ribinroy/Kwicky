import React from 'react';
import './Card.scss';

import { ReactComponent as Star } from './../../assets/svg/star.svg';
import { ReactComponent as Download } from './../../assets/svg/download internal.svg';
import { ReactComponent as Share } from './../../assets/svg/share internal.svg';
import { ReactComponent as Caption } from './../../assets/svg/caption.svg';
import { ReactComponent as Info } from './../../assets/svg/info.svg';
import { ReactComponent as Reader } from './../../assets/svg/News Reader.svg';
import { ReactComponent as Positive } from './../../assets/svg/Positive.svg';
import { ReactComponent as Negative } from './../../assets/svg/Negative.svg';
import { ReactComponent as Neutral } from './../../assets/svg/Neutral.svg';

export default function Card({ data, isShortView }) {
    function getColorCodeClass(tonality) {
        if (tonality < 0.1) return ' red-card';
        //negative
        else if (tonality > 0.3) return ' green-card';
        //positive
        else return ' neutral-card'; //neutral
    }

    return (
        <div
            className={
                'card-main ' +
                (isShortView ? 'table-view table-row' : '') +
                getColorCodeClass(data.overall_tonality)
            }>
            <div className='left-icons-wrap checkbox-items table-row-item '>
                <div className='function-key-item xs-only triangle-wrap'>
                    <Positive className='news-status positive' />
                    <Negative className='news-status negative' />
                    <Neutral className='news-status neutral' />
                </div>
                <div className='function-key-item check-box-item'>
                    <input type='checkbox' className='function-key' />
                </div>
                <div className='function-key-item '>
                    <Star title='Mark Star' className='function-key' />
                </div>
                <div className='function-key-item'>
                    <Info title='Information' className='function-key' />
                </div>
                <div className='function-key-item'>
                    <a
                        href={data.source_link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='function-key'>
                        <Download title='Download' className='function-key' />
                    </a>
                </div>
                <div className='function-key-item'>
                    <Share title='Share' className='function-key' />
                </div>
                <div className='function-key-item'>
                    <Caption title='Caption' className='function-key' />
                </div>
            </div>
            {!isShortView && (
                <div className='content-wrap'>
                    <div className='title-wrap'>
                        <div className='main-heading'>{data.headline}</div>
                        <div className='sub-heading'>
                            {data.publish_source} | {data.location} |{' '}
                            {data.language}
                        </div>
                        <div className='extras'>
                            <Reader />
                            <div className='numerals'>
                                <span>{data.circulation}</span>
                            </div>
                        </div>
                    </div>
                    <div className='description  md-only'>{data.content}</div>
                </div>
            )}
            {isShortView && (
                <>
                    <div
                        className='table-data table-row-item headline'
                        title={data.headline}>
                        <span>{data.headline}</span>
                    </div>
                    <div
                        className='table-data table-row-item publication'
                        title={data.publish_source}>
                        <span>{data.publish_source}</span>
                    </div>
                    <div
                        className='table-data table-row-item edition'
                        title={data.edition}>
                        <span>{data.edition}</span>
                    </div>
                    <div
                        className='table-data table-row-item reach'
                        title={data.circulation}>
                        <span>{data.circulation}</span>
                    </div>
                    <div
                        className='table-data table-row-item pg'
                        title={data.page_number}>
                        <span>{data.page_number}</span>
                    </div>
                    <div
                        className='table-data table-row-item language'
                        title={data.language}>
                        <span>{data.language}</span>
                    </div>
                </>
            )}
        </div>
    );
}
