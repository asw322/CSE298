CREATE TABLE USER_CHANNEL (
    uid varchar(100) NOT NULL, 
    tag varchar(100) NOT NULL,
    CONSTRAINT FK_UID
        FOREIGN KEY(uid)
        REFERENCES USERS(uid),
    CONSTRAINT FK_TAG
        FOREIGN KEY(tag)
        REFERENCES POST_TAGS(tag)
);