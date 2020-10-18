import React from 'react';
import './Card.scss';

import { ReactComponent as Star } from './../../assets/svg/star.svg';
import { ReactComponent as Download } from './../../assets/svg/download internal.svg';
import { ReactComponent as Share } from './../../assets/svg/share internal.svg';
import { ReactComponent as Caption } from './../../assets/svg/caption.svg';
import { ReactComponent as Info } from './../../assets/svg/info.svg';
import { ReactComponent as Reader } from './../../assets/svg/News Reader.svg';

export default function Card({ data, isShortView }) {
    debugger;
    return (
        <div
            className={
                'card-main ' + (isShortView ? 'table-view table-row' : '')
            }>
            <div className='left-icons-wrap checkbox-items table-row-item '>
                <div className='function-key-item check-box-item'>
                    <input type='checkbox' className='function-key' />
                </div>
                <div className='function-key-item '>
                    <Star className='function-key' />
                </div>
                <div className='function-key-item'>
                    <Info className='function-key' />
                </div>
                <div className='function-key-item'>
                    <Download className='function-key' />
                </div>
                <div className='function-key-item'>
                    <Share className='function-key' />
                </div>
                <div className='function-key-item'>
                    <Caption className='function-key' />
                </div>
            </div>
            {!isShortView && (
                <div className='content-wrap'>
                    <div className='title-wrap'>
                        <div className='main-heading'>{data.headline}</div>
                        <div className='sub-heading'>
                            {data.genre} | {data.location} | {data.language}
                        </div>
                        <div className='extras'>
                            <Reader />
                            <div className='numerals'>
                                <span>98</span>
                                <span>000</span>
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
                        title={data.location}>
                        <span>{data.location}</span>
                    </div>
                    <div
                        className='table-data table-row-item reach'
                        title={data.overall_coverage}>
                        <span>{data.overall_coverage}</span>
                    </div>
                    <div className='table-data table-row-item pg' title={'XX'}>
                        <span>XX</span>
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
