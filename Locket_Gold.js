// Locket Gold Unlock (Shadowrocket Script)
let obj = JSON.parse($response.body);

obj = {
  "request_date_ms": Date.now(),
  "request_date": new Date().toISOString(),
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-01-01T00:00:00Z",
    "original_application_version": "1.0",
    "other_purchases": {},
    "management_url": null,
    "subscriptions": {
      "locket.gold.yearly": {
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "period_type": "normal",
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": "2023-01-01T00:00:00Z",
        "purchase_date": "2023-01-01T00:00:00Z",
        "store": "app_store"
      }
    },
    "entitlements": {
      "premium": {
        "product_identifier": "locket.gold.yearly",
        "expires_date": "2099-12-31T23:59:59Z",
        "purchase_date": "2023-01-01T00:00:00Z"
      }
    },
    "original_purchase_date": "2023-01-01T00:00:00Z",
    "original_app_user_id": "$RCAnonymousID:1234567890"
  }
};

$done({ body: JSON.stringify(obj) });
