DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
  id int(11) NOT NULL AUTO_INCREMENT COMMENT '記事ID',
  writer varchar(255) NOT NULL COMMENT '作成者',
  title varchar(255) NOT NULL COMMENT 'タイトル',
  content varchar(255) NOT NULL COMMENT '内容',
  regist_date date NOT NULL COMMENT '登録日',
  update_date date NOT NULL COMMENT '更新日',
  delete_date date NOT NULL COMMENT '削除日',
  PRIMARY KEY (id)
);


DROP TABLE IF EXISTS replies;
CREATE TABLE replies (
  id int(11) NOT NULL AUTO_INCREMENT COMMENT 'コメントID',
  article_id int(11) DEFAULT NULL COMMENT '記事ID',
  writer varchar(255) NOT NULL COMMENT '作成者',
  content varchar(255) NOT NULL COMMENT '内容',
  regist_date date NOT NULL COMMENT '登録日',
  PRIMARY KEY (id),
  CONSTRAINT fk_reply_article_id FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE ON UPDATE RESTRICT
);

INSERT INTO articles (id, writer, title, content, regist_date, update_date, delete_date) VALUES
(1, 'SONG', 'THIS IS AN ARTICLE TITLE', 'THIS IS AN ARTICLE CONTENT', '2022-09-06', '2022-09-06', '2022-09-06');

INSERT INTO replies (id, article_id, writer, content, regist_date) VALUES
(1, 1, 'CAT1', 'MEOW ARTICLE1', '2022-09-06'),
(2, 1, 'CAT2', 'MEOW2 ARTICLE1', '2022-09-06');
