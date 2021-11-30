import { useState } from "react";
import AddPurchaseForm from "./AddPurchaseForm";
import Button from '@mui/material/Button';

const AddPurchase = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Dodaj wpis
            </Button>
            <AddPurchaseForm
                open={open}
                handleClose={() => setOpen(false)}
                categoryList={props.categoryList}
                handleSave={(item) => { setOpen(false); }}
            />
        </div>
    )
}

export default AddPurchase;