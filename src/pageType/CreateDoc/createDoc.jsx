import React, { useState, useCallback } from 'react';
import Button from '../../components/Button';
import Wizard from '../../components/Wizard'
import documentDefaults from '../../utils/defaults';
import { getDefinition, createPdfGenerator } from './pdf';
import './createDoc.css';

const CreateDoc = () => {
    const [docInitialized, setDocInitialization] = useState(false);
    const initDefinition = getDefinition("default");

    initDefinition.header.text = documentDefaults.defaultHeader;

    const openPdf = useCallback(
        () => createPdfGenerator(initDefinition).open(),
        [initDefinition]
    );

    const downloadPdf = useCallback(
        () => createPdfGenerator(initDefinition).download(),
        [initDefinition]
    );

    function handleDocInitialization(event) {
        const button = event.currentTarget;
        const buttonDataAttributes = button.dataset;
        const docinitialized = buttonDataAttributes.docinitialized || 'false';
        const parsedDocInitialized = JSON.parse(docinitialized);

        setDocInitialization(parsedDocInitialized);
    }

    return (
        <div className="content">
            <ul>
                <li>Tutela</li>
                <li>Contrato</li>
                <li>Demanda</li>
                <li>Sugerencia documento</li>
            </ul>
            {/* TODO All of that text info should come from a config or endpoint data */}
            <div className="content__information">
                <h4 className="content__information-title">¿Qué es una tutela?</h4>
                <p className="content__information-explanation">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="content__instructions">
                <h4 className="content__instructions-title">¿Qué debo hacer?</h4>
                <p className="content__instructions-explanation">
                    Puedes leer mas información general sobre la tutela
                    a la izquierda o comenzar a crearla con el botón
                    &quot;Iniciar documento&quot;
                </p>
                <p className="content__instructions-explanation">
                    Una vez inicializado el proceso, puedes cancelarlo
                    en cualquier momento haciendo click en el botón
                    &quot;Cancelar Documento&quot;
                </p>
            </div>
            <div>
                {docInitialized ? (
                    <React.Fragment>
                        <Button
                            onClick={handleDocInitialization}
                            data-docinitialized={false}>
                            Cancelar Documento
                        </Button>
                        <Button
                            onClick={openPdf}
                        >
                            Ver archivo
                        </Button>
                        <Button
                            onClick={downloadPdf}
                        >
                            Descargar pdf
                        </Button>
                        <Wizard>

                        </Wizard>
                    </React.Fragment>
                ) : (
                    <Button
                        onClick={handleDocInitialization}
                        data-docinitialized>
                        Iniciar Documento
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CreateDoc;
