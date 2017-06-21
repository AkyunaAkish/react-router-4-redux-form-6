import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Posts from './components/Posts/Posts';

class Router extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Posts}/>
                </div>
            </BrowserRouter>
        );
    }
};

export default Router;

// example of NESTED ROUTES:

// import React, {PureComponent} from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
// import Posts from './components/Posts/Posts';

// class Hello extends PureComponent {
//     render() {
//         return (
//             <div>Hello</div>
//         );
//     }
// }

// class Goodbye extends PureComponent {
//     render() {
//         return (
//             <div>Goodbye</div>
//         );
//     }
// }

// class Router extends PureComponent {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <BrowserRouter>
//                 <div>
//                     <p>Any Elements you want to persist can go around here</p>
//                     <Route exact path='/' component={Posts}/>
//                     <Route path='/hello' component={Hello}/>
//                     <Route path='/hello/goodbye' component={Goodbye}/> //nested route of hello
//                     <Route path='/goodbye' component={Goodbye}/>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// };

// export default Router;