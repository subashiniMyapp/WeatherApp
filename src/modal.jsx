import React , { Component} from "react";

export default function Modal(){
    let modelStyle ={
        display:'block',
        backgroundColor : 'rgba(0,0,0,0.8)'
    }
    return(
        <>
            <div className="modal" tabindex="-1" style={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}