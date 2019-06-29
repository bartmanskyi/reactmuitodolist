import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarIconBorder from '@material-ui/icons/StarBorder';
const Icon = ({important}) => {
    if (important) {
        return <StarIcon color='primary' />;
    } else {
        return <StarIconBorder />;
    }
};
export default Icon;