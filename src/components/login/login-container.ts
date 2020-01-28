
import { Login } from './login';
import { connect } from 'react-redux';
import { SET_ALL_USERS } from '../../store/actions/login-actions';
type Dispatch = (action: any) => void;



const setAllUsers = () => {
    return (dispatch: Dispatch) => {
        const data = [
            { uname: 'tmagapu', passwaord: '123456', data: [] },
            { uname: 'vjuluri', passwaord: '123456', data: [] },
        ]
        dispatch({ type: SET_ALL_USERS, data: data });
    };
}

const mapStateToProps = (state: any) => {

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAllUsers: () => dispatch(setAllUsers())
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
