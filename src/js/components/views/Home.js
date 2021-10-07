
import React from 'react';
import JoinedChats from '../JoinedChats';
import Navbar from '../Navbar';

export default function Home() {

    return (
        <div className='content-wrapper'>
            <Navbar /> 
            <div className="row no-gutters fh">
                <div className="col-3 fh">
                    <JoinedChats />
                </div>
                <div className="col-9 fh">
                    {/* ########## CHAT NAME CONTAINER START ############ */}
                    <div className="chat-name-container">
                        <span className="name">Choose your channel</span>
                        <a
                            href="/"
                            className="btn btn-primary btn-sm back-button">Back</a>
                    </div>
                    {/* ########## CHAT NAME CONTAINER END ############ */}
                    <div className="container-fluid">
                        {/* ########## CHAT LIST START ############ */}
                        <div className="row mt-3">
                            {false &&
                                <div className="container-fluid">
                                    <div className="alert alert-warning">No chats to join :(</div>
                                </div>}
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Chat 1</h5>
                                        <p className="card-text">Some Chat 1 Description</p>
                                        <button
                                            onClick={() => { }}
                                            className="btn btn-outline-primary">Join Chat</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Chat 2</h5>
                                        <p className="card-text">Some Chat 2 Description</p>
                                        <button
                                            onClick={() => { }}
                                            className="btn btn-outline-primary">Join Chat</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Chat 3</h5>
                                        <p className="card-text">Some Chat 3 Description</p>
                                        <button
                                            onClick={() => { }}
                                            className="btn btn-outline-primary">Join Chat</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Chat 4</h5>
                                        <p className="card-text">Some Chat 4 Description</p>
                                        <button
                                            onClick={() => { }}
                                            className="btn btn-outline-primary">Join Chat</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ########## CHAT LIST END ############ */}
                    </div>
                </div>
            </div>
        </div>
    );
}