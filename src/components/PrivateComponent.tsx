import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MdNotificationsNone, MdAccountCircle } from "react-icons/md";

export const PrivateComponent: FC = () => {
  return (
    <>
      <NavLink className="navbarIcon notificationsIcon" to="">
        <MdNotificationsNone size="28px" />
      </NavLink>
      <NavLink className="navbarIcon" to="">
        <MdAccountCircle size="28px" />
      </NavLink>
    </>
  );
};
