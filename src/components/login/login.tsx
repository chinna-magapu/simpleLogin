import React from 'react';

export class Login extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.setAllUsers();
    }
    render() {
        return <form method="post" action="index.html">
            <div className="box">
                <h1>Dashboard</h1>

                <input type="email" name="email" value="" className="email" />

                <input type="password" name="email" value="" className="email" />

                <a href="#"><div className="btn">Sign In</div></a>

                <a href="#"><div id="btn2">Sign Up</div></a>
            </div>
        </form>
    }
}