import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DocCreator, DefaultDocMessage } from '../components/doc-creator';

export default function CreateDoc({ match }) {
    return (
        <div>
            <h2>Documentos disponibles</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/contrato`}>Contrato #1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/tutela`}>Tutela #2</Link>
                </li>
            </ul>
            <Route path={`${match.path}/:id`} component={DocCreator} />
            <Route exact path={match.path} render={DefaultDocMessage} />
        </div>
    );
}

CreateDoc.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
};
