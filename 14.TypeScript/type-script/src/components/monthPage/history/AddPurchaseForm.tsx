import React from "react";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SelectCategory from "./SelectCategory";
import { AddPurchase } from "../../../actions/historyAction";
import { connect } from "react-redux";
import Product from "../../../models/Product";
import Category from "../../../models/Category";
import { MyRootState, Services } from "../../../reducers/configureStore";

interface IProps {
    open: boolean;
    addProduct: (product: Product) => void;
    handleClose: () => void;

    categoryList: Category[];
}

interface IState {
    description: string;
    categoryId: number | undefined;
    value: number;
    errorMessage: string
}

class AddPurchaseForm extends React.Component<IProps, IState> {
    state: IState = {
        description: '',
        categoryId: undefined,
        value: 0,
        errorMessage: ''
    };
    
    onSave = () => {
        if (!this.state.description || !this.state.categoryId || !this.state.value) {
            this.setState({errorMessage: 'Uzupełnij dane'});
        } else {
            this.props.addProduct({id: new Date().getDate(), desc: this.state.description, categoryId: this.state.categoryId, value: this.state.value});
            this.setState({
              description: '',
              categoryId: undefined,
              value: 0,
              errorMessage: ''
            });
            this.props.handleClose();
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
                onSelectedCategory={(id: number | undefined) => this.setState({categoryId: id})}
                categoryId={this.state.categoryId}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Opis"
              fullWidth
              variant="standard"
              value={this.state.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({description: e.target.value})}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Kwota"
              fullWidth
              variant="standard"
              value={this.state.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({value: Number.parseFloat(e.target.value)})}
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

  function mapStateToProps(state: MyRootState) {
    return {
      categoryList: state.categoryReducer.categoryList,
    };
  }

  function mapDispatchToProps(dispatch: ThunkDispatch<MyRootState, Services, AnyAction>) {
    return {
      addProduct: (product: Product) => dispatch(AddPurchase(product))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddPurchaseForm);