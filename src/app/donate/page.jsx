import MakeDifference from "@/componentes/comp-pages/donate/make-difference/MakeDifference";
import DonationHelp from "@/componentes/comp-pages/donate/donation-help/DonationHelp";
import Donation from "@/componentes/comp-pages/geral/donation/Donation";
import OtherDonations from "@/componentes/comp-pages/donate/other-donations/OtherDonations";
import Transparency from "@/componentes/comp-pages/donate/transparency/Transparency";
export default function Donate() {
  return (
    <div>
      <MakeDifference />
      <DonationHelp />
      <OtherDonations />
      <Donation />
    </div>
  );
}
