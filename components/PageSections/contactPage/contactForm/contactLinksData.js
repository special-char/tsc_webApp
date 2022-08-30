import Email from "@public/icons/email.svg";
import Phone from "@public/icons/call.svg";
import Address from "@public/icons/location.svg";

const ContactLinkData = [
  {
    icon: <Email className="rounded-full" />,
    title: "Email",
    data: "sanfrancisco@education.com",
  },
  {
    icon: <Phone className="rounded-full" />,
    title: "Phone",
    data: "475-5856-1237",
  },
  {
    icon: <Address className="rounded-full" />,
    title: "Address",
    data: "51 Osceola Ln, San Francisco, California(CA), 94124",
  },
];

export default ContactLinkData;
