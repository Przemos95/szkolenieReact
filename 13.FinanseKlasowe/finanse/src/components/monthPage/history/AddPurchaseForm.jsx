import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SelectCategory from "./SelectCategory";

class AddPurchaseForm extends React.Component {
    state = {
        description: '',
        categoryId: null,
        value: 0,
        errorMessage: ''
    };
    
    onSave = () => {
        if (!this.state.description || !this.state.categoryId || !this.state.value) {
            this.setState({errorMessage: 'Uzupełnij dane'});
        } else {
            this.props.handleSave({id: new Date().getDate(), desc: this.state.description, categoryId: this.state.categoryId, value: this.state.value});
            this.setState({
              description: '',
              categoryId: null,
              value: 0,
              errorMessage: ''
            });
        }
    };
    
    render() {
    return (
      <div>
        <Dialog open={this.props.open} onClose={this.props.handleClose}>
          <DialogTitle>Dodaj nowy wpis</DialogTitle>
          <DialogContent>
            <SelectCategory
                categoryList={this.props.categoryList}
                onSelectedCategory={(id) => this.setState({categoryId: id})}
                categoryId={this.state.categoryId}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Opis"
              fullWidth
              variant="standard"
              value={this.state.description}
              onChange={(e) => this.setState({description: e.target.value})}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Kwota"
              fullWidth
              variant="standard"
              value={this.state.value}
              onChange={(e) => this.setState({value: Number.parseFloat(e.target.value)})}
            />
            {this.state.errorMessage}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose}>Anuluj</Button>
            <Button onClick={this.onSave}>Zapisz</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
    }
  }

  export default AddPurchaseForm;