import MakeDifference from "@/app/(pages)/(main)/donate/(donate-component)/MakeDifference";
import DonationHelp from "@/app/(pages)/(main)/donate/(donate-component)/DonationHelp";
import Donation from "@/components/donation/Donation";
import OtherDonations from "@/app/(pages)/(main)/donate/(donate-component)/OtherDonations";
import Transparency from "@/app/(pages)/(main)/donate/(donate-component)/Transparency";

export const metadata = {
  title: "Faça uma Doação",
  description:
    "Faça uma doação e ajude a ONG Patas Felizes a cumprir sua missão de resgate e cuidados de animais abandonados.",
  keywords: ["apoie", "doar", "fornecer", "ajuda", "apadrinhar"],
};

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
