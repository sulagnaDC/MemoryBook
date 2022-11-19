CREATE TABLE Slampage(
UserId        CHAR PRIMARY KEY NOT NULL,
Name          TEXT             NOT NULL,
DOB           DATE             NOT NULL,
FirstMetDate  DATE             NOT NULL,
ContactNo     INT              NOT NULL,
BestMemory    TEXT             NOT NULL
);

CREATE TABLE Login(
Name          TEXT             NOT NULL,
Email         CHAR             NOT NULL,
ContactNo     INT              NOT NULL,
Password      CHAR             NOT NULL
); 