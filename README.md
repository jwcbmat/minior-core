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
- [Testing](#testing)
- [Epilogue](#epilogue)

## Description

A RESTful API built with [NestJs](https://nestjs.com/) to integrate with the [bento.ky](https://bento.ky) API, applying a margin to the delivery fee.

## Prologue

This project is my submission for the [bento.ky backend developer challenge](https://bento.ky).

The project is designed to be modular, readable, and easy to maintain, leveraging NestJS's native features. I also aimed to establish a solid foundation for testing and ensure a good experience for anyone reviewing or evolving this code in the future.

#### Core Stack

- [NestJS](https://docs.nestjs.com/) + [Typescript](https://www.typescriptlang.org/)
  - [Axios / @nestjs/axios](https://docs.nestjs.com/techniques/http-module)
  - [@nestjs/config](https://docs.nestjs.com/techniques/configuration)
  - [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)
- [Firebase Admin SDK](https://firebase.google.com/docs/firestore/client/libraries)
- [Jest + Supertest](https://docs.nestjs.com/fundamentals/testing)

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

> 💡 Firestore is accessed through the Admin SDK. If you are not using the emulator, you may provide a service account instead.

## Running with Docker

The project includes a Dockerized setup with Firestore Emulator:

```bash
docker-compose up --build
```

- API available at: `http://localhost:3000`
- Firestore Emulator at: `http://localhost:8080`

This setup requires only Docker and `docker-compose` — no local dependencies needed.

## Testing

To run tests:

```bash
pnpm test
```

For coverage:

```bash
pnpm test:cov
```

## Epilogue

This project was a great opportunity to apply modern backend development practices using NestJS in a realistic scenario. I focused on keeping the codebase clear, organized, and consistent, while avoiding unnecessary complexity.

There's always room for improvement, but I believe this implementation provides a solid and maintainable foundation — ready to support new features or adapt to evolving business logic.

<p align="center">
  Made with :heart: by <a href="https://github.com/jwcbmat" target="_blank">jwcbmat</a>
</p>
