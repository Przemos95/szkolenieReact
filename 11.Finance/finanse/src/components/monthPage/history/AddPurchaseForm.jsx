import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SelectCategory from "./SelectCategory";

const AddPurchaseForm = (props) => {
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    const [value, setValue] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const onSave = () => {
        if (!description || !categoryId || !value) {
            setErrorMessage('Uzupełnij dane');
        } else {
            props.handleSave({id: new Date().getDate(), desc: description, categoryId, value});
            setDescription('');
            setCategoryId(null);
            setValue(0);
            setErrorMessage('');
        }
    };
    
    return (
      <div>
        <Dialog open={props.open} onClose={props.handleClose}>
          <DialogTitle>Dodaj nowy wpis</DialogTitle>
          <DialogContent>
            <SelectCategory
                categoryList={props.categoryList}
                onSelectedCategory={(id) => setCategoryId(id)}
                categoryId={categoryId}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Opis"
              fullWidth
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Kwota"
              fullWidth
              variant="standard"
              value={value}
              onChange={(e) => setValue(Number.parseFloat(e.target.value))}
            />
            {errorMessage}
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose}>Anuluj</Button>
            <Button onClick={onSave}>Zapisz</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  export default AddPurchaseForm;