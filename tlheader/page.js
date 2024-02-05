import React from "react";
import Image from "next/image";
import { BsJustify } from "react-icons/bs";
import AddrupeeText from "../../../../public/addrupeeText.png";

function TlHeader({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <Image src={AddrupeeText} style={{ height: 50, width: 140 }} />
      </div>

      <div className="menu-icon">
        <button
          className="py-2 px-2 button_vision-class"
          style={{
            border: "none",
          }}
        >
          <BsJustify className="icon" onClick={OpenSidebar} />
        </button>
      </div>
    </header>
  );
}

export default TlHeader;
