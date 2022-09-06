CREATE TABLE articles
(
    `article_id`    INT              NOT NULL    AUTO_INCREMENT COMMENT '게시글ID', 
    `writer`      VARCHAR(50)      NOT NULL    COMMENT '작성자', 
    `title`       VARCHAR(50)      NOT NULL    COMMENT '제목', 
    `content`     VARCHAR(1000)    NOT NULL    COMMENT '내용', 
    `regist_date`     DATETIME         NOT NULL    COMMENT '등록일자', 
    `update_date`  DATETIME         NULL        COMMENT '수정일자', 
    `delete_date`  DATETIME         NULL        COMMENT '삭제일자', 
    PRIMARY KEY (article_id)
);

CREATE TABLE replies
(
    `article_id`  INT              NOT NULL    COMMENT '게시글ID', 
    `reply_id`  INT              NOT NULL    AUTO_INCREMENT COMMENT '댓글ID', 
    `writer`    VARCHAR(50)      NOT NULL    COMMENT '작성자', 
    `content`   VARCHAR(1000)    NOT NULL    COMMENT '내용', 
    `regist_date`   DATETIME         NOT NULL    COMMENT '등록일자', 
    PRIMARY KEY (reply_id)
);

ALTER TABLE replies
    ADD CONSTRAINT reply_id_article_id FOREIGN KEY (article_id)
        REFERENCES articles (article_id) ON DELETE CASCADE ON UPDATE RESTRICT;
