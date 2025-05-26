<div align="center">
    <img src="https://www.serebii.net/sunmoon/pokemon/774-i.png" width="100" alt="Minior Pokémon icon"/>
    <h1>Minior Core API</h1>
    <p><strong>Delivery Fee Calculator with Dynamic Margin Adjustment</strong></p>
</div>

## Table of contents

- [Description](#description)
- [Prologue](#prologue)
- [Getting Started](#getting-started)
- [Running with Docker](#running-with-docker)
- [Postman Collection](#postman-collection)
- [Endpoints](#endpoints)
- [Cloud Run](#cloud-run)
- [Epilogue](#epilogue)

## Description

A RESTful API built with [NestJs](https://nestjs.com/) to integrate with the [bento.ky](https://bento.ky) API, applying a margin to the delivery fee.

## Prologue

This project is my submission for the [bento.ky backend developer challenge](https://bento.ky).

The project is designed to be modular, readable, and easy to maintain, leveraging NestJS's native features. I aimed to establish a solid foundation for a good experience for anyone reviewing or evolving this code in the future.

#### Core Stack

- [NestJS](https://docs.nestjs.com/) + [Typescript](https://www.typescriptlang.org/)
  - [@nestjs/axios](https://docs.nestjs.com/techniques/http-module)
  - [@nestjs/config](https://docs.nestjs.com/techniques/configuration)
  - [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)
- [Firebase Admin SDK](https://firebase.google.com/docs/firestore/client/libraries)

## Getting Started

Install the dependencies:

```bash
pnpm install
```

Run the application locally:

```bash
pnpm start:dev
```

Then open: [http://localhost:3000/docs](http://localhost:3000/docs) for Swagger UI.

You will need a `.env` file with the following content:

```env
GOOGLE_CLOUD_PROJECT=minior-core-api
FIRESTORE_EMULATOR_HOST=localhost:8080
```

> 💡 Firestore is accessed via the Firebase Admin SDK. If you’re not using the emulator, just provide a service account by setting the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the path of your Firestore service account credential file.

## Running with Docker

The project includes a Dockerized setup with Firestore Emulator:

```bash
docker-compose up --build
```

- API available at: `http://localhost:3000`
- Firestore Emulator at: `http://localhost:8080`

This setup requires only Docker and `docker-compose` — no local dependencies needed.

## Postman Collection

To simplify testing and demonstration, this project includes a Postman collection:

- [Minior Core API Collection](./postman/minior-core-api.postman_collection.json)
- [Minior Local Environment](./postman/minior-local.postman_environment.json)

The collection uses the following variables:

| Variable    | Description                                           |
| ----------- | ----------------------------------------------------- |
| `LOCAL`     | Base URL for local API (e.g. <http://localhost:3000>) |
| `API_BENTO` | Base URL for the bento.ky API                         |
| `TOKEN`     | Bearer token used for API authorization               |

The environment contains:

| Variable              | Description |
| --------------------- | ----------- |
| `ANONYMOUS_USER_UUID` | UUID used   |

> 💡 Make sure to import both files into Postman and select the appropriate environment to test the API properly.

## Endpoints

### GET /delivery/fee

Calculates the delivery price using Bento API, applies a 13% margin, and stores the request metadata in Firestore.

**Required Headers:**

- `Authorization: Bearer <token>`
- `User-Agent: <auto from browser/postman>`

**Query Parameters:**

- `fromLat`, `fromLng` – origin coordinates
- `toLat`, `toLng` – destination coordinates
- `merchantId` – Bento merchant ID
- `uuid` – user UUID

Returns a JSON with the original and adjusted fee, distance, time, coordinates, and metadata.

### GET /requests/last

Fetches the 10 most recent requests stored in the database. Each record contains all request details, including timestamp and user-agent.

## Cloud Run

This project is deployed and available publicly through Google Cloud Run.

- Cloud Run URL: [https://minior-core-488469082392.us-central1.run.app](https://minior-core-488469082392.us-central1.run.app)
- Swagger UI: [https://minior-core-488469082392.us-central1.run.app/docs](https://minior-core-488469082392.us-central1.run.app/docs)

## Epilogue

This project was a great opportunity to apply modern backend development practices using NestJS in a realistic scenario. I focused on keeping the codebase clear, organized, and consistent, while avoiding unnecessary complexity.

There's always room for improvement, but I believe this implementation provides a solid and maintainable foundation — ready to support new features or adapt to evolving business logic.

<p align="center">
  Made with :heart: by <a href="https://github.com/jwcbmat" target="_blank">jwcbmat</a>
</p>
