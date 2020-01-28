import React from 'react';

export class Login extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.setAllUsers();
    }
    render() {
        return <div>
            Helloo Login.
        </div>
    }
}