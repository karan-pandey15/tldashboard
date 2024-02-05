import Link from "next/link";
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import addrupeelogo from "../../../../public/addrupeelogo1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section style={{ backgroundColor: "#edede9" }} className="py-3">
      <footer
        style={{ borderTop: "1px solid gray" }}
        className="container d-flex flex-wrap justify-content-between align-items-center"
      >
        <div className="col-md-4 d-flex align-items-center">
          <Link
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <Image
              style={{ width: "50px", height: "50px" }}
              src={addrupeelogo}
              alt="..."
            />
          </Link>
          <span
            style={{ fontWeight: 600 }}
            className="mb-3 mb-md-0 text-body-secondary"
          >
            © 2024 Company, Inc
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link
              style={{
                textDecoration: "none",
                fontSize: "28px",
                color: "#1b263b",
              }}
              href="https://www.youtube.com/channel/UCTSA6p0niTmhK1yaK2qDwPA"
            >
              <FaYoutube />
            </Link>
          </li>
          <li className="ms-3">
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                color: "#1b263b",
              }}
              href="https://www.instagram.com/addrupeefinance"
            >
              <PiInstagramLogoFill />
            </Link>
          </li>
          <li className="ms-3">
            <Link
              style={{
                textDecoration: "none",
                fontSize: "25px",
                color: "#1b263b",
              }}
              href="https://www.facebook.com/people/Add-Rupee/100083152737651/?is_tour_dismissed=true"
            >
              <FaFacebookSquare />
            </Link>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
