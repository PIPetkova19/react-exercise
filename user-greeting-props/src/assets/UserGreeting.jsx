import PropTypes from 'prop-types';

function UserGreeting(props) {
    console.log("Props:", props);
    const helloGreeting = <h1 className="helloGreeting">Hi, {props.username}</h1>
    const loginPrompt = <h1 className="loginPrompt">Please login!</h1>
    return (props.isLogged ? helloGreeting : loginPrompt);
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLogged: PropTypes.bool
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLogged: true
}

export default UserGreeting