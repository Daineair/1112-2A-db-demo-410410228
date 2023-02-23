CREATE TABLE category_28(
    id int NOT NULL PRIMARY KEY,
    name varchar(255),
    size varchar(20),
    local_url varchar(255),
    remote_url varchar(255),
    link_url varchar(255)
)

INSERT INTO category_28(id, name, size, local_url,remote_url, link_url)
 VALUES
 (1, 'hates', null, '/img/homepage/hates.png', 'https://i.ibb.co/cvpntL1/hats.png', '/crown2_28/shop_28/hats'),
 (2, 'jackets', null, '/img/homepage/jackets.png', '/crown2_28/shop_28/jackets', '/crown2_28/shop_28/jackets'),
 (3, 'sneakers', null, '/img/homepage/sneakers.png', 'https://i.ibb.co/0jqHpnp/sneakers.png', '/crown2_28/shop_28/sneakers'),
 (4, 'womens', null, '/img/homepage/womens.png', 'https://i.ibb.co/GCCdy8t/womens.png', '/crown2_28/shop_28/womens'),
 (5, 'mens', null, '/img/homepage/mens.png', 'https://i.ibb.co/R70vBrQ/men.png', '/crown2_28/shop_28/mens')