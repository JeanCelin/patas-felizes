import MakeDifference from "@/componentes/comp-pages/donate/make-difference/makeDifference";
import DonationHelp from "@/componentes/comp-pages/donate/donation-help/DonationHelp";
import Donation from "@/componentes/comp-pages/geral/donation/Donation";
import OtherDonations from "@/componentes/comp-pages/geral/other-donations/OtherDonations";
export default function Donate() {
  return (
    <div>
      <MakeDifference />
      <DonationHelp />
      <Donation />
      <OtherDonations />
    </div>
  );
}
