import React from 'react';
import Slide from '@material-ui/core/Slide';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

const DIRECTION = {
    right: 'left',
    left: 'right',
    bottom: 'up',
    top: 'down',
};

const iconStyle = {
    fontSize: 24,
    marginRight: '16px',
};

const variantIcon = {
    success: <CheckCircleIcon style={iconStyle} />,
    warning: <WarningIcon style={iconStyle} />,
    error: <ErrorIcon style={iconStyle} />,
    info: <InfoIcon style={iconStyle} />,
};

const defaultAnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
};

const getTransitionDirection = (anchorOrigin = defaultAnchorOrigin) => {
    if (anchorOrigin.horizontal !== 'center') {
        return DIRECTION[anchorOrigin.horizontal];
    }
    return DIRECTION[anchorOrigin.vertical];
};

const TransitionComponent = props => <Slide {...props} />;

export {
    variantIcon,
    defaultAnchorOrigin,
    TransitionComponent,
    getTransitionDirection,
};
