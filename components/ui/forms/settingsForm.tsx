import React from 'react'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { updateAllSettings } from '../../../stores/settings/settings_reducer'
import { useDispatch } from 'react-redux';

import { AutoForm, AutoField, ErrorField, SubmitField } from 'uniforms-mui';

import { bridge as schema } from '../../../uniforms/settings/settingsForm';

interface Props {
    onClose: () => void;
}


export const SettingsForm = ({ onClose }: Props) => {

    const dispatch = useDispatch();

    function handleSubmit(model: any) {

        dispatch(updateAllSettings({
            current:"work",
            qtCurrent:0,
            work: model.Pomodoro,
            shortBreak: model.DescansoCorto,
            longBreak: model.DescansoLargo,
        }))
        onClose();
    }
    return (
        <React.Fragment>
            <AutoForm schema={schema} onSubmit={handleSubmit}>
                <AutoField name="Pomodoro" />
                <ErrorField name="Pomodoro">
                    <span>No es un tiempo valido!</span>
                </ErrorField>
                <AutoField name="DescansoCorto" />
                <ErrorField
                    name="DescansoCorto"
                    errorMessage="No es un tiempo valido!"
                />
                <AutoField name="DescansoLargo" />
                <ErrorField
                    name="DescansoLargo"
                    errorMessage="No provee un tiempo valido!"
                />

                <DialogActions>
                    <Button variant="contained" onClick={onClose}>Cancel</Button>
                    <SubmitField name='Submit' label="Enviar"></SubmitField>

                </DialogActions>
            </AutoForm>
        </React.Fragment>
    )
}
