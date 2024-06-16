import React from "react";
import LogoZahaSvg from "./LogoZahaSvg";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <LogoZahaSvg />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Cụm rạp
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="NavFooter_text_a">
                    Cụm rạp CGV
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="NavFooter_text_a">
                    Cụm rạp Lotte
                  </a>
                </li>
                <li>
                  <a href="#" className="NavFooter_text_a">
                    Cụm rạp Beta
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Quy định
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="NavFooter_text_a">
                    Giá vé
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="NavFooter_text_a">
                    Chính sách bảo vệ
                  </a>
                </li>
                <li>
                  <a href="#" className="NavFooter_text_a">
                    Điều khoản, Quy định
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Thông tin
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="NavFooter_text_a">
                    Thông báo
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="NavFooter_text_a">
                    FAQs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="NavFooter_text_a">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="NavFooter_text_a">
                    Góp ý
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 sm:mx-auto border-stone-800 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-stone-300">
            © 2024{" "}
            <a href="#" className="NavFooter_text_a">
              ZahaVietnam™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="NavFooter_text_a">
              <i class="fab fa-facebook"></i>{" "}
            </a>
            <a href="#" className="NavFooter_text_a pl-6">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="#" className="NavFooter_text_a pl-6">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="NavFooter_text_a pl-6">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
