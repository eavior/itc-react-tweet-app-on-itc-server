import React from "react";
import TweetItem from "./TweetItem";
import { MyContext } from '../context';

export default class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            loading: false,
        };
    }

    render() {
        return (
            <MyContext.Consumer>
                {({ serverTweets }) => (
                    <div className="container" >
                        {serverTweets.map((item) =>
                            <TweetItem
                                key={item.date} // or ID. In this case 'Date' because someone else may not have included an ID key in a server tweet.
                                item={item}
                            />
                        )}
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}