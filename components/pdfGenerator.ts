import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { PdfData } from '../types';

export const generateLessonPdf = (lessonNumber: number, lessonTitle: string, data: PdfData, headers?: string[]) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const addFooterAndPageNumbers = () => {
    const totalPages = (doc as any).internal.getNumberOfPages();
    const pageHeight = doc.internal.pageSize.getHeight();
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(150);
        
        const footerText = 'allemand à la maison – imprimé avec l’application';
        doc.text(footerText, 14, pageHeight - 10);
      
        const pageNumText = `Page ${i} sur ${totalPages}`;
        doc.text(pageNumText, doc.internal.pageSize.getWidth() - 14, pageHeight - 10, { align: 'right' });
    }
  };

  // --- HEADER ---
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(22);
  doc.text(`Leçon ${lessonNumber}`, doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

  doc.setFontSize(16);
  doc.setTextColor(80);
  doc.text(lessonTitle, doc.internal.pageSize.getWidth() / 2, 30, { align: 'center' });

  let lastY = 35; // Position after the main title

  // --- BODY ---
  data.forEach(category => {
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(40);

    const categoryTitleHeight = 5;
    const tableHeaderHeight = 10;
    const neededSpace = categoryTitleHeight + tableHeaderHeight + 10;

    if (lastY + neededSpace > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        lastY = 20;
    } else {
        lastY += 15;
    }
    
    doc.text(category.title, 14, lastY);

    const body = category.words.map(w => [
      w.word || '-', 
      w.syllables || '-', 
      w.translation || '-'
    ]);

    autoTable(doc, {
      startY: lastY + 2,
      head: [headers || ['Mot Allemand', 'Syllabes', 'Traduction']],
      body: body,
      theme: 'grid',
      headStyles: { 
        fillColor: [55, 65, 81], // slate-700
        textColor: 255,
        fontStyle: 'bold'
      },
      styles: {
        font: 'Helvetica',
        fontSize: 11,
      },
      alternateRowStyles: {
        fillColor: [241, 245, 249] // slate-100
      },
    });

    lastY = (doc as any).lastAutoTable.finalY;
  });
  
  addFooterAndPageNumbers();
  
  // --- SAVE ---
  const safeTitle = lessonTitle.split(':')[1]?.trim().toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_') || `lecon_${lessonNumber}`;
  const fileName = `lecon_${lessonNumber}_${safeTitle}.pdf`;
  doc.save(fileName);
};