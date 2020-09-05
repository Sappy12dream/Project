import React from "react";
import { MdSearch } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

function Header() {
  return (
    <nav className="container">
      <div className="row space-between v-center">
        <div className="nav-logo">Project Manager</div>
        <div className="nav-search">
          <input type="text" placeholder="Type here..." />
          <MdSearch/>
        </div>
        <div className="nav-add">
            <button className="row">
<MdAddCircle/>
<p>Add project</p>
</button>
        </div>
        <div className="nav-avatar">
<MdPermIdentity/>
        </div>
      </div>
    </nav>
  );
}

export default Header;
