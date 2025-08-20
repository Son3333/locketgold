// Script Demo: Giả lập user đã mua gói Gold
let body = $response.body;
let obj = JSON.parse(body);

// Thay đổi trạng thái subscription
obj["subscriber"] = obj["subscriber"] || {};
obj["subscriber"]["entitlements"] = {
  "premium": {
    "product_identifier": "locket.gold.yearly",
    "expires_date": "2099-12-31T23:59:59Z"
  }
};
obj["subscriber"]["subscriptions"] = {
  "locket.gold.yearly": {
    "billing_issues_detected_at": null,
    "expires_date": "2099-12-31T23:59:59Z",
    "is_sandbox": false,
    "original_purchase_date": "2023-01-01T00:00:00Z",
    "purchase_date": "2023-01-01T00:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  }
};

$done({ body: JSON.stringify(obj) });
