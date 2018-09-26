import React, {Component} from 'react';

import Header from '../Shared/Header';

export default class ProductPage extends Component{
    render(){
        return(
            <div>
                <Header initial="AI" />
                <div className = "container">
                    <div className = "row">
                        <div className="col-sm-12">
                            Ini Product
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}