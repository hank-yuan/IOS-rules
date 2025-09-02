/***********************************

> 應用名稱：FT中文網
> 軟件版本：6.11.45
> 下載地址：https://apps.apple.com/cn/app/id443870811

 
[rewrite_local]

# > FT中文网解锁会员权限
^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.* url script-response-body https://raw.githubusercontent.com/hank-yuan/IOS-rules/master/QuantumultX/Scripts/ftchinese.js

[mitm] 

hostname=user.ftmailbox.cn

***********************************/






















$done({body: JSON.stringify({environment:"Production",receipt:{in_app:[{quantity:"1",product_id:"com.ft.ftchinese.mobile.subscription.vip",expires_date:"2025-12-22 22:22:22 Etc/GMT",expires_date_ms:"1766413342000",expires_date_pst:"2025-12-22 22:22:22 America/Los_Angeles",in_app_ownership_type:"PURCHASED"}]},latest_receipt_info:[{quantity:"1",product_id:"com.ft.ftchinese.mobile.subscription.vip",expires_date:"2025-12-22 22:22:22 Etc/GMT",expires_date_ms:"1766413342000",expires_date_pst:"2025-12-22 22:22:22 America/Los_Angeles",in_app_ownership_type:"PURCHASED"}],latest_receipt:"NA",pending_renewal_info:[{auto_renew_product_id:"com.ft.ftchinese.mobile.subscription.vip",product_id:"com.ft.ftchinese.mobile.subscription.vip",auto_renew_status:"0"}],status:0})});