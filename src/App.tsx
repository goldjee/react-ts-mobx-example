import { observer } from 'mobx-react-lite';
import React from 'react';
import Controller from './components/Controller';
import View from './components/View';

const App: React.FC = observer(() => {
    return (
        <div className='wrapper'>
            <Controller />
            <View />
        </div>
    );
});

export default App;
