// components/ResumeDownloadButton.tsx
import React, { useState } from "react";
import { Download, FileText, ChevronDown } from "lucide-react";
import { useResumeDownload } from "./ResumeGenerator"; // Import the useResumeDownload hook
import "./ResumeDownloadButton.css";

// Define the props interface for the component
interface ResumeDownloadButtonProps {
  portfolioData: any;
  isMobile?: boolean; // Optional prop
}

const ResumeDownloadButton: React.FC<ResumeDownloadButtonProps> = ({
  portfolioData,
  isMobile = false,
}) => {
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);
  const { downloadPDF, downloadDOCX } = useResumeDownload(portfolioData);

  const handlePDFDownload = (): void => {
    downloadPDF();
    setIsDownloadOpen(false);
  };

  const handleDOCXDownload = (): void => {
    downloadDOCX();
    setIsDownloadOpen(false);
  };

  if (isMobile) {
    return (
      <div className="resume-download-mobile">
        <button
          onClick={() => setIsDownloadOpen(!isDownloadOpen)}
          className="mobile-download-btn"
          aria-label="Download Resume"
        >
          <Download className="download-icon" />
        </button>

        {isDownloadOpen && (
          <div className="mobile-dropdown">
            <button onClick={handlePDFDownload} className="dropdown-item">
              <FileText className="file-icon pdf-icon" />
              <div className="item-content">
                <div className="item-title">PDF</div>
                <div className="item-subtitle">Formatted</div>
              </div>
            </button>
            <button onClick={handleDOCXDownload} className="dropdown-item">
              <FileText className="file-icon docx-icon" />
              <div className="item-content">
                <div className="item-title">DOCX</div>
                <div className="item-subtitle">Editable</div>
              </div>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="resume-download-desktop">
      <button
        onClick={() => setIsDownloadOpen(!isDownloadOpen)}
        className="desktop-download-btn"
        aria-expanded={isDownloadOpen}
        aria-haspopup="true"
      >
        <Download className="download-icon" />
        Resume
        <ChevronDown
          className={`chevron-icon ${isDownloadOpen ? "rotated" : ""}`}
        />
      </button>

      {isDownloadOpen && (
        <div className="desktop-dropdown">
          <button onClick={handlePDFDownload} className="dropdown-item">
            <FileText className="file-icon pdf-icon" />
            <div className="item-content">
              <div className="item-title">Download PDF</div>
              <div className="item-subtitle">Formatted resume</div>
            </div>
          </button>
          <button onClick={handleDOCXDownload} className="dropdown-item">
            <FileText className="file-icon docx-icon" />
            <div className="item-content">
              <div className="item-title">Download DOCX</div>
              <div className="item-subtitle">Editable document</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeDownloadButton;
