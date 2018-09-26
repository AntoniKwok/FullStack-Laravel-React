import React, {Component} from 'react';
import axios from 'axios'
import Header from '../Shared/Header';
import CategoryService from '../../service/CategoryService';

import { Link } from 'react-router-dom';

export default class CategoryPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories : []
        };
        //bikin servicenya
        this.service = new CategoryService();
    }

    // componentWillMount(){
    //     axios.get("http://localhost:8000/api/categories").then(function(categories){
    //         this.setState({
    //             categories : categories.data
    //         })
    //     })
    // }
    async componentWillMount(){
        //contoh bikin promise sendiir
        // new Promise(function(resolved, rejected){
        //     resolved();
        // })
        let categories = await this.service.getAll()
            this.setState({
                categories : categories.data
            });
    }
    async deleteCategory(id){
        await this.service.delete(id);
        this.setState({
            id : id.data
        });
    }
    render(){
        return(
            <div>
                <Header initial="AI" />
                <div className = "container">
                    <div classname="mb-3 mt-3">
                        <Link to="/categories/insert"><button className="btn btn-warning">Insert</button></Link>
                    </div>
                    <div className = "row">
                        <div className="col-sm-12">
                            <table className="table table-bordered table-hovered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {this.state.categories.map(category =>(
                                            <tr key={category.id}>
                                                <th>{category.name}</th>
                                                <th onClick={() => {this.deleteCategory(category.id)}}>Delete</th>
                                            </tr>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}