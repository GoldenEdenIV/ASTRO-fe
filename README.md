# Dự án Website Tra Cứu Thần Số Học & Chiêm Tinh - Astro Numerology

Đây là dự án website tra cứu thần số học và chiêm tinh học được xây dựng với tích hợp **React**, **Vite**, **TailwindCSS** và **Node.js**. Dự án tập trung vào việc cung cấp dịch vụ tra cứu và phân tích thần số học, chiêm tinh cá nhân với giao diện hiện đại và trải nghiệm người dùng tối ưu.

## Giới thiệu

Website cho phép người dùng tra cứu thông tin thần số học dựa trên ngày sinh, tên tuổi, phân tích biểu đồ chiêm tinh, xem tử vi hàng ngày/tháng/năm. Hệ thống tích hợp xác thực người dùng và lưu trữ lịch sử tra cứu cá nhân.

## Công nghệ sử dụng

Dự án được xây dựng với các công nghệ hiện đại và mạnh mẽ:

* **Framework chính:**
    * [**React 18**](https://react.dev/): Thư viện giao diện người dùng cho các component tương tác.
    * [**Vite**](https://vitejs.dev/): Công cụ build nhanh và hiệu quả.
    * [**Node.js**](https://nodejs.org/): Runtime JavaScript cho backend và API.

* **Styling:**
    * [**Tailwind CSS**](https://tailwindcss.com/): Framework CSS utility-first cho thiết kế nhanh chóng và responsive.
    * [**@tailwindcss/vite**](https://tailwindcss.com/docs/guides/vite): Plugin Vite cho Tailwind CSS.
    * [**PostCSS**](https://postcss.org/): Công cụ xử lý CSS.

* **HTTP Client:**
    * [**Axios**](https://axios-http.com/): Thư viện HTTP client để giao tiếp với API thần số học và chiêm tinh.

* **Xác thực & Bảo mật:**
    * **JWT (JSON Web Tokens):** Quản lý phiên đăng nhập người dùng.
    * **bcrypt:** Mã hóa mật khẩu người dùng.

## Yêu cầu hệ thống

* [Node.js](https://nodejs.org/) (phiên bản v18.x trở lên)
* npm hoặc yarn hoặc pnpm

## Hướng dẫn cài đặt

### 1. Cài đặt các dependencies chính

```bash
# Cài đặt Vite
npm install vite

# Cài đặt Tailwind CSS và các plugin
npm install tailwindcss @tailwindcss/vite
npm install tailwindcss @tailwindcss/postcss postcss

# Cài đặt Axios cho HTTP requests
npm install axios

# Cài đặt các thư viện bổ sung
npm install @astrojs/react @astrojs/tailwind
npm install react react-dom
npm install @types/react @types/react-dom
```

### 2. Cài đặt dependencies cho backend/API

```bash
# Cài đặt Node.js dependencies cho server
npm install express cors dotenv
npm install jsonwebtoken bcryptjs


### 5. Khởi chạy dự án

```bash
# Chạy ở chế độ development
npm run dev

## Tính năng chính

### 1. Xác thực người dùng
* **Đăng ký tài khoản:** Với email, mật khẩu và thông tin cá nhân
* **Đăng nhập/Đăng xuất:** Xác thực JWT
* **Quản lý profile:** Cập nhật thông tin cá nhân
* **Lịch sử tra cứu:** Lưu trữ các phiên tra cứu trước đó

### 2. Thần số học (Numerology)
* **Tính toán số chủ đạo:** Dựa trên ngày sinh
* **Phân tích tên tuổi:** Tính toán dựa trên tên đầy đủ
* **Biểu đồ thần số:** Hiển thị các con số quan trọng
* **Dự đoán theo năm:** Thần số học cho năm hiện tại
* **Tương thích số học:** So sánh độ hợp giữa các con số

### 3. Chiêm tinh học (Astrology)
* **Biểu đồ sao:** Tính toán dựa trên ngày, giờ, địa điểm sinh
* **12 cung hoàng đạo:** Thông tin chi tiết về từng cung

### 4. Giao diện người dùng
* **Responsive design:** Tối ưu cho mọi thiết bị
* **Dark/Light mode:** Chế độ sáng/tối
* **Animations:** Hiệu ứng mượt mà với CSS/JS
* **Loading states:** Trạng thái loading cho API calls

## Roadmap phát triển

1. **Phase 1:** Hoàn thiện xác thực và cơ sở dữ liệu
2. **Phase 2:** Phát triển tính năng thần số học cơ bản
3. **Phase 3:** Tích hợp chiêm tinh học

## Đóng góp

Hoan nghênh mọi đóng góp cho dự án. Vui lòng tạo pull request hoặc issue trên GitHub repository.

## License

MIT License - Xem file LICENSE để biết thêm chi tiết.