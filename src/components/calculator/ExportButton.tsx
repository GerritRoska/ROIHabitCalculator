
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
    realContributions?: number;
    realInterestEarned?: number;
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

const formatNumber = (value: number) => {
  return new Intl.NumberFormat("en-US").format(value);
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

    // Habit Details
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("Habit Details", 20, yPosition);
    yPosition += lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text(`${data.weaknessType.charAt(0).toUpperCase() + data.weaknessType.slice(1)} avoided: ${formatNumber(data.itemCount)}`, 20, yPosition);
    yPosition += lineHeight;
    if (data.annualSavings) {
      doc.text(`Annual Savings: ${formatCurrency(data.annualSavings)}`, 20, yPosition);
      yPosition += lineHeight;
    }

    // Personal Information
    yPosition += lineHeight;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("Personal Information", 20, yPosition);
    yPosition += lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    if (data.currentAge !== undefined && data.retirementAge !== undefined) {
      doc.text(`Current Age: ${data.currentAge} years`, 20, yPosition);
      yPosition += lineHeight;
      doc.text(`Retirement Age: ${data.retirementAge} years`, 20, yPosition);
      yPosition += lineHeight;
      doc.text(`Investment Period: ${data.retirementAge - data.currentAge} years`, 20, yPosition);
      yPosition += lineHeight;
    }

    // Investment Parameters
    yPosition += lineHeight;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("Investment Parameters", 20, yPosition);
    yPosition += lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    if (data.returnRate !== undefined) {
      doc.text(`Return Rate: ${data.returnRate}%`, 20, yPosition);
      yPosition += lineHeight;
    }
    if (data.inflationRate !== undefined) {
      doc.text(`Inflation Rate: ${data.inflationRate}%`, 20, yPosition);
      yPosition += lineHeight;
      if (data.returnRate !== undefined) {
        doc.text(`Real Return Rate: ${(data.returnRate - data.inflationRate).toFixed(1)}%`, 20, yPosition);
        yPosition += lineHeight;
      }
    }

    // Investment Results
    yPosition += lineHeight;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("Investment Results", 20, yPosition);
    yPosition += lineHeight;
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');

    // Nominal Values
    doc.setFont(undefined, 'bold');
    doc.text("Nominal Values", 20, yPosition);
    yPosition += lineHeight;
    doc.setFont(undefined, 'normal');
    doc.text(`Final Amount: ${formatCurrency(data.nominalValue || data.finalAmount)}`, 30, yPosition);
    yPosition += lineHeight;
    doc.text(`Total Contributions: ${formatCurrency(data.totalContributions)}`, 30, yPosition);
    yPosition += lineHeight;
    doc.text(`Interest Earned: ${formatCurrency(data.interestEarned)}`, 30, yPosition);
    yPosition += lineHeight * 1.5;

    // Inflation Adjusted Values
    if (data.realValue) {
      doc.setFont(undefined, 'bold');
      doc.text("Inflation Adjusted Values", 20, yPosition);
      yPosition += lineHeight;
      doc.setFont(undefined, 'normal');
      doc.text(`Final Amount: ${formatCurrency(data.realValue)}`, 30, yPosition);
      yPosition += lineHeight;
      if (data.realContributions) {
        doc.text(`Total Contributions: ${formatCurrency(data.realContributions)}`, 30, yPosition);
        yPosition += lineHeight;
      }
      if (data.realInterestEarned) {
        doc.text(`Interest Earned: ${formatCurrency(data.realInterestEarned)}`, 30, yPosition);
        yPosition += lineHeight;
      }
    }

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
