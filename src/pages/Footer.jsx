import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer">
        <div className="footerParent">
          <div className="footerChild2">
            <h5>Quick Links</h5>
            <a href="/">Temp</a> <br />
            <a href="/">Temp</a> <br />
            <a href="/">Temp</a> <br />
          </div>
        </div>
        <div className="footerChild3 pb-3">
          <small>Copyright&#9400; Apollo 2022</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
