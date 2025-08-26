import {
  FaCommentAlt,
  FaExpandArrowsAlt,
  FaShoppingBag,
  FaUserAlt,
  FaUserEdit,
} from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { HiMiniBars3CenterLeft, HiNewspaper } from "react-icons/hi2";
import { IoDocumentTextSharp, IoTimerOutline } from "react-icons/io5";
import { FaSliders } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { FcFaq } from "react-icons/fc";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

export const sideBarFaq = [
  {
    id: 1,
    icon: <FaUserAlt />,
    heading: "Users",
    ans: [{ answ: "View User", link: "view_user" }],
  },
  {
    id: 2,
    icon: <FaCommentAlt />,
    heading: "Enquirys",
    ans: [
      { answ: "Contact Enquiry", link: "contact_enquiry" },
      { answ: "Newsletters", link: "newsletters" },
    ],
  },
  {
    id: 3,
    icon: <MdWaterDrop />,
    heading: "Colors",
    ans: [
      { answ: "Add Color", link: "add_color" },
      { answ: "View Color", link: "view_color" },
    ],
  },
  {
    id: 4,
    icon: <FaExpandArrowsAlt />,
    heading: "Materials",
    ans: [
      { answ: "Add Material", link: "add_material" },
      { answ: "View Material", link: "view_material" },
    ],
  },
  {
    id: 5,
    icon: <HiMiniBars3CenterLeft />,
    heading: "Parent Categorys",
    ans: [
      { answ: "Add Category", link: "add_category" },
      { answ: "View Category", link: "view_category" },
    ],
  },
  {
    id: 6,
    icon: <HiMiniBars3CenterLeft />,
    heading: "Sub Categorys",
    ans: [
      { answ: "Add Sub Category", link: "add_sub_category" },
      { answ: "View Sub Category", link: "view_sub_category" },
    ],
  },
  {
    id: 7,
    icon: <HiMiniBars3CenterLeft />,
    heading: "Sub Sub Categorys",
    ans: [
      { answ: "Add Sub Sub Category", link: "add_sub_sub_category" },
      { answ: "View Sub Sub Category", link: "view_sub_sub_category" },
    ],
  },
  {
    id: 8,
    icon: <FaShoppingBag />,
    heading: "Products",
    ans: [
      { answ: "Add Product", link: "add_product" },
      { answ: "View Product", link: "view_product" },
    ],
  },
  {
    id: 9,
    icon: <IoTimerOutline />,
    heading: "Why Choose Us",
    ans: [
      { answ: "Add Why Choose Us", link: "add_why_choose_us" },
      { answ: "View Why Choose Us", link: "view_why_choose_us" },
    ],
  },
  {
    id: 10,
    icon: <HiNewspaper />,
    heading: "Orders",
    ans: [{ answ: "Orders", link: "orders" }],
  },
  {
    id: 11,
    icon: <FaSliders />,
    heading: "Sliders",
    ans: [
      { answ: "Add Slider", link: "add_slider" },
      { answ: "View Slider", link: "view_slider" },
    ],
  },
  {
    id: 12,
    icon: <RiSendPlaneFill />,
    heading: "Country",
    ans: [
      { answ: "Add Country", link: "add_country" },
      { answ: "View Country", link: "view_country" },
    ],
  },
  {
    id: 13,
    icon: <FaUserEdit />,
    heading: "Testimonials",
    ans: [
      { answ: "Add Testimonial", link: "add_testimonials" },
      { answ: "View Testimonial", link: "view_testimonial" },
    ],
  },
  {
    id: 14,
    icon: <FcFaq />,
    heading: "Faqs",
    ans: [{ answ: "Add Faq", link: "add_faq" }, { answ: "View Faq", link: "view_feq" }],
  },
  {
    id: 15,
    icon: <IoDocumentTextSharp />,
    heading: "Terms & Conditions",
    ans: [{ answ: "Terms & Conditions", link: "terms" }],
  },
];

export const CardData = [
  {
    id: 1,
    head: "Total Properties",
    money: "26K",
    grow: "-12.4%",
    icon: <IoIosArrowRoundDown />,
    color: "bg-[#5956D3]",
  },
  {
    id: 2,
    head: "Total Localities",
    money: "$6,200",
    grow: "40.9%",
    icon: <IoIosArrowRoundUp />,
    color: "bg-[#2998FE]",
  },
  {
    id: 3,
    head: "Property Types",
    money: "2.49%",
    grow: "82.7%",
    icon: <IoIosArrowRoundUp />,
    color: "bg-[#FCB01E]",
  },
  {
    id: 3,
    head: " Happy Customers",
    money: "44K",
    grow: "-23.6%",
    icon: <IoIosArrowRoundDown />,
    color: "bg-[#E95353]",
  },
  {
    id: 3,
    head: "Website Visitors",
    money: "76K",
    grow: "94.6%",
    icon: <IoIosArrowRoundDown />,
    color: "bg-[#E95353]",
  },
];
