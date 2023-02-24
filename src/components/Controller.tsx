import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { useStore } from '../stores/stores';

const Controller: React.FC = observer(() => {
    const { store } = useStore();

    const increment = useCallback(() => {
        store.increment();
    }, [store]);

    return (
        <div className='controller'>
            <button onClick={increment}>increment</button>
        </div>
    );
});

export default Controller;
