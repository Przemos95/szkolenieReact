import React, { useState } from "react";
import AddPurchaseForm from "./AddPurchaseForm";
import Button from '@mui/material/Button';

class AddPurchase extends React.Component {
    state = {
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
                categoryList={this.props.categoryList}
                handleSave={(item) => { this.setState({open: false}); }}
            />
        </div>
    )
    }
}

export default AddPurchase;