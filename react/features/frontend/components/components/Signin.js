import React from 'react';
import {Container, Row,Col,Input, Form, FormGroup,Button} from 'reactstrap';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import * as Api from '../api/Apiservice';
import { AUTH_USER } from '../reducer/actionstype';
class Signin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }

    handlechange = (name,e) => {
        this.setState({
            [name]:e.target.value
        })
    }

    handlesubmit = (e) => {
        const {dispatch} = this.props;
        Api.login({email:this.state.email,password:this.state.password}).then(result=>{
            if(result.data.success)
            {
                window.localStorage.setItem("userinfo",JSON.stringify(result.data.userinfo));
                dispatch({type:AUTH_USER,userinfo:result.data.userinfo});
                this.props.history.push('/meetyx');
            }
            else
            {
                toastr.error(result.data.message);
            }
        })
        e.preventDefault();
    }

    render()
    {
        return (
            <div className="home">
                <Container style={{height:'100%'}}>
                    <Row style={{height:'100%',alignItems:'center'}}>
                        <Col lg={4} md={6} xs={12} style={{margin:'auto',textAlign:'center'}}>
                            <h1>Sign In</h1>
                            <Form style={{marginTop:'48px'}} onSubmit={this.handlesubmit}>
                                <FormGroup>
                                    <input type="email" className="input" placeholder="Email Address" name="email" required onChange={(e)=>this.handlechange("email",e)} autoComplete="off"/>
                                </FormGroup>
                                <FormGroup>
                                    <input className="input" placeholder="Password" type="password" name="password" required  onChange={(e)=>this.handlechange("password",e)}/>
                                </FormGroup>
                                <FormGroup style={{textAlign:'center'}}>
                                    <input type="checkbox"/>
                                    <span className="checkboxtitle">Keep me signed in</span>
                                </FormGroup>
                                <FormGroup>
                                    <Button className="primarybtn" style={{width:'100%'}}>Sign In</Button>
                                </FormGroup>
                                <FormGroup>
                                    <a href="/" className="link">Forgot your password?</a>
                                </FormGroup>
                            </Form>
                            <div style={{marginTop:'60px'}}>
                                <Button className="defaultbtn" style={{width:'100%'}}>Sign in with <img src='/images/frame.png'></img>SiriusID</Button>
                                <Link to="/signup" className="link">Don’t have user? Sign up</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapstatetoprops = (state) => ({
    auth:state['feature/frontend/auth']
})

export default connect(mapstatetoprops)(Signin);