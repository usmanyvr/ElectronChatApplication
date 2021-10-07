
import React from 'react';
import AvailableChats from '../AvailableChats';
import JoinedChats from '../JoinedChats';
import Navbar from '../Navbar';
import ViewTitle from '../shared/ViewTitle';

export default function Home() {
    return (
        <div className='content-wrapper'>
            <Navbar />
            <div className="row no-gutters fh">
                <div className="col-3 fh">
                    <JoinedChats />
                </div>
                <div className="col-9 fh">
                    <ViewTitle />
                    <AvailableChats />
                </div>
            </div>
        </div>
    );
}