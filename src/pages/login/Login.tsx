import { Button, TextField } from '@mui/material';
import * as React from 'react';
import "./Login.css"

interface IProps {
}

interface IState {
    username?: string | null;
    passowrd?: string | null;
    onePass?: string | null;
}

class Login extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.onePassChanged = this.onePassChanged.bind(this);

        this.state = {
            username: null,
            passowrd: null,
            onePass: null
        };
    }

    render() {
        return (
            <div className="fit-parent center-childs">
                <div className="m-size center-childs flex-col">
                    <TextField size="small" value={this.state.username} onChange={this.usernameChanged} fullWidth={true} label="Username" variant="outlined" />
                    <TextField size="small" value={this.state.passowrd} onChange={this.passwordChanged} fullWidth={true} label="Password" variant="outlined" type="password" autoComplete="current-password" />
                    <TextField size="small" value={this.state.onePass} onChange={this.onePassChanged} fullWidth={true} label="OnePass" variant="outlined" type="password" />
                    <Button
                        variant="outlined"
                        sx={{
                            mx: "auto",
                            width: 400
                        }}
                        onClick={() => {
                            alert(this.state.username + " - " + this.state.passowrd + " - " + this.state.onePass);
                        }}
                    >Login</Button>
                </div>
            </div>
        )
    }

    usernameChanged(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ username: e.currentTarget.value })
    }
    passwordChanged(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ passowrd: e.currentTarget.value })
    }
    onePassChanged(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ onePass: e.currentTarget.value })
    }
}
export default Login;