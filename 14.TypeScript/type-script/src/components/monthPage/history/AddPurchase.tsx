import React from "react";
import AddPurchaseForm from "./AddPurchaseForm";
import Button from '@mui/material/Button';

interface IProps {}
interface IState {
    open: boolean
}

class AddPurchase extends React.Component<IProps, IState> {
    state: IState = {
        open: false,
    };

    setOpen = () => {
        this.setState({open: false});
    };

    render() {
    return (
        <div>
            <Button variant="outlined" onClick={() => this.setState({open: true})}>
                Dodaj wpis
            </Button>
            <AddPurchaseForm
                open={this.state.open}
                handleClose={() => this.setState({open: false})}
            />
        </div>
    )
    }
}

export default AddPurchase;