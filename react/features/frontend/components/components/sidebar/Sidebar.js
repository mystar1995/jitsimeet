import React from 'react';
import Userinfo from './avatar';
import {Nav,NavItem,NavLink} from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
class Sidebar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    logout = () => {
        let {dispatch} = this.props;
        console.log(this.props);
        window.localStorage.removeItem("userinfo");
        dispatch({type:LOGOUT});
        this.props.history.push('/signin');
    }

    render()
    {
        let {auth} = this.props;
        console.log('auth',auth);
        return(
            <>
                <Userinfo userinfo = {auth.userinfo}/>
                <div className="sidebarother">
                    <Nav vertical className="sidebarcontainer">
                        <NavItem><NavLink href="/meetyx/meets">Meetyx's</NavLink></NavItem>
                        <NavItem><NavLink href="/meetyx/recording">Recordings</NavLink></NavItem>
                    </Nav>
                    <Nav vertical className="sidebarcontainer">
                        <NavItem><NavLink href="/meetyx">Settings</NavLink></NavItem>
                        <NavItem><NavLink href="/meetyx">Nodes</NavLink></NavItem>
                    </Nav>
                </div>
                <div className="logoutcontainer">
                    <span className="logout" onClick={this.logout}>Logout</span>
                    <p className="description">Copyright © 2020 ProximaX®. {'\n'}All Rights Reserved.</p>
                </div>
                
            </>
        )
    }
}

const mapstatetoprops = (state) => ({
    auth:state['feature/frontend/auth']
})

export default connect(mapstatetoprops)(Sidebar);
