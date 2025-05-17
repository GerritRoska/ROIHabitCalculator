
const ReferralBanner = () => {
  return (
    <div className="mt-4 p-4 bg-green-100 rounded-md">
      <p className="text-sm text-green-700">
        Like this calculator?{" "}
        <a
          href="https://acorns.com/share/?shareable_code=QM3PVD3&first_name=Gerrit"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-green-900 hover:underline"
        >
          Sign up for Acorns using my referral link!
        </a>
      </p>
    </div>
  );
};

export default ReferralBanner;
