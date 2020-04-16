import React from 'react';
import PropTypes from 'prop-types';

export function DefaultDocMessage() {
    return (<h3>Por favor seleccione un documento.</h3>);
}

export function DocCreator({ match }) {
    return (<h3>Aquí vamos a crear tu: {match.params.id}</h3>);
}

DocCreator.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    })
};

DocCreator.defaultProps = {
    match: {
        params: {}
    }
};
