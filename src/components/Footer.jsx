import React from "react";
var d = new Date();
var curr_year = d.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {curr_year}</p>
    </footer>
  );
}
export default Footer;