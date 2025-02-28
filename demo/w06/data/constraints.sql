-- 定義域限制 (domain constraints)
INSERT INTO shop_28 (id, name, cat_id, price, remote_url, local_url) VALUES
(40,'Adidas NMD' ,3,'a220','https://i.ibb.co/0s3pdnc/adidas-nmd.png','img/sneakers/adidas-nmd.png')
 
-- 關聯鍵限制 (primary key constraints)
INSERT INTO shop_28 (id, name, cat_id, price, remote_url, local_url) VALUES
(2,'Adidas NMD' ,3,220,'https://i.ibb.co/0s3pdnc/adidas-nmd.png','img/sneakers/adidas-nmd.png')
 
-- 實體完整限制 (entity integrity constraitns)
INSERT INTO shop_28 (id, name, cat_id, price, remote_url, local_url) VALUES
(null,'Adidas NMD' ,3,220,'https://i.ibb.co/0s3pdnc/adidas-nmd.png','img/sneakers/adidas-nmd.png')
 
-- 參考完整限制 (referential integrity constraint)
INSERT INTO shop_28 (id, name, cat_id, price, remote_url, local_url) VALUES
(40,'Adidas NMD' ,6,220,'https://i.ibb.co/0s3pdnc/adidas-nmd.png','img/sneakers/adidas-nmd.png')

-- ON UPDATE CASCASE

-- ON DELETE SET NULL