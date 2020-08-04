import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { InlineButton, RegularButton } from './Button.css';
import PropTypes from 'prop-types';

function Button({ variant, children, ...props }) {
    const { to } = { ...props };
    const Component = useMemo(() => {
        switch (variant) {
            case 'inline':
                return InlineButton;
            case 'regular':
                return RegularButton;
            default:
                return 'regular';
        }
    }, [variant]);

    const component = useMemo(() => (
        <Component {...props}>
            {children}
        </Component>
    ), [props, children])

    return to ? (
        <Link {...props} >
            {component}
        </Link>

    ) :
        <>
            {component}
        </>
}

Button.propTypes = {
    variant: PropTypes.oneOf(['regular', 'inline'])
}

export default Button;