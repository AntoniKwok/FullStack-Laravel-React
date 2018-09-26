import React, { Component } from 'react';
import Header from '../Shared/Header'
import CategoryService from '../../service/CategoryService';

export default class InsertCategoryPage extends Component{
    constructor(props){
        super(props);
        this.logChange = this.logChange.bind(this);
        this.service = new CategoryService();
        this.insertCategory = this.insertCategory.bind(this);
    }
    
    logChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    async insertCategory(e){
        e.preventDefault();
        await this.service.insert(this.state);
        //jngan pake window.location.href
        this.props.history.push("/categories");
    }
    // logChange = (e) => bisa digunakan tanp bind
    render(){
        return(
            <div>
                <Header />
                <div className = "container">
                    <div className = "row mt-3">
                        <div className="col-md-12">
                            <form onSubmit={this.insertCategory}>
                                <div className = "form-group">
                                <label>Name : </label>
                                <input onChange={this.logChange} className="form-control" type="text" name="name"/>
                                </div>
                                <button className="btn btn-success">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}