import React, { Component } from "react";
import Navigation from "./src/navigation/Navigation";
import PubNubReact from 'pubnub-react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
      publishKey: "YOUR_PUB_KEY",
      subscribeKey: "YOUR_SUB_KEY"
    });
    this.state = {
      userCount: 0,
    };

    this.pubnub.init(this);
  }

  componentDidMount() {
    this.pubnub.subscribe({
      channels: ['channel1'],
      withPresence: true
    });

    let presenceUsers;
    setInterval(() => {
      this.pubnub.hereNow(
      {
        includeUUIDs: true,
        includeState: true
      },
      (status, response) => {
        // handle status, response
        console.log(status);
        console.log(response);
        if (response != undefined) presenceUsers = response.totalOccupancy;
      }
    );
      this.setState({userCount: presenceUsers})
    }, 1000);
  }

  render() {
    return <Navigation screenProps={{userCount: this.state.userCount}}/>;
  }
}