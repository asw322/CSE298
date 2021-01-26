CREATE TABLE POST (
    pid int NOT NULL PRIMARY KEY, 
    uid varchar(100) NOT NULL, 
    tag varchar(100) NOT NULL,
    message varchar(1000), 
    upvote int NOT NULL, 
    downvote int NOT NULL,
    CONSTRAINT FK_UID
        FOREIGN KEY(uid)
        REFERENCES USERS(uid),
    CONSTRAINT FK_TAG
        FOREIGN KEY(tag)
        REFERENCES POST_TAGS(tag)
);

ALTER TABLE POST DROP COLUMN TAG;