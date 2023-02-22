import { useState } from 'react';
import { FormButton, InputControl } from './FormControls.jsx';
import styles from './AddForm.css';

export default function AddForm({ onAdd, ...rest }) {
    const [value, setValue] = useState('');

    const handleChange = ({ target }) => setValue(target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onAdd(value);
        setValue('');
    };

    return (
        <form className={styles.AddForm} onSubmit={handleSubmit}>
            <InputControl
            required
            value={value}
            onChange={handleChange}
            {...rest}
            />
            <FormButton>Add</FormButton>
        </form>
    );
}