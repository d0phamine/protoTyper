# protoTyper

Функциональный тренажер для слепой печати + тренажер английский слов

## Getting started

Скачайте проект:

```
git clone --recurse-submodules https://github.com/d0phamine/protoTyper.git

```

#### Frontend

Для настройки проекта для локальной разработки выолните следующие шаги:

- создайте файл .env_dev в папке frontend (пример - .env-example)

###### npm

- Установите node js v22 (https://joshtronic.com/2024/05/26/ubuntu-nodejs-22-install/)

- Установите зависмости для корректной работы ide

```
cd frontend

npm install

```

- Запуститите проект

```

npm run dev

```

###### docker

- Для Linux:

```

sudo docker compose up -f frontend/docker/docker-compose-dev.yaml --build

```

или

```

make front-dev

```

- Для Windows (docker desktop)

```
sudo docker-compose up -f frontend/docker/docker-compose-dev.yaml --build

```

## Test and lint

- Прогон линтеров:

```

```
