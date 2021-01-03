# Instructions on how to connect to Heroku PostgresQL

Prerequisite: 
1. Have psql (try psql --version)
You can download from brew using brew install postgres
Then run brew services start postgres to start psql 
2. Need the database credentials from Heroku 
Host        ec2-52-2-127-5.compute-1.amazonaws.com
Database    d2kvcrg92njeso
User        cbeublxgiqsend
Port        5432
Password    5549ea6f076f69dd0e090531e737d4e8a0d06e85f55df2ee4d0c58a58f00a748
URI         postgres://cbeublxgiqsend:5549ea6f076f69dd0e090531e737d4e8a0d06e85f55df2ee4d0c58a58f00a748@ec2-52-2-127-5.compute-1.amazonaws.com:5432/d2kvcrg92njeso
Heroku CLI  heroku pg:psql postgresql-flexible-83744 --app partystack-db


# Establishing conenction

Run: 
> psql -h ec2-52-2-127-5.compute-1.amazonaws.com -d d2kvcrg92njeso -U cbeublxgiqsend
> Enter the password: (from above) 
> \d (to see all the tables)


