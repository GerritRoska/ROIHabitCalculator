import React from 'react';
import { Button } from "@/components/ui/button";
import { GiftIcon } from "lucide-react";
import { trackAcornsClick } from '@/lib/utils'; // Assuming you'll create this utility

const ACORNS_REFERRAL_URL = "https://acorns.com/share/?shareable_code=QM3PVD3&first_name=Gerrit";

export default function ReferralButton() {
  return (
    <Button
      variant="outline"
      className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
      onClick={() => {
        trackAcornsClick();
        window.open(ACORNS_REFERRAL_URL, '_blank');
      }}
    >
      <GiftIcon className="w-4 h-4 mr-2" />
      Get $5 Bonus with Acorns
    </Button>
  );
}