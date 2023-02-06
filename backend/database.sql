DROP TABLE IF EXISTS card;

CREATE TABLE card (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
picture VARCHAR(250) NOT NULL DEFAULT 'polaroid.png',
date DATE NULL, 
description VARCHAR(250) NOT NULL,
link VARCHAR(250) NULL);

INSERT into card (picture, date, description, link)
VALUES ("https://cf.bstatic.com/xdata/images/hotel/max1024x768/265720377.jpg?k=c19be735f38510cb650fa9264e4af688be0c1e293bcec9a902cd17a9a5d3a650&o=&hp=1", "2023-01-20", "Aujourd'hui est le premier jour de mon voyage à Tokyo, voici l'hôtel où je séjourne.", "https://goo.gl/maps/amP7DLshvjccxHwx8"),
("https://cdn.pixabay.com/photo/2020/01/28/10/22/tokyo-4799384_960_720.jpg", "2023-01-20", "Ma première activité, visiter la tour de Tokyo !", "https://goo.gl/maps/R2k6CL1cyEUT4T2x9"),
("https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317_960_720.jpg", "2023-01-20", "Pour le repas, j'ai choisi de déguster des ramens évidemment ! Délicieux !", "https://goo.gl/maps/RT1AZg8fZHJJQw6KA")
;
