run:
	npm start

lint:
	npm run lint

db: create-db

create-db:
	npm run reset-database

install:
	npm install

dev:
	npm run dev

deploy:
	git push heroku master

.PHONY: dev
