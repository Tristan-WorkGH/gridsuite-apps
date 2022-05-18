import React, { useCallback, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField, Tooltip } from '@mui/material';
import { useIntl } from 'react-intl';

export const TapChangerSelector = ({
    tapChanger,
    setter,
    defaultValue,
    ...props
}) => {
    return (
        <Select
            defaultValue={defaultValue}
            onChange={(ev) => setter(ev.target.value)}
            size={'medium'}
            margin={'none'}
            {...props}
        >
            {[...Array(tapChanger.highTap - tapChanger.lowTap + 1)].map(
                (step, index) => (
                    <MenuItem
                        key={'tapChanger' + index}
                        value={index + tapChanger.lowTap}
                    >
                        {index + tapChanger.lowTap}
                    </MenuItem>
                )
            )}
        </Select>
    );
};

export const NumericalField = ({
    defaultValue,
    min,
    max,
    setter,
    ...props
}) => {
    const [error, setError] = useState(false);
    const intl = useIntl();

    const validateChange = useCallback(
        (ev) => {
            const newVal = ev.target.value;
            if (newVal >= min && newVal <= max) {
                setError(false);
                setter(newVal);
            } else {
                setError(true);
                setter(defaultValue);
            }
        },
        [setError, min, max, setter, defaultValue]
    );

    return (
        <Tooltip title={intl.formatMessage({ id: 'MinMax' }, { min, max })}>
            <TextField
                defaultValue={defaultValue}
                onChange={validateChange}
                {...props}
                error={error}
                type="Number"
                size={'small'}
                margin={'normal'}
                inputProps={{
                    style: { textAlign: 'center', padding: '0px' },
                    inputProps: { min: { min }, max: { max } },
                }}
            />
        </Tooltip>
    );
};
