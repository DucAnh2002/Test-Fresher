const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>
          II. Câu hỏi phỏng vấn về cấu trúc dữ liệu cơ bản dành cho người mới
          bắt đầu
        </h1>
        <h3>1. Cấu trúc dữ liệu (Data Structure) là gì?</h3>
        <p>
          Cấu trúc dữ liệu (Data Structure) là cách tổ chức, lưu trữ và quản lý
          dữ liệu trong bộ nhớ máy tính để có thể truy xuất và xử lý dữ liệu một
          cách hiệu quả. Mỗi cấu trúc dữ liệu được thiết kế để phục vụ cho những
          mục đích cụ thể, giúp tối ưu hóa thời gian và tài nguyên khi thao tác
          với dữ liệu, như chèn, xóa, tìm kiếm, và sắp xếp.
        </p>
        <h3>
          2. Mô tả các loại Cấu trúc dữ liệu? Sau đây là các loại cấu trúc dữ
          liệu:
        </h3>
        <p>
          Danh sách: Một tập hợp các mục liên quan được liên kết tới các mục dữ
          liệu trước đó và/hoặc sau đó. Mảng: Một tập hợp các giá trị giống
          nhau. Bản ghi: Một tập hợp các trường, mỗi trường chứa dữ liệu từ một
          kiểu dữ liệu duy nhất. Cây: Một cấu trúc dữ liệu tổ chức dữ liệu theo
          khuôn khổ phân cấp. Dạng cấu trúc dữ liệu này tuân theo thứ tự chèn,
          xóa và sửa đổi mục dữ liệu. Bảng: Dữ liệu được lưu dưới dạng hàng và
          cột. Chúng tương tự như bản ghi ở chỗ kết quả hoặc sự thay đổi của dữ
          liệu được phản ánh trên toàn bộ bảng.
        </p>
        <h3>3. Cấu trúc dữ liệu tuyến tính là gì? Hãy nêu một vài ví dụ.</h3>{" "}
        <p>
          Cấu trúc dữ liệu tuyến tính là cấu trúc trong đó các phần tử được sắp
          xếp theo thứ tự liên tiếp, mỗi phần tử chỉ có một phần tử kề trước và
          một phần tử kề sau (trừ phần tử đầu và phần tử cuối). Ví dụ về cấu
          trúc dữ liệu tuyến tính là Mảng (Array), Ngăn xếp (Stack), Chuỗi, Hàng
          đợi (Queue) và Danh sách liên kết (Linked List).
        </p>
        <h3>
          4. Một số ứng dụng của Cấu trúc dữ liệu là gì? (đây là một trong những
          câu hỏi thường gặp nhất)
        </h3>
        <p>
          {" "}
          Cấu trúc dữ liệu được ứng dụng trong nhiều lĩnh vực: Phân tích số, hệ
          điều hành, AI, thiết kế trình biên dịch, quản lý cơ sở dữ liệu, đồ
          họa, phân tích thống kê và mô phỏng, . . .{" "}
        </p>
      </div>
      Ha Duc Anh
    </>
  );
};

export default Home;
