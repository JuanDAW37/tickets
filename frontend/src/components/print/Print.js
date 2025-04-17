import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export const createPdf = async (data) => {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30
    data.forEach(d => {
        page.drawText(d.descripcion, {
            x: 50,
            y: height - 4 * fontSize,
            size: fontSize,
            font: timesRomanFont,
            color: rgb(0, 0.53, 0.71)
        })            
    });
    
    const pdfBytes = await pdfDoc.save()
}