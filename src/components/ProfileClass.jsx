import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('Child Constructor');
    
  }
  async componentDidMount() {
    const json = await fetch("https://api.github.com/users/sujal1256");
    const data = await json.json();    
    this.setState({
      userInfo: data,
    });

    console.log("Child Mount");
  }

  render() {
    console.log("Child render");
    console.log(this.state.userInfo);
    return (
      <>
        <img src={this.state?.userInfo?.avatar_url} alt="Image" />
        <h1>Profile Class Componenet {this.props.name}</h1>
        <p>{this.state?.userInfo?.name}</p>
        <p>{this.state?.userInfo?.login}</p>
      </>
    );
  }
}
export default Profile;
