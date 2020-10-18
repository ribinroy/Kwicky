import axios from 'axios';
import { handleError } from '../utils/axios.util';

const WEB_API = `${process.env.REACT_APP_BACKEND_URL}?medium=Web&date=2020-09-23&api=661c2cc0fc3cb02a3e3b778c7baa959a4&selclient=5dfccbf5dffb5f50500112a3&orderby=latest&publish_source=null&edition=null&zone=null&state=null&website=null&socialweb=null&channel=null&programme=null&language=null&filterlanguage=null&filterentity=null`;
const PRINT_API = `${process.env.REACT_APP_BACKEND_URL}?medium=Print&date=2020-09-23&api=661c2cc0fc3cb02a3e3b778c7baa959a4&selclient=5dfccbf5dffb5f50500112a3&orderby=latest&publish_source=null&edition=null&zone=null&state=null&website=null&socialweb=null&channel=null&programme=null&language=null&filterlanguage=null&filterentity=null`;
const BROADCAST_API = `${process.env.REACT_APP_BACKEND_URL}?medium=Broadcast&date=2020-09-23&api=661c2cc0fc3cb02a3e3b778c7baa959a4&selclient=5dfccbf5dffb5f50500112a3&orderby=latest&publish_source=null&edition=null&zone=null&state=null&website=null&socialweb=null&channel=null&programme=null&language=null&filterlanguage=null&filterentity=null`;
const SOCIAL_API = `${process.env.REACT_APP_BACKEND_URL}?medium=Social&date=2020-09-23&api=661c2cc0fc3cb02a3e3b778c7baa959a4&selclient=5dfccbf5dffb5f50500112a3&orderby=latest&publish_source=null&edition=null&zone=null&state=null&website=null&socialweb=null&channel=null&programme=null&language=null&filterlanguage=null&filterentity=null`;

export function loadData(type, doAfter) {
    var API_URL = '';
    switch (type) {
        case 'All':
            API_URL = WEB_API;
            break;
        case 'Print':
            API_URL = PRINT_API;
            break;
        case 'Web':
            API_URL = WEB_API;
            break;
        case 'Social':
            API_URL = SOCIAL_API;
            break;
        case 'TV':
            API_URL = BROADCAST_API;
            break;
        default:
            alert('Error on load URL');
            break;
    }
    if (API_URL !== '')
        axios
            .get(API_URL, {})
            .then((response) => {
                if (doAfter !== undefined) doAfter(response.data, type);
            })
            .catch((err) => {
                handleError(err.response);
                if (doAfter !== undefined) doAfter(false);
            });
}
