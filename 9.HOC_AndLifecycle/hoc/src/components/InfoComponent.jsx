import React from 'react';
import DialogComponent from './DialogComponent';

class InfoComponent extends React.Component {
    render() {
        return(
            <DialogComponent title="Tytuł">
                <div>
                    Tekst w dialogu
                </div>
            </DialogComponent>
        );
    }
}

export default InfoComponent;