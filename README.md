# Strat PM2

วิธีการ run node.js บน server ด้วย pm2

## สั่งให้ program ทำงาน โดยใช้คำสั่ง

ใช้คำสั่ง Start Server

```bash
pm2 start server.js // server.js คือ ชื่อโปรแกรม
```
จะเห็นว่า App name จะแสดงเป็น index ซึ่งโดย default แล้ว pm2 จะนำชื่อ file ตัดนามสกุลออก มาเป็น App name แต่ถ้าอยากได้ชื่อเฉพาะ สามารถใส่ได้ โดยเติม parameter -n แล้วตามด้วยชื่อ app name ดังตัวอย่าง

## Show App name
```bash
pm2 start index.js -n "Hello Wold PM2"
```

## mode cluster
ในกรณีที่ต้องการให้ run ใน mode cluster ให้เติม parameter -i แล้วตามด้วยจำนวน instance ที่ต้องการเช่น
```bash
pm2 start  server.js -i 2 // หมายถึง ทำเป็น cluster 2 ตัว
หรือ
pm2 start server.js -i max // หมายถึงทำเป็น cluster มากที่สุดเท่าที่ cpu รองรับ
```
## list process
จะเห็นว่า mode จะเป็น cluster ถ้าไม่ใส่ parameter -i mode = fork ในกรณีที่ต้องการดูว่ามี program ไหน run อยู่บ้างให้ใช้คำสั่งดังนี้
```bash
pm2 list
```
## stop
```bash
pm2 stop server // หยุดโปรแกรมตามชื่อที่กำหนด
pm2 stop 0 //หยุดโปรแกรมตาม id ที่กำหนด
pm2 stop all //หยุดโปรแกรมทั้งหมด
```

## delete 
```bash
pm2 delete server //ลบโปรแกรมตามชื่อที่กำหนด
pm2 delete 0 //ลบโปรแกรมตาม id ที่กำหนด
pm2 delete all //ลบโปรแกรมทั้งหมด
```

## restart 
```bash
pm2 restart server //restart โปรแกรมตามชื่อที่กำหนด
pm2 restart 0 //restart โปรแกรมตาม id ที่กำหนด
pm2 restart all //restart โปรแกรมทั้งหมด
```

## reload 
```bash
pm2 reload server //reload โปรแกรมตามชื่อที่กำหนด
pm2 reload 0 //reload โปรแกรมตาม id ที่กำหนด
pm2 reload all //reload โปรแกรมทั้งหมด
```

## info 
ในกรณีที่ต้องการดูข้อมูลว่า process นั่นๆ ถูก start จากไหน แล้ว log เก็บไว้ที่ไหน
```bash
pm2 info server // แสดง information ของ program ตามชื่อที่กำหนด
pm2 info 0 // แสดง information ของ program ตาม id ที่กำหนด
```

## startup 
ในกรณีที่เราต้องการให้ auto start program เราเมื่อ server เรา start ให้ใช้คำสั่งดังนี้
```bash
pm2 startup // หมายถึงเมื่อมีการ start server ให้ program เรา start ด้วย
pm2 save // หมายถึงให้ pm2 เก็บข้อมูลทั้งหมดเพื่อใช้ตอน start
```

##  monitor
เมื่อต้องการดูว่าตอนนี้ program เราทำงานเป็นยังไงใช้ ram กับ cpu เป็นอย่างไรบ้างแบบ real time สามารถทำได้โดยใช้คำสั่ง
```bash
pm2 monit
```
## License
[MIT](https://choosealicense.com/licenses/mit/)