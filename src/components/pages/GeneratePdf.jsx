import React from "react";
import { createRoot } from "react-dom/client";
import Manuel from "../pages/Manuel";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePDF = async () => {
  const tempContainer = document.createElement("div");
  document.body.appendChild(tempContainer);

  const root = createRoot(tempContainer);
  root.render(<Manuel />);

  await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    const canvas = await html2canvas(tempContainer, {
      scale: 2,
      useCORS: true,
      logging: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("manuel_savorybytes.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
  } finally {
    document.body.removeChild(tempContainer);
    root.unmount();
  }
};