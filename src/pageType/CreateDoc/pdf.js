import PdfMake from 'pdfmake/build/pdfmake';

const pdfDefinitions = {
    default: {
        content: 'Content',
        header: 'Header',
        footer: 'Footer'
    },
    sOne: {
        content: 'Content',
        header: 'Header',
        footer: 'Footer',
        background: 'background'
    }
};

function createPdf(pdfType = 'default') {
    return PdfMake.createPdf(pdfDefinitions[pdfType]);
}

export default createPdf;
