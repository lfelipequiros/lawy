import React from 'react';
import PropTypes from 'prop-types';

import { noop } from '../../utils/utils';

function Button(props) {
    return (
        <button type="button" {...props}>
            <div>
                {props.children}
            </div>
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func
};

Button.defaultProps = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    onClick: noop
};

export default Button;
