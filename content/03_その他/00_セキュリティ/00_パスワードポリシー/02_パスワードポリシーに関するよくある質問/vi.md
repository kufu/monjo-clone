---
title: Câu hỏi thường gặp về Chính sách mật khẩu
---
Trang này giới thiệu về các câu hỏi thường gặp về chính sách mật khẩu.

# Câu hỏi thường gặp về Chính sách mật khẩu

## Q. Tại sao không hạn chế về loại ký tự?

### A. Vì xu hướng bảo mật mới nhất khuyến khích sử dụng mật khẩu có số ký tự dài hơn thay vì hạn chế loại ký tự.

Sau đây là kết quả so sánh giữa NIST (Tiêu chuẩn của chính phủ Hoa Kỳ) với Tiêu chuẩn của Trung tâm an ninh mạng quốc gia và Tiêu chuẩn về Chính sách mật khẩu của SmartHR.

|   | NIST SP800-63B | Trung tâm an ninh mạng quốc gia (NISC) |   SmartHR  （Từ sau ngày 16 tháng 2 năm 2022）   |
| --- | --- | --- | --- |
| **Số ký tự tối thiểu** | Trường hợp người dùng cài đặt sẽ là 8 ký tự Trường hợp tạo tự động ngẫu nhiên sẽ là 6 ký tự (tất cả các chữ số đều được chấp nhận) | Trường hợp là mật khẩu đăng nhập (mật khẩu sử dụng trong các dịch vụ web, v.v...) sẽ từ 10 ký tự trở lên Trường hợp là khóa mã hóa (được sử dụng cho các tập tin hay các phương tiện lưu trữ có kèm theo mật khẩu) sẽ từ 15 ký tự trở lên | Từ 10 ký tự trở lên |
| **Số ký tự tối đa** |   Từ 64 ký tự trở lên   | \- | 72 ký tự |
| **Loại ký tự** |   Không nên hạn chế  (Hệ thống nên cho phép tất cả các ký tự có thể in mã ASCII, ký tự Unicode bao gồm cả dấu cách.)   | Tổng cộng 88 loại gồm chữ cái tiếng Anh viết hoa/viết thường + số + 26 loại ký hiệu | Không hạn chế |
| **Thời hạn hiệu lực** |   Không nên yêu cầu thay đổi định kỳ.  Nếu có sự cố, sẽ yêu cầu bắt buộc phải thay đổi.   | Về cơ bản, không cần phải thay đổi mật khẩu định kỳ Thay đổi mật khẩu của bạn ngay sau khi bị rò rỉ | Không nên yêu cầu thay đổi định kỳ |
| **Khoảng thời gian cấm thay đổi mật khẩu liên tục** |   \-   | \- | \- |
| **Cấm sử dụng mật khẩu đã dùng trong quá khứ** | \- | \- | \- |
| **Mật khẩu bị cấm sử dụng** | ・ Mật khẩu có trong danh sách đã từng bị rò rỉ trong quá khứ ・ Từ ngữ có trong từ điển ・ Các ký tự được lặp lại hoặc nối tiếp nhau (aaaaa, 1234abcd) ・ Tên dịch vụ, tên người dùng, và những từ phát sinh từ đó, v.v... | Không dùng mật khẩu có thể suy đoán được dựa trên các thông tin như thông tin cá nhân, mật khẩu tương tự, hay tái sử dụng lại mật khẩu, v.v... | Cài đặt mật khẩu bị cấm sử dụng (danh sách chặn) bằng cách sử dụng API của cơ sở dữ liệu bên ngoài cho phép kiểm tra xem mật khẩu đã từng bị rò rỉ trong quá khứ hay không. |
| **Số lần thất bại cho đến khi tài khoản bị khoá** |   Từ 100 lần trở xuống  Có thể hiển thị CAPTCHA, nhập thời gian trì hoãn trước khi khóa   | \- |   Tài khoản sẽ bị khóa nếu nhập sai mật khẩu 10 lần (Nếu bạn nhập sai từ 5 lần trở lên sẽ có thông báo "Tài khoản sẽ bị khóa sau bao nhiêu lần nữa")   |
| **Thời hạn khóa tài khoản** | \- | \- | \- |

## Q. Về thời hạn hiệu lực của mật khẩu, lý do của việc cho rằng "không nên yêu cầu thay đổi định kỳ" là gì?

