// Script: Xoá header không cần thiết gửi đến RevenueCat
let headers = $request.headers;

// Xoá mấy trường có thể gây phát hiện
delete headers["x-revenuecat-etag"];
delete headers["X-RevenueCat-ETag"];
delete headers["If-None-Match"];
delete headers["User-Agent"];
delete headers["X-Device-User-Agent"];
delete headers["X-Client-Version"];

$done({ headers });
