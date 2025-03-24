# dev 

front-dev: 
	sudo docker compose -f frontend/docker/docker-compose-dev.yaml up --build

back-dev: 
	sudo docker compose -f backend/docker-compose.yml up --build