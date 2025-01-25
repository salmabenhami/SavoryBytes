import { createRoot } from "react-dom/client";
import Manuel from "../pages/Manuel";
import jsPDF from "jspdf";

export const generatePDF = async () => {
  const tempContainer = document.createElement("div");
  tempContainer.style.width = "210mm";  
  tempContainer.style.minHeight = "297mm";  
  tempContainer.style.margin = "10px auto";
  tempContainer.style.backgroundColor = "#f9f9f9";
  tempContainer.style.padding = "20px";
  tempContainer.style.borderRadius = "10px";
  tempContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  document.body.appendChild(tempContainer);

  const root = createRoot(tempContainer);
  root.render(<Manuel />);

  await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;  
    let yPosition = margin;  

    const addTextWithPageBreaks = (text, fontSize, lineHeight) => {
      const textLines = pdf.splitTextToSize(text, pageWidth - 2 * margin);
      textLines.forEach((line) => {
        if (yPosition + lineHeight > pageHeight - margin) {
          pdf.addPage();  
          yPosition = margin;  
        }
        pdf.text(line, margin, yPosition);  
        yPosition += lineHeight;  
      });
    };

    
    const elements = tempContainer.querySelectorAll("h1, h2, p, img");
    elements.forEach((element) => {
      if (element.tagName === "H1" || element.tagName === "H2") {
        addTextWithPageBreaks(element.textContent, 16, 10); 
      } else if (element.tagName === "P") {
        addTextWithPageBreaks(element.textContent, 12, 8);  
      } else if (element.tagName === "IMG") {
        const imgData = element.src;
        const imgWidth = pageWidth - 2 * margin;  
        const imgHeight = (element.naturalHeight * imgWidth) / element.naturalWidth;

        if (yPosition + imgHeight > pageHeight - margin) {
          pdf.addPage(); 
          yPosition = margin;  
        }

        pdf.addImage(imgData, "PNG", margin, yPosition, imgWidth, imgHeight);  
        yPosition += imgHeight + 10;  
      }
    });

    pdf.save("manuel_savorybytes.pdf");  
  } catch (error) {
    console.error("Erreur lors de la génération du PDF :", error);
  } finally {
    document.body.removeChild(tempContainer);
    root.unmount();  
  }
};
