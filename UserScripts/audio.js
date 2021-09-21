/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:
[rewrite_local]

#Audiomack恢复会员
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://6678888.xyz/quantumultX/audio.js

[mitm]
hostname = api.revenuecat.com


*/

let obj = JSON.parse($response.body);
obj = {
  "request_date": "2021-08-18T19:45:52Z",
  "request_date_ms": 1629315952272,
  "subscriber": {
    "entitlements": {
      "Premium1": {
        "expires_date": "2099-09-09T22:34:01Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.audiomack.premium.2018",
        "purchase_date": "2021-01-02T22:34:01Z"
      }
    },
    "first_seen": "2021-01-02T22:46:58Z",
    "last_seen": "2021-01-02T22:46:58Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:f1b827d0694d49e0a5025ea0988b784c",
    "original_application_version": "3918",
    "original_purchase_date": "2020-05-17T12:37:13Z",
    "other_purchases": {},
    "subscriptions": {
      "com.audiomack.premium.2018": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-09-09T22:34:01Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-01-02T22:34:02Z",
        "period_type": "trial",
        "purchase_date": "2021-01-02T22:34:01Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}

$done({body: JSON.stringify(obj)});
