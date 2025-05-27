"use client";
import React, { useState } from "react";
import FormInput from "./FormInput";
import NumerologyNotes from "./NumerologyNotes";

const NumerologyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nickname: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
  });
  
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
    
    // Hide alert when user starts typing again
    if (showAlert) {
      setShowAlert(false);
    }
  };

  const calculateNumerology = () => {
    if (
      !formData.fullName ||
      !formData.birthDay ||
      !formData.birthMonth ||
      !formData.birthYear
    ) {
      setShowAlert(true);
      return;
    }
    
    // Continue with calculation if form is complete
    setShowAlert(false);
    // Your numerology calculation logic here
  };

  const genderOptions = [
    { value: "", label: "Chọn giới tính" },
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" },
  ];

  return (
    <div className="bg-[#131114] bg-opacity-[0.5] rounded-[8px] p-[40px]">
      <div className="space-y-[24px]">
        {showAlert && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-4 flex items-center justify-between">
            <p>Vui lòng điền đầy đủ thông tin trước khi tra cứu!</p>
            <button 
              onClick={() => setShowAlert(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        )}

        <FormInput
          label="Nhập họ tên khai sinh:"
          placeholder="Nhập đủ họ và tên khai sinh"
          value={formData.fullName}
          onChange={handleInputChange("fullName")}
        />

        <FormInput
          label="Tên thường dùng nếu có (Vd: Dyan, Ngọc Nhím,...):"
          placeholder="Nhập tên thường dùng nếu có"
          value={formData.nickname}
          onChange={handleInputChange("nickname")}
        />

        <div className="grid grid-cols-4 gap-[16px]">
          <FormInput
            label="Ngày sinh"
            type="number"
            placeholder="Ngày"
            value={formData.birthDay}
            onChange={handleInputChange("birthDay")}
            min="1"
            max="31"
          />

          <FormInput
            label="Tháng sinh"
            type="number"
            placeholder="Tháng"
            value={formData.birthMonth}
            onChange={handleInputChange("birthMonth")}
            min="1"
            max="12"
          />

          <FormInput
            label="Năm sinh"
            type="number"
            placeholder="Năm"
            value={formData.birthYear}
            onChange={handleInputChange("birthYear")}
            min="1900"
            max="2099"
          />

          <FormInput
            label="Giới tính"
            type="select"
            value={formData.gender}
            onChange={handleInputChange("gender")}
            options={genderOptions}
          />
        </div>

        <button
          onClick={calculateNumerology}
          className="w-full h-[50px] bg-[#A81B8C] cursor-pointer rounded-[4px] text-[20px] font-semibold tracking-[2px] flex items-center justify-center gap-[8px]"
        >
          <img
            src="/9841722.png"
            alt="Search"
            className="w-[25px] h-[25px]"
          />
          <span>Tra cứu</span>
        </button>

        <NumerologyNotes />
      </div>
    </div>
  );
};

export default NumerologyForm;