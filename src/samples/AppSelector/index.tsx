import {Switch, Route} from 'react-router-dom';

import EmbeddedTopLevel from "../Embedded/EmbeddedTopLevel";

// import Profile from '../../components/Profile';

const baseURL='/';

const AppSelector = () => {
    return (
        <div>
            <Switch>
                <Route exact path={`${baseURL}`} component={EmbeddedTopLevel}></Route>
                <Route exact path={`${baseURL}index.html`} component={EmbeddedTopLevel}></Route>
            </Switch>
        </div>
    )
}

export default AppSelector;