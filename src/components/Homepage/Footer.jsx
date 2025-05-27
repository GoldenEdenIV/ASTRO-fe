"use client";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 flex justify-between px-12 py-8 bg-gray-600 text-white max-md:px-4 max-md:py-6 max-sm:flex-col max-sm:p-5">
      {/* Left Column - Logo and Brand */}
      <div className="flex flex-col items-center w-1/4 max-md:w-full max-sm:mb-6">
        <div className="mb-2">
          <img
            src="/AstroIcon.png"
            className="object-contain w-40"
            alt="ASTRO SỐ Logo"
          />
        </div>
        <div className="text-4xl font-semibold tracking-wider text-center">
          ASTRO
        </div>
        <div className="text-4xl font-semibold tracking-wider text-center">
          SỐ
        </div>
      </div>

      {/* Middle Column - General Information */}
      <div className="w-5/12 px-4 max-md:w-1/2 max-sm:w-full max-sm:mb-6">
  <h2 className="mb-4 text-xl font-medium">Thông tin chung</h2>
  <ul className="text-sm leading-relaxed">
    <li>
      <a href="/chinh-sach-bao-mat" className="block">
        Chính sách bảo mật
      </a>
    </li>
    <li>
      <a href="/dieu-khoan-su-dung" className="block">
        Điều khoản sử dụng
      </a>
    </li>
    <li>
      <a href="/contact" className="block">
        Liên hệ
      </a>
    </li>
    <li>
      <a href="/ve-chung-toi" className="block">
        Về chúng tôi
      </a>
    </li>
    <li className="mb-2">
      <a href="#" className="block">
        Công cụ được tùy chỉnh theo ngày sinh và tên chính xác của bạn ... Vì vậy, hãy lưu ý: thông tin bạn sắp nhận được có thể khiến bạn bị sốc.
      </a>
    </li>
    <li>
      <a href="/doi-ngu-admin" className="block">
        Đội ngũ admin
      </a>
    </li>
  </ul>
</div>

      {/* Right Column - Contact Information */}
      <div className="w-1/3 px-4 max-md:w-1/2 max-sm:w-full">
        <h2 className="mb-4 text-xl font-medium">Liên hệ với chúng tôi</h2>
        <address className="text-sm leading-relaxed not-italic">
          97 Man Thiện, Phường Hiệp Phú, Q.9, TP Hồ Chí Minh
          <br />
          Điện thoại: 0123456789
          <br />
          Liên hệ hợp tác: TanPND@gmail.com
          <br />
          " Chưa ở đâu có trang web như chúng tôi,....."-Một vị khách hàng đã tra cứu
        </address>
      </div>
    </footer>
  );
};

export default Footer;