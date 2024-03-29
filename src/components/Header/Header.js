import React, { useState, useEffect, useContext } from 'react';
import './Header.scss';
import { loadData } from './../../api/web.api';
import AdminContext from './../../store/Context';
import { ReactComponent as MainLogo } from './../../assets/svg/LOGO.svg';
import { ReactComponent as Settings } from './../../assets/svg/Setting.svg';
import { ReactComponent as Search } from './../../assets/svg/Search.svg';
import { ReactComponent as Hamburger } from './../../assets/svg/hamburger.svg';
import { ReactComponent as ALL } from './../../assets/svg/ALL.svg';
import { ReactComponent as Print } from './../../assets/svg/Print.svg';
import { ReactComponent as Web } from './../../assets/svg/Web.svg';
import { ReactComponent as Twitter } from './../../assets/svg/Twitter.svg';
import { ReactComponent as TV } from './../../assets/svg/TV.svg';
import { ReactComponent as Mail } from './../../assets/svg/Mail.svg';
import { ReactComponent as Calendar } from './../../assets/svg/calendar.svg';
import { ReactComponent as Files } from './../../assets/svg/files.svg';
import { ReactComponent as Person } from './../../assets/svg/person.svg';
import { ReactComponent as Record } from './../../assets/svg/record.svg';
import { ReactComponent as Papers } from './../../assets/svg/papers.svg';
import { ReactComponent as Upload } from './../../assets/svg/upload.svg';
import { ReactComponent as BPO } from './../../assets/svg/BPO.svg';

