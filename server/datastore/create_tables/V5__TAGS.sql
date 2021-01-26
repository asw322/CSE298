CREATE TABLE TAGS (
    pid int NOT NULL, 
    tag varchar(100) NOT NULL,
    CONSTRAINT FK_PID
        FOREIGN KEY(pid)
        REFERENCES POST(pid),
    CONSTRAINT FK_TAG 
        FOREIGN KEY(tag)
        REFERENCES POST_TAGS(tag)
);

