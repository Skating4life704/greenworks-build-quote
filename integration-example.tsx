// Example integration for your quote generator
import { ConstructionQuote, QuoteData } from './components/ConstructionQuote';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Map your quote data to the template interface
function mapQuoteData(yourQuoteData: any): QuoteData {
  return {
    projectName: yourQuoteData.project?.name,
    clientName: `${yourQuoteData.client?.firstName} ${yourQuoteData.client?.lastName}`,
    projectAddress: yourQuoteData.project?.address,
    projectType: yourQuoteData.project?.type,
    date: new Date().toLocaleDateString(),
    salesperson: yourQuoteData.salesperson?.name,
    quoteDate: yourQuoteData.createdAt,
    scopeOfWork: yourQuoteData.scopeOfWork,
    cost: `$${yourQuoteData.totalCost?.toLocaleString()}`
  };
}

// PDF Export function
export const exportQuoteToPDF = async (quoteData: any) => {
  // Create a hidden div to render the component
  const element = document.createElement('div');
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.width = '210mm'; // A4 width
  document.body.appendChild(element);

  // Render the component
  const mappedData = mapQuoteData(quoteData);
  const root = createRoot(element);
  
  return new Promise<void>((resolve) => {
    root.render(
      <div style={{ background: 'white', padding: '0' }}>
        <ConstructionQuote data={mappedData} />
      </div>
    );

    // Wait for render then generate PDF
    setTimeout(async () => {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download the PDF
      pdf.save(`quote-${mappedData.projectName || 'construction'}.pdf`);
      
      // Cleanup
      document.body.removeChild(element);
      resolve();
    }, 1000);
  });
};

// Usage in your quote generator
export const QuoteExportButton = ({ quoteData }: { quoteData: any }) => {
  const handleExport = async () => {
    try {
      await exportQuoteToPDF(quoteData);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button onClick={handleExport} className="btn-primary">
      Export as PDF
    </button>
  );
};