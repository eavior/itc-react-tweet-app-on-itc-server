import React from "react";

const TweetItem = (props) => {
    const { item } = props;
    return (
        <div className="card tweet">
            <div className="card-body tweet-header">
                <div className="float-start">{item.userName}</div>
                <div className="float-end">{item.date}</div>
            </div>
            <div className="card-body tweet-body">
                <p className="card-text tweet-text">{item.content}</p>
            </div>
        </div>
    );
}

export default TweetItem;