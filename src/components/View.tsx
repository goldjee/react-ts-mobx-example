import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../stores/stores';

const View: React.FC = observer(() => {
    const { store } = useStore();

    return <div className='view'>{store.counterValue}</div>;
});

export default View;
