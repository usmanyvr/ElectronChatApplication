
import React from 'react';
import AvailableChatsList from '../AvailableChatsList';
import JoinedChatsList from '../JoinedChatsList';
import Navbar from '../Navbar';
import ViewTitle from '../shared/ViewTitle';

export default function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="row no-gutters fh">
                <div className="col-3 fh">
                    <JoinedChatsList />
                </div>
                <div className="col-9 fh">
                    <ViewTitle text="Choose your channel"/>
                    <AvailableChatsList />
                </div>
            </div>
        </div>
    );
}