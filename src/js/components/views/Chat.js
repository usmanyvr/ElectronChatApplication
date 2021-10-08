import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import ChatUserList from "./ChatUsersList";
import ViewTitle from "../shared/ViewTitle";
import ChatMessagesList from "../ChatMessagesList";

export default function ChatView() {
    const {id} = useParams();
    return (
        <div className="row no-gutters fh">            
            <div className="col-3 fh">
                <ChatUserList />
            </div>
            <div className="col-9 fh">
                <ViewTitle text={`Joined Channel: ${id}`}/>
                <ChatMessagesList />
            </div>
        </div>
    );
}