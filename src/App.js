import React from "react";
import "./App.css";
import TweetForm from "./components/TweetForm";
import TweetList from "./components/TweetList";
import { getTweets, createTweet } from "./lib/api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Profile from "./components/Profile";
import { MyContext } from "./context";

const NavBar = () => {
  return (
    <nav className="container navbar navbar-expand fixed-top">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" exact activeClassName="selected" to="/">
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="selected"
            to="/profile">
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverTweets: [],
      error: "",
      loading: false,
      currentUser: localStorage.getItem("currentUser") || "Anonymous user",
      onAddTweet: (item) => this.addNewTweet(item),
    };
  }

  componentDidMount() {
    // localStorage.clear(); // In order to reset the localStorage. Comment out if not applicable.
    this.setState((prevState) => {
      return { error: "" };
    });
    this.loadServerTweets();
    this.interval = setInterval(() => this.loadServerTweets(), 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async addNewTweet(item) {
    const newTweet = await createTweet(item);
    if (typeof newTweet === "string") {
      if (newTweet.includes("Oops! Something went wrong.")) {
        this.setState((prevState) => {
          return { error: newTweet };
        });
      }
    } else {
      this.setState((prevState) => {
        return { serverTweets: [item, ...prevState.serverTweets] };
      });
    }
  }

  setUserName(currentUser) {
    localStorage.removeItem("currentUser");
    localStorage.setItem("currentUser", currentUser);
    this.setState((prevState) => {
      return { currentUser: currentUser };
    });
  }

  async loadServerTweets() {
    // this.setState({ loading: true }); // show error if tweet list cannot be loaded; not requested in the assignment; can be added later
    const serverTweetsImport = await getTweets();
    // this.setState({ tweets, loading: false });
    serverTweetsImport.sort((a, b) => (b.date > a.date ? 1 : -1));
    // this.setState((prevState) => {
    //   return { serverTweets: [] };
    // });
    this.setState((prevState) => {
      return { loading: false, serverTweets: serverTweetsImport };
    });
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <TweetForm />
                {this.state.serverTweets.length && <TweetList />}
              </Route>
              <Route path="/profile">
                <Profile
                  currentUser={this.state.currentUser}
                  onChangeUser={(user) => this.setUserName(user)}></Profile>
              </Route>
            </Switch>
          </div>
        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;
