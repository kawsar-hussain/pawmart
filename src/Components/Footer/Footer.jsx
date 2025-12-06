import React from "react";

const Footer = () => {
  return (
    <div className="px-0 lg:px-20 bg-[#2d1801] ">
      {/* Main footer */}
      <footer className="footer sm:footer-horizontal text-white p-10">
        {/* Adoption Links */}
        <nav>
          <h6 className="text-white text-xl font-bold mb-2">Adoption</h6>
          <a className="link link-hover">Dogs</a>
          <a className="link link-hover">Cats</a>
          <a className="link link-hover">Birds</a>
          <a className="link link-hover">Small Pets</a>
        </nav>

        {/* Products */}
        <nav>
          <h6 className="text-white text-xl font-bold mb-2">Pet Products</h6>
          <a className="link link-hover">Pet Food</a>
          <a className="link link-hover">Toys</a>
          <a className="link link-hover">Accessories</a>
          <a className="link link-hover">Pet Care</a>
        </nav>

        {/* Useful Links */}
        <nav>
          <h6 className="text-white text-xl font-bold mb-2">Useful Links</h6>
          <a className="link link-hover" href="/">
            Home
          </a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>
      </footer>

      {/* Bottom footer */}
      <footer className="footer flex lg:flex-row flex-col justify-between items-center text-white border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <div className="bg-white rounded p-1 lg:w-[50px] w-12">
            <img src="/logo.png" alt="PawMart Logo" className="" />
          </div>
          <div className="self-start ml-2">
            <p className="text-xl font-bold mb-1">PawMart</p>
            <span className="text-gray-200">PawMart connects local pet owners and buyers for adoption and pet care products.</span>
          </div>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer">
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm10.25 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>

      <hr className="text-gray-200" />

      <p className="text-gray-200 text-center py-5">
        &copy; 2025 PawMart.
        <span className="block text-sm text-gray-300">All rights reserved.</span>
      </p>
    </div>
  );
};

export default Footer;
