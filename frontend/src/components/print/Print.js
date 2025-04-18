import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export const createPdf = async (data) => {    
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const titulo = {
        x: 50,
        y: height - 4 * 10,
        size: 30,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71)
    }
    const texto = {
        size: 15,
        x:50,
        y: height - 4 * 15,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71)
    }        
    data.forEach(d => {        
        page.drawText("Restaurante Brisas", titulo);                
        page.drawText(`Número: ${d.numero}`, texto);
        texto.y = bajaPos(texto.y);        
        page.drawText(`Fecha: ${d.fecha}`, texto);
        texto.y = bajaPos(texto.y);        
        page.drawText(`Descripción: ${d.descripcion}`, texto);
        texto.y = bajaPos(texto.y);        
        page.drawText(`Base: ${d.base.toFixed(2)}`, texto);
        texto.y = bajaPos(texto.y);        
        page.drawText(`Iva: ${d.iva.toFixed(2)}`, texto);
        texto.y = bajaPos(texto.y);        
        page.drawText(`Cuota: ${d.cuota.toFixed(2)}`, texto);
        texto.y = bajaPos(texto.y);        
        page.drawText(`Total: ${d.total.toFixed(2)}`, texto);
        texto.y -= 20;
        texto.y = bajaPos(texto.y);        
    });    
    const pdfBytes = await pdfDoc.save();        
    window.open(URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' })) , '_blank');
}

const bajaPos = (pos) =>{
    return pos - 20;
}