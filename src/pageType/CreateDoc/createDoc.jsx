import React, { useState, useCallback } from 'react';

import Button from '../../components/Button';
import Wizard from '../../components/Wizard'
import { getDefinition, createPdfGenerator } from './pdf';

import stepConfig from './docsConfig';
import pageConfig from './pageConfig';
import documentDefaults from '../../utils/defaults';
import './createDoc.css';

const CreateDoc = () => {
    const [finished, setFinished] = useState(false);
    const [inProgress, setInProgress] = useState(0);
    const [currentDoc, setCurrentDoc] = useState(stepConfig[0]);
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

    if(inProgress){
        var Component = currentDoc.steps[0].uiform;
    }

    return (
        <div className="content">
            <ul>
                {
                    stepConfig.map((step)=>{
                        return (
                            <li key={`${step.value}-${step.id}`}>{step.value}</li>
                        );
                    })
                }
            </ul>
            {/* TODO All of that text info should come from a config or endpoint data */}
            <div className="content__information">
                <h4 className="content__information-title">{`¿Qué es una ${currentDoc.value}?`}</h4>
                <p className="content__information-explanation">
                    {currentDoc.description}
                </p>
            </div>
            <div className="content__instructions">
            <h4 className="content__instructions-title">{pageConfig.topInstruction.title}</h4>
                <p className="content__instructions-explanation">
                    {pageConfig.topInstruction.content}
                </p>
            </div>
            <div>
                {finished && (
                    <React.Fragment>
                        <Button>
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

                    </React.Fragment>
                )}
                {!!inProgress && (
                        <Wizard>
                            <Component />
                        </Wizard>
                )}
                {!finished && !inProgress && (
                    <Button
                        onClick={()=>{setInProgress(1)}}>
                        Iniciar Documento
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CreateDoc;
