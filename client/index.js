import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {BrowserRouter, Route} from 'react-router-dom';

import AppRouter from './router';

ReactDom.render(
    <AppContainer>
        <AppRouter />
    </AppContainer>,
    document.getElementById('app')
);

console.log(document.getElementById('app'));