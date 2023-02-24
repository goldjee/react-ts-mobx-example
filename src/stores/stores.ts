import React from 'react';

import Store from './Store';

export const StoreContext = React.createContext({
    store: new Store(),
});

export const useStore = () => {
    const store = React.useContext(StoreContext);
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.');
    }
    return store;
};
