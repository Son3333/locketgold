// Script: Giả lập user đã mua gói Gold (ngày hết hạn = hiện tại + 1 năm)
let body = $response.body;
let obj = JSON.parse(body);

// Lấy thời gian hiện tại
let now = new Date();
// Cộng thêm 1 năm
let nextYear = new Date();
nextYear.setFullYear(now.getFullYear() + 1);

// Đổi sang định dạng ISO 8601
let purchaseDate = now.toISOString();
let expireDate = nextYear.toISOString();

obj["subscriber"] = obj["subscriber"] || {};
obj["subscriber"]["entitlements"] = {
  "premium": {
    "product_identifier": "locket.gold.yearly",
    "expires_date": expireDate
  }
};

obj["subscriber"]["subscriptions"] = {
  "locket.gold.yearly": {
    "billing_issues_detected_at": null,
    "expires_date": expireDate,
    "is_sandbox": false,
    "original_purchase_date": purchaseDate,
    "purchase_date": purchaseDate,
    "ownership_type": "PURCHASED",
    "store": "app_store"
  }
};

$done({ body: JSON.stringify(obj) });
