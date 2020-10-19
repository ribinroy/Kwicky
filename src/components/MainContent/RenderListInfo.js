import React from 'react';
import Card from './../Card/Card';

function RenderListInfo({ array, isShortView, date }) {
    debugger;

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
                      return index <= array.length ? (
                          <Card
                              key={
                                  el._id.$oid !== undefined
                                      ? el._id.$oid
                                      : index
                              }
                              data={el}
                              isShortView={isShortView}
                          />
                      ) : (
                          ''
                      );
                  })
                : ''}
        </div>
    );
}

export default React.memo(RenderListInfo);
