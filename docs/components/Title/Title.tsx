import * as React from "react";
import { LuAlignHorizontalJustifyCenter, LuComponent } from "react-icons/lu";
import { CiSaveDown1 } from "react-icons/ci";
import { MdOutlineNotes } from "react-icons/md";
import { VscSymbolInterface } from "react-icons/vsc";
import { SiPowerpages } from "react-icons/si";
import { IoMdList } from "react-icons/io";
import { FaDivide } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

interface Props {
  title: string;
  route: string;
  type?: string;
}

export const Title: React.FC<Props> = ({
  title,
  type,
  route,
}: Props): React.JSX.Element => {
  console.log(route);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
      }}
    >
      {title === "Welcome" ? (
        <LuAlignHorizontalJustifyCenter
          color="#c5c4c4"
          size={18}
          style={{ marginRight: 10 }}
        />
      ) : title === "Installation" ? (
        <CiSaveDown1 color="#c5c4c4" size={18} style={{ marginRight: 10 }} />
      ) : title === "Usage" ? (
        <MdOutlineNotes color="#c5c4c4" size={18} style={{ marginRight: 10 }} />
      ) : title === "Typings" ? (
        <VscSymbolInterface
          color="#c5c4c4"
          size={18}
          style={{ marginRight: 10 }}
        />
      ) : title === "Components" ? (
        <LuComponent color="#c5c4c4" size={18} style={{ marginRight: 10 }} />
      ) : route === "/Components/List" ? (
        <IoMdList color="#c5c4c4" size={18} style={{ marginRight: 10 }} />
      ) : route === "/Components/Section" ? (
        <FaDivide color="#c5c4c4" size={18} style={{ marginRight: 10 }} />
      ) : route === "/Typings/List" ? (
        <VscSymbolInterface
          color="#c5c4c4"
          size={18}
          style={{ marginRight: 10 }}
        />
      ) : route === "/Typings/List" ? (
        <VscSymbolInterface
          color="#c5c4c4"
          size={18}
          style={{ marginRight: 10 }}
        />
      ) : route === "/Typings/Actions" ? (
        <VscSymbolInterface
          color="#c5c4c4"
          size={18}
          style={{ marginRight: 10 }}
        />
      ) : route === "/Typings/Icon" ? (
        <VscSymbolInterface
          color="#c5c4c4"
          size={18}
          style={{ marginRight: 10 }}
        />
      ) : route === "/Typings/Section" ? (
        <VscSymbolInterface
          color="#c5c4c4"
          size={18}
          style={{ marginRight: 10 }}
        />
      ) : route === "/Typings/Modifiers" ? (
        <VscSymbolInterface
          color="#c5c4c4"
          size={18}
          style={{ marginRight: 10 }}
        />
      ) : null}
      <h1>{title}</h1>
    </div>
  );
};
