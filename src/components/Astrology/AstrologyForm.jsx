"use client";
import React, { useState } from "react";
import FormField from "./FormField";

const AstrologyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    gender: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    birthHour: "",
    birthMinute: "",
    birthPeriod: "",
    timezone: "GMT +7",
    birthplace: "",
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const calculate = () => {
    // Calculation logic to be implemented
  };

  const generateOptions = (count, padStart = true) => {
    return Array.from({ length: count }, (_, i) => ({
      value: i + 1,
      label: padStart
        ? (i + 1).toString().padStart(2, "0")
        : (i + 1).toString(),
    }));
  };

  return (
    <section className="p-10 rounded bg-neutral-900 bg-opacity-50 max-w-[1200px] w-[100%]">
      <div className="flex flex-col gap-6">
        <FormField
          label="Nhập họ tên khai sinh:"
          placeholder="Nhập đủ họ và tên khai sinh"
          value={formData.name}
          onChange={handleChange("name")}
          className="w-full"
        />

        <div className="flex flex-col gap-2.5">
          <label className="text-sm font-bold tracking-widest text-white">
            Tên thường dùng nếu có (Vd: Dyan, Ngọc Nhím,...)
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Nhập tên thường dùng nếu có"
              className="px-5 h-10 text-sm tracking-widest bg-black flex-[grow] text-neutral-400"
              value={formData.nickname}
              onChange={handleChange("nickname")}
            />
            <select
              className="px-5 h-10 text-sm tracking-widest bg-black text-neutral-400 w-[150px]"
              value={formData.gender}
              onChange={handleChange("gender")}
            >
              <option value="">Giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-sm font-bold tracking-widest text-white">
            Ngày/tháng/năm sinh dương lịch
          </label>
          <div className="flex gap-4">
            <select
              className="px-5 h-10 text-sm tracking-widest bg-black text-neutral-400 w-[150px]"
              value={formData.birthDay}
              onChange={handleChange("birthDay")}
            >
              <option value="">Ngày</option>
              {generateOptions(31).map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <select
              className="px-5 h-10 text-sm tracking-widest bg-black text-neutral-400 w-[150px]"
              value={formData.birthMonth}
              onChange={handleChange("birthMonth")}
            >
              <option value="">Tháng</option>
              {generateOptions(12).map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Năm sinh"
              className="px-5 h-10 text-sm tracking-widest bg-black text-neutral-400 w-[150px]"
              value={formData.birthYear}
              onChange={handleChange("birthYear")}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-sm font-bold tracking-widest text-white">
            Giờ sinh
          </label>
          <div className="flex gap-4">
            <select
              className="px-5 h-10 text-sm tracking-widest bg-black text-neutral-400 w-[150px]"
              value={formData.birthHour}
              onChange={handleChange("birthHour")}
            >
              <option value="">Giờ</option>
              {generateOptions(12).map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <select
              className="px-5 h-10 text-sm tracking-widest bg-black text-neutral-400 w-[150px]"
              value={formData.birthMinute}
              onChange={handleChange("birthMinute")}
            >
              <option value="">Phút</option>
              {generateOptions(60).map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <select
              className="px-5 h-10 text-sm tracking-widest bg-black text-neutral-400 w-[150px]"
              value={formData.birthPeriod}
              onChange={handleChange("birthPeriod")}
            >
              <option value="">Buổi</option>
              <option value="AM">Sáng</option>
              <option value="PM">Chiều</option>
            </select>
          </div>
        </div>

        <FormField
          label="Múi giờ"
          type="select"
          value={formData.timezone}
          onChange={handleChange("timezone")}
          options={[
            { value: "GMT +7", label: "GMT +7" },
            { value: "GMT +8", label: "GMT +8" },
            { value: "GMT +9", label: "GMT +9" },
          ]}
          className="w-[150px]"
        />

        <FormField
          label="Nơi sinh"
          placeholder="Nhập nơi sinh"
          value={formData.birthplace}
          onChange={handleChange("birthplace")}
          className="w-full"
        />

        <button
          className="self-center mt-5 cursor-pointer text-lg text-white bg-yellow-600 h-[50px] tracking-[2.7px] w-[250px]"
          onClick={calculate}
        >
          Tạo Bản Đồ Sao
        </button>
      </div>
    </section>
  );
};

export default AstrologyForm;
