import PdfMake from 'pdfmake/build/pdfmake';

const pdfDefinitions = {
    default: {
        content: 'Content',
        header:{
            text: 'Header',
            margin: 10
        } ,
        footer: 'Footer',
        pageMargins: [40, 140, 40, 60]
    },
    sOne: {
        content: 'Content',
        header: 'Header',
        footer: 'Footer',
        background: 'background'
    }
};

export const getDefinition = function(definitionID){
    return pdfDefinitions[definitionID];
}

export const createPdfGenerator = PdfMake.createPdf;

export default function createPdf(pdfType = 'default') {
    return PdfMake.createPdf(pdfDefinitions[pdfType]);
};
