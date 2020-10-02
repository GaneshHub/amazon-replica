import React from "react";
import "../css/SubHeader.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { useStateValue } from "../StateProvider";

const SubHeader = () => {
    const [{user}, dispatch] = useStateValue();
  return (
    <div className="subHeader">
      <div className="subHeader_nav">
        <div className="subHeader_location">
          <LocationOnOutlinedIcon />
        </div>
        <div className="subHeader_option">
          <span className="subHeader_optionLineOne">Deliver to {user ? user.email : ''}</span>
          <span className="subHeader_optionLineTwo">India</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
