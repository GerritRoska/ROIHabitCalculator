
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
  title = 'Habit ROI Calculator',
  text = 'Calculate how much your habits could be worth if invested!',
  url = window.location.href,
  className = ''
}: ShareButtonProps) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        text,
        url
      });
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
