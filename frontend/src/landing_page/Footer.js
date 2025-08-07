import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(4, 4, 4, 1)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/logopp.png" style={{ width: "95%" }} />
            <p>
              &copy; 2024,TradeSquare Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">TradeSquare.tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Zerodha cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            <h4>Contach information</h4>
            <ul>
              <li>
                <p>contach no : 9650657991</p>
              </li>
              <li>
                <p>Gmail: Parasdhankhar45@gmail.com</p>
              </li>
              <li>
                <p>hit me on insta @parass</p>
              </li>
            </ul>
          </p>

          
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;