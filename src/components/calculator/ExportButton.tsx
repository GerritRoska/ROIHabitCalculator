
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";

interface ExportButtonProps {
  data: {
    finalAmount: number;
    totalContributions: number;
    interestEarned: number;
    itemCount: number;
    weaknessType: string;
    annualSavings?: number;
    currentAge?: number;
    retirementAge?: number;
    returnRate?: number;
    inflationRate?: number;
    realValue?: number;
    nominalValue?: number;
  };
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
};

export function ExportButton({ data }: ExportButtonProps) {
  const handlePDFExport = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPosition = 20;
    const lineHeight = 10;

    // Title
    doc.setFontSize(20);
    doc.setTextColor(33, 33, 33);
    doc.text("Your Habit ROI Summary", pageWidth / 2, yPosition, { align: "center" });
    yPosition += lineHeight * 2;

    // Investment Details
    doc.setFontSize(12);
    doc.setTextColor(51, 51, 51);

    // Habit Information
    doc.setFont(undefined, 'bold');
    doc.text("Habit Details", 20, yPosition);
    yPosition += lineHeight;
    doc.setFont(undefined, 'normal');
    doc.text(`${data.weaknessType.charAt(0).toUpperCase() + data.weaknessType.slice(1)} avoided: ${data.itemCount.toLocaleString()}`, 20, yPosition);
    yPosition += lineHeight;
    if (data.annualSavings) {
      doc.text(`Annual Savings: ${formatCurrency(data.annualSavings)}`, 20, yPosition);
      yPosition += lineHeight;
    }

    // Personal Information
    yPosition += lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text("Personal Information", 20, yPosition);
    yPosition += lineHeight;
    doc.setFont(undefined, 'normal');
    if (data.currentAge && data.retirementAge) {
      doc.text(`Current Age: ${data.currentAge} years`, 20, yPosition);
      yPosition += lineHeight;
      doc.text(`Retirement Age: ${data.retirementAge} years`, 20, yPosition);
      yPosition += lineHeight;
      doc.text(`Investment Period: ${data.retirementAge - data.currentAge} years`, 20, yPosition);
      yPosition += lineHeight;
    }

    // Investment Parameters
    yPosition += lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text("Investment Parameters", 20, yPosition);
    yPosition += lineHeight;
    doc.setFont(undefined, 'normal');
    if (data.returnRate) {
      doc.text(`Return Rate: ${data.returnRate}%`, 20, yPosition);
      yPosition += lineHeight;
    }
    if (data.inflationRate) {
      doc.text(`Inflation Rate: ${data.inflationRate}%`, 20, yPosition);
      yPosition += lineHeight;
      doc.text(`Real Return Rate: ${(data.returnRate! - data.inflationRate!).toFixed(1)}%`, 20, yPosition);
      yPosition += lineHeight;
    }

    // Results
    yPosition += lineHeight;
    doc.setFont(undefined, 'bold');
    doc.text("Investment Results", 20, yPosition);
    yPosition += lineHeight;
    doc.setFont(undefined, 'normal');
    if (data.nominalValue) {
      doc.text(`Nominal Final Amount: ${formatCurrency(data.nominalValue)}`, 20, yPosition);
      yPosition += lineHeight;
    }
    if (data.realValue) {
      doc.text(`Inflation-Adjusted Final Amount: ${formatCurrency(data.realValue)}`, 20, yPosition);
      yPosition += lineHeight;
    }
    doc.text(`Final Amount: ${formatCurrency(data.finalAmount)}`, 20, yPosition);
    yPosition += lineHeight;
    doc.text(`Total Contributions: ${formatCurrency(data.totalContributions)}`, 20, yPosition);
    yPosition += lineHeight;
    doc.text(`Interest Earned: ${formatCurrency(data.interestEarned)}`, 20, yPosition);
    yPosition += lineHeight * 2;

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    const footerText = "Try Acorns + get $5 → www.acorns.com/share/?first_name=Gerrit&shareable_code=QM3PVD3";
    doc.text(footerText, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: "center" });

    // Save the PDF
    doc.save('habit-roi-summary.pdf');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
      onClick={handlePDFExport}
    >
      <Download className="h-4 w-4" />
      Export as PDF
    </Button>
  );
}
