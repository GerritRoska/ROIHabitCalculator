
import React from "react";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
}

const ShareButton = ({
  title = 'Habit ROI Calculator – Turn Coffee Into $1M',
  text = 'See how your small habits (like coffee) could grow into real wealth over time.',
  url = window.location.href,
  className = ''
}: ShareButtonProps) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url
        });
      } else {
        // Fallback for desktop
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Share failed:', err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleShare}
      className={className}
    >
      <Share2 className="h-5 w-5" />
    </Button>
  );
};

export default ShareButton;
