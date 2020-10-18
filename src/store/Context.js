import React, { useState } from 'react';

const AdminContext = React.createContext();

export default AdminContext;

export function Provider(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const contextData = {
        isLoading,
        data,
        setIsLoading: (data) => {
            setIsLoading(data);
        },
        setData: (data) => {
            setData(data);
            setIsLoading(false);
        },
    };

    return (
        <AdminContext.Provider value={contextData}>
            {props.children}
        </AdminContext.Provider>
    );
}
