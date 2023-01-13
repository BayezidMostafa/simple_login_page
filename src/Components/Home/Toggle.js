import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Toggle() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            sx={{width: '368px'}}
            fullWidth
            size='small'
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="1-20">1-20</ToggleButton>
            <ToggleButton value="21-50">21-50</ToggleButton>
            <ToggleButton value="51-200">51-200</ToggleButton>
            <ToggleButton value="201-500">201-500</ToggleButton>
            <ToggleButton value="500+">500+</ToggleButton>
        </ToggleButtonGroup>
    );
}