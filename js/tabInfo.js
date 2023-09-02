"strict mode";

import { panel } from "./assets.js";

const serviceInfo = [
  {
    title: "Canine Security",
    description:
      "Trained Canine Units: Our highly skilled and professional K-9 teams provide an unparalleled level of security. With their keen senses and exceptional training, our dogs are a powerful deterrent and a valuable asset in any security scenario.",
  },
  {
    title: "Residential Security",
    description:
      "Peace of Mind for Your Home: Your home is your sanctuary, and we're here to help you protect it. Our residential security services are tailored to your specific needs, ensuring you and your loved ones can sleep soundly at night.",
  },
  {
    title: "Commercial Security",
    description:
      "Protecting Your Business: We know how important your business is to you. Our expert security teams are trained to secure commercial properties, providing a safe environment for your employees, customers, and assets.",
  },
  {
    title: "Event Security",
    description:
      "Seamless Event Protection: From private parties to large-scale events, we have the experience and expertise to ensure your event goes off without a hitch. Our event security services are designed to keep your guests safe and your event running smoothly.",
  },
  {
    title: "Professional Bouncers",
    description:
      "Maintaining Order: Our bouncers are not just about physical presence. They are trained to de-escalate situations and handle crowd management with professionalism, ensuring a safe and enjoyable atmosphere.",
  },
  {
    title: "Specialized Security Solutions",
    description:
      "Customized Security: At [Company Name], we believe that one size doesn't fit all. That's why we offer specialized security solutions tailored to your unique needs. Whether you require executive protection, transportation security, or any other specialized service, we've got you covered.",
  },
];

document.querySelector(".tab-panel").innerHTML = panel(serviceInfo);
