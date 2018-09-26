import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            umur : 1
        };
        //agar bisa diakses disemua class header perlu di bind
        this.tambahUmur = this.tambahUmur.bind(this);
    }

    tambahUmur(){
        let prevUmur = this.state.umur;
        this.setState({
            umur : prevUmur+=1
        })
    }

    render(){
        return(
            <div className="navbar navbar-expand-lg bg-danger">
                <a onClick={this.tambahUmur} className="navbar-brand text-white">
                    Pra-TPA {this.props.initial || "Tidak ada inisial"} | Umur = {this.state.umur}
                </a>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white" href="">Home</Link>
                    </li>
                </div>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link text-white" href="">Categories</Link>
                    </li>
                </div>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/products" className="nav-link text-white" href="">Products</Link>
                    </li>
                </div>
                
            </div>
        );
    }
}
