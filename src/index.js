import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OldGrowth from './OldGrowth';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<OldGrowth />, document.getElementById('root'));
registerServiceWorker();
