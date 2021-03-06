---
title: วิธีใช้ Scrcpy ควบคุม Android ผ่าน USB และ Wireless (TCP/IP)
description: ผมมองหาวิธีการเข้าควบคุม หรือ Remote โทรศัพท์ Android อยู่นาน จนมาเจอกัน scrcpy ที่เป็น open source คือฟรีนั้นเอง 
date: '2020-05-25'
---
# วิธีใช้ Scrcpy ควบคุม Android ผ่าน USB และ Wireless (TCP/IP)
มองหาวิธีการเข้าควบคุม หรือ Remote โทรศัพท์ Android อยู่นาน จนมาเจอกัน scrcpy ที่เป็น open source คือฟรีนั้นเอง สามารถใช้ได้ทั้ง USB และผ่าน protocol TCP/IP รองรับการติดตั้งได้ทั้ง macOS, window และ Linux ในทบความนี้จะพูดถึงเฉพาะ macOS

## ติดตั้ง Scrcpy ลงใน Mac OS
1. สามาใช้ Homebrew ในการติดตั้งได้ `$ brew install scrcpy`
1. ต้องติดตั้ง adb ด้วย เพื่อเข้าถึงอุปกรณ์ Android `$ brew cask install android-platform-tools`

กรณีใช้ OS อีก ก็ไปที่ repo: Genymobile/scrcpy ใน github ได้เลย

## การเข้าควบคุม Android ผ่าน USB
เชื่อมต่อ Android ด้วย USB รันคำสั่ง scrcpy

## การเข้าควบคุม Android ผ่าน Wireless (TCP/IP)
1. เชื่อมต่อ Android เข้ากับ Networld เดี่ยวกันกับเครื่อง Mac OS
1. จด IP เครื่อง Android **(Settings → About phone → Status)**
1. เชื่อมต่อ Android ด้วย USB
1. รันคำสั่ง `$ adb tcpip 5555` เพื่อเปิดให้เข้าถึง Android ผ่าน TCP/IP
1. เชื่อมต่อ Android ด้วย `$ adb connect DEVICE_IP:5555` (แก้ DEVICE_IP เป็น IP จากข้อ 2)
1. ถอนสาย USB ออก
1. รันคำสั่ง `$ scrcpy`

## การแก้ไขกรณีเกิด `ERROR: "adb push" returned with value 1`
1. ให้รันคำสั่ง adb devices จะเห็นเครื่อง Android ที่เชื่อมต่ออยู่ทั้งหมด
1. เลือกเครื่องที่ต้องการด้วย `$ scrcpy -s YOUR_DEVICE_CODE`
