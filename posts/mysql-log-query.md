---
title: วีธีเก็บ Log Query ที่ทำงานช้าใน MySql
description: 1. Log in เข้าไปยัง Server ด้วย SSH 2. เข้าใช้งาน MySql ด้วย คำสั่ง “mysql -u root -p” 3. พิมพ์ MySQL root password.
date: '2020-05-25'
---
# วีธีเก็บ Log Query ที่ทำงานช้าใน MySql

1. Log in เข้าไปยัง Server ด้วย SSH
1. เข้าใช้งาน MySql ด้วย คำสั่ง “mysql -u root -p”
1. พิมพ์ MySQL root password.
1. เปิดใช้งาน slow query log พิมพ์คำสั่งหลัง mysql>
    ```sql
    SET GLOBAL slow_query_log = ‘ON’;
    ```
1. กำหนดเวลาขั้นต่ำที่ต้องการ หากไม่กำหนดค่าเริ่มต้นจะอยู่ที่ 10 วินาที ผมจะกำหนดเป็น 3 วินาที เมื่อรัน Query นาน ≥ 3 วินาที จะเก็บ Query ไว้ใน Log
    ```sql
    SET GLOBAL long_query_time = 3; 
    ```
1. หนดเวลาตำแหน่งตของ Log หากไม่กำหนดค่าเริ่มต้นจะอยู่ที่ `/var/lib/mysql/hostname-slow.log`
  ```sql
  SET GLOBAL slow_query_log_file = ‘/path/filename’; 
  ```
อ้างอิง: [https://www.a2hosting.com/kb/developer-corner/mysql/enabling-the-slow-query-log-in-mysql](https://www.a2hosting.com/kb/developer-corner/mysql/enabling-the-slow-query-log-in-mysql)