### A. Vui lòng tham khảo bài viết dưới đây để biết lý do tại sao SmartHR không có chức năng yêu cầu thay đổi mật khẩu định kỳ.

[Lịch sử của "thay đổi mật khẩu định kỳ" là gì? Giới thiệu các bí kíp để có thể an tâm sử dụng SmartHR ｜ SmartHR Mag.](https://mag.smarthr.jp/guide/cloud-hrl/detail/password_history/)

## Q. Mật khẩu bị cấm (danh sách chặn) được cài đặt như thế nào?

### A. Cài đặt mật khẩu bị cấm sử dụng (danh sách chặn) bằng cách sử dụng API của cơ sở dữ liệu bên ngoài cho phép kiểm tra xem mật khẩu đã từng bị rò rỉ trong quá khứ hay không.

# Câu hỏi thường gặp về các đối sách đối với chính sách mật khẩu mới từ tháng 2 năm 2022

## Q. Đối tượng cần thay đổi mật khẩu là ai?

### A. Tất cả người dùng SmartHR (quản trị viên, nhân viên (bao gồm cả nhân viên đã nghỉ việc)).

## Q. Có thời hạn thay đổi mật khẩu không?

### A. Thời gian chuyển đổi sang mật khẩu mới dự kiến mất khoảng 3 tháng từ ngày 16 tháng 2 năm 2022 đến trung tuần tháng 5 năm 2022. Thời hạn cụ thể sẽ được chúng tôi thông báo sau trên trang chủ.

Vui lòng thay đổi mật khẩu của bạn trong thời gian chuyển đổi.

Nếu mật khẩu không được thay đổi trong thời gian này thì ở lần đăng nhập tiếp theo bạn sẽ được yêu cầu bắt buộc thiết lập mặt khẩu mới.

## Q. Nếu mật khẩu hiện tại đáp ứng chính sách mật khẩu mới thì có cần phải thay đổi không?

### A. Cần phải thay đổi.

Hiện tại cho dù bạn đang cài đặt mật khẩu phù hợp với chính sách mật khẩu mới thì bạn vẫn phải thay đổi mật khẩu.

Tuy nhiên, **bạn có thể tiếp tục sử dụng bằng cách cài đặt lại dùng chính mật khẩu đó**.

## Q. Vui lòng cho tôi biết quy trình thay đổi mật khẩu.

### A. Vui lòng tham khảo trang trợ giúp bên dưới.

:::related
[Q. Nên làm gì khi thấy thông báo "Chính sách mật khẩu đã được thay đổi. Vui lòng thay đổi mật khẩu của bạn theo chính sách mới" được hiển thị?](https://knowledge.smarthr.jp/hc/ja/articles/4415589321241)
:::

## Q. Số ký tự tối thiểu của mật khẩu khởi tạo của tài khoản mã số nhân viên do quản trị viên thiết lập cũng sẽ thay đổi thành 10 ký tự đúng không?
A. Mật khẩu khởi tạo của tài khoản mã số nhân viên không thay đổi với số ký tự tối thiểu là 8 ký tự.

Khi nhân viên thay đổi mật khẩu do quản trị viên cài đặt trước đó, mật khẩu mới phải được thiết lập với từ 10 ký tự trở lên.

Nếu nhân viên quên mật khẩu đã cài đặt và quản trị viên phải cài đặt lại thì trả về mật khẩu khởi tạo (8 ký tự nếu đã đặt 8 ký tự).

## Q. Tôi nên làm gì nếu quên mật khẩu sau khi đã thay đổi?

### A. Vui lòng tham khảo trang trợ giúp bên dưới.

Có các cách để giải quyết khác nhau tùy theo "Trường hợp bạn quên mật khẩu để đăng nhập" hay "Trường hợp bạn sử dụng mã số nhân viên để đăng nhập nhưng quên mật khẩu khi chưa đăng ký địa chỉ email dùng để đăng nhập/nhận thông báo".

Vui lòng tham khảo trang trợ giúp bên dưới.

:::related
[Tôi nên làm gì nếu quên mật khẩu?](https://knowledge.smarthr.jp/hc/ja/articles/360026265593)
[Tôi nên làm gì nếu quên mật khẩu của tài khoản mã số nhân viên?](https://knowledge.smarthr.jp/hc/ja/articles/360026104374)
:::