function Header({ setIsMaxWidth }) {
    const contextData = useContext(AdminContext);
    const [isHanburgerOpened, setHanburger] = useState(false);
    const [selectedView, setSelectedView] = useState('TV');
    const [selectedNavItem, setSelectedNav] = useState('Updates');

    function setView(type) {
        if (contextData.isLoading && contextData.data.length > 0) return false;
        if (type === selectedView) return false;

        type = type === undefined ? selectedView : type;
        setSelectedView(type);
        contextData.setIsLoading(true);
        loadData(type, function (responseArray, loadedType) {
            contextData.setData(responseArray);
        });
    }

    useEffect(() => {
        setView(); //load initial data
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setIsMaxWidth(!isHanburgerOpened);
    }, [isHanburgerOpened, setIsMaxWidth]);
    return (
        <header>
            <div className='top-level'>
                <div className='main-container'>
                    <div className='logo'>
                        <MainLogo />
                    </div>
                    <div className='contents-wrap'>
                        <Hamburger className={'hamburger-icon xs-only'} />
                        <div className='search-wrap'>
                            <Search className='search-logo' />
                            <input
                                className='search-input'
                                placeholder='DEPARTMENT SEARCH'
                            />
                        </div>
                        <select className='drop-down'>
                            <option>COAL INDIA LIMITED</option>
                        </select>
                        <div className='blue-text'>Hindi</div>
                        <div className='blue-text'>cunal</div>
                        <Settings className='settings' />
                    </div>
                </div>
            </div>
            <div className='second-level'>
                <div className='main-container'>
                    <div
                        className={
                            'side-nav ' + (isHanburgerOpened ? 'active' : '')
                        }>
                        <Hamburger
                            className={
                                'hamburger-icon ' +
                                (isHanburgerOpened ? 'active' : '')
                            }
                            onClick={() => setHanburger(!isHanburgerOpened)}
                        />
                        <div
                            className={
                                'side-nav-items-wrap ' +
                                (isHanburgerOpened ? 'active' : '')
                            }>
                            <div
                                className={
                                    'side-nav-item ' +
                                    (selectedNavItem === 'Updates'
                                        ? 'active'
                                        : '')
                                }
                                onClick={() => setSelectedNav('Updates')}>
                                <Calendar />
                                <div className='side-nav-text'>Updates</div>
                            </div>
                            <div
                                className={
                                    'side-nav-item ' +
                                    (selectedNavItem === 'Archive'
                                        ? 'active'
                                        : '')
                                }
                                onClick={() => setSelectedNav('Archive')}>
                                <Files />
                                <div className='side-nav-text'>Archive</div>
                            </div>
                            <div
                                className={
                                    'side-nav-item ' +
                                    (selectedNavItem === 'Influencer'
                                        ? 'active'
                                        : '')
                                }
                                onClick={() => setSelectedNav('Influencer')}>
                                <Person />
                                <div className='side-nav-text'>Influencer</div>
                            </div>
                            <div
                                className={
                                    'side-nav-item plus-bottom ' +
                                    (selectedNavItem === 'Analysis'
                                        ? 'active'
                                        : '')
                                }
                                onClick={() => setSelectedNav('Analysis')}>
                                <Record />
                                <div className='side-nav-text'>Analysis</div>
                            </div>
                            <div
                                className={
                                    'side-nav-item ' +
                                    (selectedNavItem === 'Press Release'
                                        ? 'active'
                                        : '')
                                }
                                onClick={() => setSelectedNav('Press Release')}>
                                <Papers />
                                <div className='side-nav-text'>
                                    Press Release
                                </div>
                            </div>
                            <div
                                className={
                                    'side-nav-item ' +
                                    (selectedNavItem === 'Remote Upload'
                                        ? 'active'
                                        : '')
                                }
                                onClick={() => setSelectedNav('Remote Upload')}>
                                <Upload />
                                <div className='side-nav-text'>
                                    Remote Upload
                                </div>
                            </div>
                            <div
                                className={
                                    'side-nav-item ' +
                                    (selectedNavItem === 'Support'
                                        ? 'active'
                                        : '')
                                }
                                onClick={() => setSelectedNav('Support')}>
                                <BPO />
                                <div className='side-nav-text'>Support</div>
                            </div>
                        </div>
                        <div
                            className={
                                'xs-only drop-down-icon ' +
                                (isHanburgerOpened ? 'active' : '')
                            }
                            onClick={() => setHanburger(!isHanburgerOpened)}>
                            <div className='triangle'></div>
                        </div>
                    </div>
                    <div
                        className={
                            'main-nav-items-wrap ' +
                            (isHanburgerOpened ? 'active' : '')
                        }>
                        <div className='main-selections'>
                            <div
                                onClick={() => setView('All')}
                                className={
                                    'main-selection-item ' +
                                    (selectedView === 'All' ? 'active' : '')
                                }>
                                <ALL />
                                <div className='blue-text'>ALL</div>
                            </div>
                            <div
                                onClick={() => setView('Print')}
                                className={
                                    'main-selection-item ' +
                                    (selectedView === 'Print' ? 'active' : '')
                                }>
                                <Print />
                                <div className='blue-text'>PRINT</div>
                            </div>
                            <div
                                onClick={() => setView('Web')}
                                className={
                                    'main-selection-item ' +
                                    (selectedView === 'Web' ? 'active' : '')
                                }>
                                <Web />
                                <div className='blue-text'>WEB</div>
                            </div>
                            <div
                                onClick={() => setView('Social')}
                                className={
                                    'main-selection-item ' +
                                    (selectedView === 'Social' ? 'active' : '')
                                }>
                                <Twitter />
                                <div className='blue-text'>Twitter</div>
                            </div>
                            <div
                                onClick={() => setView('TV')}
                                className={
                                    'main-selection-item ' +
                                    (selectedView === 'TV' ? 'active' : '')
                                }>
                                <TV />
                                <div className='blue-text'>TV</div>
                            </div>
                            <div className='blue-text xs-only print-text'>
                                PRINT
                            </div>
                        </div>
                        <div className='filter-items-wrap'>
                            <label className='check-box-item'>
                                <input type='checkbox' />
                                <div className='checkbox-text'>
                                    SHOW CLIENT TWEETS
                                </div>
                            </label>
                            <label className='check-box-item'>
                                <input type='checkbox' />
                                <div className='checkbox-text'>SHOW RTs</div>
                            </label>
                            <select className='drop-down'>
                                <option>EXPORT</option>
                            </select>
                            <div className='main-selection-item '>
                                <Mail />
                                <div className='blue-text'>Mail</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header);
