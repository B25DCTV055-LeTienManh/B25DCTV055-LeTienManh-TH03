# Bài thực hành 03 (N2) - Lập trình Web

**Họ và tên:** Lê Tiến Mạnh  
**Mã sinh viên:** B25DCTV055  
**Lớp:** Trí tuệ nhân tạo vạn vật (AIoT - D25) - PTIT  

## Cấu trúc thư mục
- `part-a-class/`: Ứng dụng Sổ chi tiêu viết bằng React Class Component.
- `part-b-hooks/`: Ứng dụng Sổ chi tiêu viết lại bằng React Function Component và Hooks.

## Cách chạy dự án
Yêu cầu hệ thống: Node.js (Sinh viên đang sử dụng v24.20.0).
1. Clone repo này về máy.
2. Di chuyển vào từng thư mục (`cd part-a-class` hoặc `cd part-b-hooks`).
3. Chạy lệnh `npm install` để cài đặt dependencies (Vite, React).
4. Chạy lệnh `npm run dev` để khởi động server cục bộ.

## Phân tích sự khác biệt: Hooks đã giúp khắc phục thách thức của Class như thế nào?
1. **Quản lý State gọn gàng hơn:** Không cần khởi tạo `constructor(props)` cồng kềnh hay lạm dụng `this.setState`. Hook `useState` giúp bóc tách từng state riêng biệt.
2. **Loại bỏ sự lặp lại của Lifecycle:** Thay vì phải viết code chạy đồng hồ chia ra ở cả `componentDidMount` (bật timer) và `componentWillUnmount` (hủy timer), `useEffect` gom chung logic thiết lập và dọn dẹp (cleanup function) vào chung một khối mã (như trong custom hook `useClock`), chống rò rỉ bộ nhớ rất sạch sẽ.
3. **Tính tái sử dụng logic (Custom Hooks):** Ở phần B, các logic gọi API (MockAPI) và logic đồng hồ đếm giây được tách hẳn ra thành `useFetch` và `useClock`. Ở Class Component, việc này phải dùng HOCs (Higher-Order Components) rất phức tạp và gây "Hell of Wrappers" trong cây DOM.
4. **Xử lý Context dễ dàng:** Tránh được cấu trúc `.Consumer` render props khó đọc của Class nhờ `useContext` lấy theme trực tiếp.