import React, {Component} from 'react';

import Header from '../Shared/Header';

export default class DashboardPage extends Component{
    render(){
        return(
            <div>
                <Header initial="AI" />
                <div className = "container">
                    <div className = "row">
                        <div className="col-sm-12">
                            Welcome
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}