import React , { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Modal extends Component{

    render(){

        let modelStyle ={
            display:'block',
            backgroundColor : 'rgba(0,0,0,0.8)'
        }
        return(
            <>
                <div className="modal" tabindex="-1" style={modelStyle}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            
                            <button type="button" className="btn-close" onClick={this.props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <h5 className="card-title">Rating : {this.props.rating} / Origin : {this.props.lan}</h5>
                            <img src={this.props.img} className="img-fluid" alt="newimag"/>
                            <h5 className="modal-title">Moive Overview :</h5>
                            <p>{this.props.overview}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}