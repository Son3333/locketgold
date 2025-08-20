// Script Demo: Xóa một số header trong request
delete $request.headers["X-RevenueCat-ETag"];
delete $request.headers["X-Device-Info"];
delete $request.headers["User-Agent"];

$done({ headers: $request.headers });
