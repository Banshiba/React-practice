import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userInfo: {
        login: "",
        avatar_url: "",
        location: ""
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/${this.props.name}`);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json
    });
  }

  render() {
    const { login, avatar_url, location } = this.state.userInfo;
    return (
      <div className="user-card bg-black text-blue-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
        <div id="user-card-info">
          <img className="user-card-img w-24 h-24 rounded-full shadow-md mb-4" src={avatar_url} alt={login} />
        </div>
        <h2 className="user-card-name text-xl font-semibold">{login}</h2>
        <p className="user-card-location text-sm">{location}</p>
      </div>
    );
  }
}

export default UserClass;
