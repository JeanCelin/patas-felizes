import MakeDifference from "@/app/(pages)/(main)/donate/(donate-component)/MakeDifference";
import DonationHelp from "@/app/(pages)/(main)/donate/(donate-component)/DonationHelp";
import Donation from "@/componentes/donation/Donation";
import OtherDonations from "@/app/(pages)/(main)/donate/(donate-component)/OtherDonations";
import Transparency from "@/app/(pages)/(main)/donate/(donate-component)/Transparency";
export default function Donate() {
  return (
    <div>
      <MakeDifference />
      <DonationHelp />
      <OtherDonations />
      <Donation />
      <Transparency />
    </div>
  );
}
