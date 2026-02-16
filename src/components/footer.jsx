import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-1 mt-5  footer-custom">
        <div className="container">
          <div className="row">

            
            <div className="col-md-3 mb-4">
              <h3 className="fw-bold text-light">NewsFlash</h3>
              <p className="small">
                Your daily source for breaking news, trending stories, and
                in-depth coverage from around the world.
              </p>
            </div>

            
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Categories</h5>
              <ul className="list-unstyled">
                <li><a href="/business" className="footer-link">Business</a></li>
                <li><a href="/entertainment" className="footer-link">Entertainment</a></li>
                <li><a href="/health" className="footer-link">Health</a></li>
                <li><a href="/science" className="footer-link">Science</a></li>
                <li><a href="/sports" className="footer-link">Sports</a></li>
                <li><a href="/technology" className="footer-link">Technology</a></li>
              </ul>
            </div>

          
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Company</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="mailto:pratikgarad9822@gmail.com" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms & Conditions</a></li> 
                <li><a href="#" className="footer-link">FAQs</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Subscribe to our Newsletter</h5>
              <p className="small">Get daily headlines directly in your inbox.</p>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="contact-details"> 
                     <p className="mt-2 mb-0">
  <a 
    href="call:+918329653229" 
    className="email-link d-inline-flex align-items-center"
  >
    <i className="bi bi-telephone-fill me-2"></i>+91 8329653229
  </a>
</p>
                <p className="mt-2 mb-0">
  <a 
    href="mailto:pratikgarad9822@gmail.com" 
    className="email-link d-inline-flex align-items-center"
  >
    <i className="bi bi-envelope-fill me-2"></i>
    pratikgarad9822@gmail.com
  </a>
</p>

                 
              </div>
            </div>

          </div>

          <hr className="border-secondary" />

          {/* Bottom Footer */}
          <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
            <p className="mb-2 mb-md-0 small">
              © {new Date().getFullYear()} NewsFlash. All rights reserved.
            </p>

            {/* Social Links */}
            <div>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
