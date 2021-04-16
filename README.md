# Watson Discovery Expert Assist

## Overview

This prototype highlights the Watson Discovery features like Smart Document Understanding, Passage retrieval, Continuous Relevancy Training, Table Extraction, allowing for natural language querying on extracted unstructured data and structured queries (NoSQL or DBMS).

#### Quick Demo

![](./images/1.gif)

## Required Services

This prototype requires the following:

- Watson Discovery Service
- Node.js Cloud Foundry Application
- Redux & React JavaScript library
- IBM Carbon Design System

> If you are deploying elsewhere or only locally, you do not need to provision the node.js application in IBM Cloud.

## Prerequisites

The application requires the following software to be installed locally.

- Node (10.15+) Application runtime environment
- NPM (6.7+) Server side dependency management
- React (16.8.6+)

## Setup Instructions

The setup is done in 3 primary steps:

1. Setup the application and all IBM Cloud services.
2. Setup local configuration files and deploy locally.
3. Build and deploy the app to IBM Cloud.

### Setting up the application and all IBM Cloud services

> You will create a placeholder application in IBM Cloud that connects to all the required services first.

1. If you do not already have an IBM Cloud account, [sign up here](https://console.ng.bluemix.net/registration).
2. Download and install the [Cloud Foundry CLI](https://console.ng.bluemix.net/docs/cli/index.html#cli) tool.
3. Log into IBM Cloud with your account.
4. From the Application Dashboard, Create a new Application.

- On the left, select Apps > Cloudfoundry Apps.
- On the right, select SDK for Node.js.
- Provide a unique name for your application.

5. Once the application is created, go into the application and select Connections.
6. Create the required services and bind them to the newly created application.
7. Leave the Connections page open, as you will reference the credentials in the subsequent setup step.

For help on configuring and training the Watson services, see below.

#### Configuring & Training Watson Discovery Service (WDS)

The demo as shown on ibm.com/demos does not use Watson Discovery Training or custom configuration.

WDS can be trained to improve the query results by following the instructions on the [Watson Discovery Service documentation](https://console.bluemix.net/docs/services/discovery/train-tooling.html#improving-result-relevance-with-the-tooling).

### Setting up Local Configuration files & deploying Locally

#### Local Configuration Setup - env

The application's required services credentials are stored on the .env file:

DISCOVERY_API_KEY=xxx

DISCOVERY_ENV=xxx

DISCOVERY_ENG_COLLECTION=xxx

> For IBM Cloud deployments, environment variables are best stored on the targeted IBM Cloud resource. The application server only reads the .env on local deployment.

#### Installing the dependencies

All the dependencies are mangaged by npm in the package.json file.

`npm install`

#### Building the app locally

Run `npm run build:server` to build the local dev server.

Run `npm run build:ui` to build the local front-end webpack dev server.

#### Running the app locally

For local deployment, the application uses webpack to proxy client requests to its separate server running on port 3000.

Run `npm run dev:server` to start the local dev server.

Run `npm run dev:ui` to start the front-end webpack dev server with hot reloading. The client will run on port 7000.
