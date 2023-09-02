"strict-mode";

import { panel } from "./assets.js";

const array = [
  {
    title: "Experience",
    description:
      "With years of experience in the security industry, we have a proven track record of delivering top-notch security solutions to our clients.",
  },
  {
    title: "Professionalism",
    description:
      "Our security personnel undergo rigorous training to ensure they meet the highest standards of professionalism and competence.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest security technology to enhance our services,providing you with the most advanced security solutions available.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your safety and satisfaction are our top priorities. We work closely with you to understand your unique needs and provide a personalized security plan.",
  },
  {
    title: "24/7 Support",
    description:
      " Security concerns can arise at any time, which is why we offer round-the-clock support to address your needs promptly.",
  },
];

document.querySelector(".panel-wrapper").innerHTML = panel(array);
