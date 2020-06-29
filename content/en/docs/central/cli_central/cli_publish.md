---
title: Create and publish other resource types to the Unified Catalog
linkTitle: Create and publish other resource types to the Unified Catalog
weight: 110
date: 2020-06-10T00:00:00.000Z
description: Learn how your DevOps process can use the AMPLIFY Central CLI to publish an API service to the Unified Catalog. You will also learn how to create other resource types, which can be used by your API service, in your environment. You can use the scripting of CLI commands to automate the process to create multiple resource types in your environment.
---

{{< alert title="Public beta" color="warning" >}}This feature is currently in **public beta** and not yet available for production use.{{< /alert >}}

## Before you start

* You will need to [authorize your DevOps service to use the DevOps API](/docs/central/cli_getstarted/)
* Verify the @axway/amplify-central-cli version is at minimum 0.1.3.
* You have already learned how to [create a representation of an environment and API Service using the AMPLIFY Central CLI](/docs/central/cli_central/cli_apiservices/).

## Objectives

Learn how to publish your API service to Unified Catalog using the AMPLIFY Central CLI. Also learn how to create other resource types, which can be used by your API Service, and how to publish SDK docs to the Unified Catalog. All resources types (API service revision, endpoint URL, and so on) are scoped to an environment.

* Create a revision of an API service.
* Create an endpoint URL for an API service revision.
* Create a secret.
* Create a webhook.
* Create a Subscription definition.
* Create a Catalog item for a published API service.
* Create and publish a Catalog item for SDK documentation.

## Create a revision of an API service

An API service revision is used to hold the Open API Specification (OAS) file for your API Service, and each API service can have multiple revisions.

The following is an example of how to create an API service revision for `apisvc1` by providing a path to a valid .yaml, .yml, or .json file that defines a specific resource  (APIServiceRevision):

```
amplify central create -f <filepath>
```

Try out this procedure using the [apirevisions1.json](https://axway-open-docs.netlify.app/samples/central/apirevisions1.json) sample, and see how a DevOps user can use the AMPLIFY Central CLI to create a revision to an API Service (`apisvc1`) in an environment (`env1`).

In the `apirevisions1.json` file, the API definition of the Musical Instruments API is encoded as Base64 with the `"spec" : "definition" : "value"`. For the decoded JSON format of the OAS2 (Swagger) specification for Musical Instruments, see [apirevisions1_decode.json](https://axway-open-docs.netlify.app/samples/central/apirevisions1_decode.json).

To view the API service revision created in the environment `env1`, run this CLI command:

```
amplify central get apisvcrev -s env1            # Get a list (name, age, title) of all the API Service revisions for the scope of env1
amplify central get apisvcrev -s env1 -o yaml    # Get all the API Service Revisions for the scope of env1 in YAML format
amplify central get apisvcrev -s env1 -o json    # Get all the API Service Revisions for the scope of env1 in JSON format
```

You can also modify the `apirevisions1.json` file to make changes to the API service revision with this CLI command:

```
amplify central apply -f <filepath>  # Update the API Service Revision using a JSON or YAML file
```

## Create an endpoint URL for an API service revision

An endpoint URL (Service Instance in the AMPLIFY data model) is a network host address and port number where your API service is deployed. An endpoint URL is dependent on a API service revision to exist.

The following is an example of how to create an endpoint URL for `apisvcrev1` of `apisvc1` by providing a path to a valid .yaml, .yml, or .json file that defines a specific resource (endpoint):

```
amplify central create -f <filepath>
```

Try out this procedure using the [apiendpoint.json](https://axway-open-docs.netlify.app/samples/central/apiendpoint.json) sample, and see how a DevOps user can use the AMPLIFY Central CLI to create an Endpoint URL for a revision of an API service (`apisvc1`) in an environment (`env1`).

To view the API service endpoint (API service instance) created in the environment `env1`, run this CLI command:

```
amplify central get apisvcinst -s env1            # Get a list (name, age, title) of all the API Service Endpoints for the scope of env1
amplify central get apisvcinst -s env1 -o yaml    # Get all the API Service Endpoints for the scope of env1 in YAML format
amplify central get apisvcinst -s env1 -o json    # Get all the API Service Endpoints for the scope of env1 in JSON format
```

You can also modify the `apiendpoint.json` file to make changes to the API service endpoint with this CLI command:

```
amplify central apply -f <filepath>  # Update the API Service Endpoint using a JSON or YAML file
```

## Create a secret

A secret is a key value pair associated with a webhook to secure your API services. By setting a webhook secret, you can ensure that API requests sent to the webhook are coming from Axway.

The following is an example of how to create a secret for an environment by providing a path to a valid .yaml, .yml, or .json file that defines a specific resource (Secret).

```
amplify central create -f <filepath>
```

Try out this procedure using the [apisecret.json](https://axway-open-docs.netlify.app/samples/central/apisecret.json) sample, and see how a DevOps user can use the AMPLIFY Central CLI to create a secret in an environment (`env1`).

To view the secret created in the environment `env1`, run this CLI command:

```
amplify central get secret -s env1 ## Get a list (name, age, title) of all the Secrets for the scope of env1
amplify central get secret -s env1 -o yaml    # Get all the Secrets for the scope of env1 in YAML format
amplify central get secret -s env1 -o json    # Get all the Secrets for the scope of env1 in JSON format
```

You can also modify the `apisecret.json` file to make changes to the secret with this CLI command:

```
amplify central apply -f <filepath>   # Update the Secret using a JSON or YAML file
```

## Create a webhook

A webhook defines a webhook URL to communicate events (for example, subscription or registration changes) back to an API Service. In AMPLIFY Central and Unified Catalog, a webhook can be used in a custom subscription or registration process. A webhook is a combination of a URL and any custom parameters (for example, a secret) needed to subscribe and register to  your API Service.

The following is an example of how to create a webhook for an environment by providing a path to a valid .yaml, .yml, or .json file that defines a specific resource (Webhook).

```
amplify central create -f <filepath>
```

Try out this procedure using the [apiwebhook.json](https://axway-open-docs.netlify.app/samples/central/apiwebhook.json) sample, and see how a DevOps user can use the AMPLIFY Central CLI to create a Webhook in an environment (`env1`).

To view the webhook created in the environment `env1`, run this CLI command:

```
amplify central get webhook -s env1 ## Get a list (name, age, title) of all the Webhooks for the scope of env1
amplify central get webhook -s env1 -o yaml    ## Get all the Webhooks for the scope of env1 in YAML format
amplify central get webhook -s env1 -o json    ## Get all the Webhooks for the scope of env1 in JSON format
```

You can also modify the `apiwebhook.json` file to make changes to the Webhook with this CLI command:

```
amplify central apply -f <filepath>    # Update the webhook using a JSON or YAML file
```

## Create a subscription definition

A subscription definition allows the configuration of the data needed from a consumer to subscribe or register to an API service in the Unified Catalog.  In AMPLIFY Central and Unified Catalog, a subscription definition has a reference to a webhook that will be invoked on a subscription or registration event. The subscription definition is referenced in the Catalog item (ConsumerInstance resource).

The following is an example of how to create a subscription definition for an environment by providing a path to a valid .yaml, .yml, or .json file that defines a specific resource (ConsumerSubscriptionDefinition).

```
amplify central create -f <filepath>
```

Try out this procedure using the [apisubscription.json](https://axway-open-docs.netlify.app/samples/central/apisubscription.json) sample, and see how a DevOps user can use the AMPLIFY Central CLI to create a subscription definition in an environment (`env1`).

To view the subscription created in the environment `env1`, run this CLI command:

```
amplify central get consumersubscriptiondef -s env1            # Get a list (name, age, title) of all the Subscriptions for the scope of env1
amplify central get consumersubscriptiondef -s env1 -o yaml    # Get all the Subscriptions for the scope of env1 in YAML format
amplify central get consumersubscriptiondef -s env1 -o json    # Get all the Subscriptions for the scope of env1 in JSON format
```

You can also modify the `apisubscription.json` file to make changes to the subscription definition with this CLI command:

```
amplify central apply -f <filepath>    # Update the Subscription using a JSON or YAML file
```

## Create a Catalog item for a published API service

The Catalog item (ConsumerInstance) contains all the details for creating the asset in the Unified Catalog. It also contains a reference to the `ConsumerSubscriptionDefinition` that has the link to the webhook, meaning that a webhook is invoked for each subscription update event generated from Unified Catalog related to the Catalog item created from the `ConsumerInstance`. Before creating a Catalog item, both an endpoint (ServiceInstance) and a subscription definition must exist.

The following is an example of how to create a Catalog item for an API service and publish it to the Unified Catalog by providing a path to a valid .yaml, .yml, or .json file that defines a specific resource (ConsumerInstance):

```
amplify central create -f <filepath>
```

Try out this procedure using the [apiconsumerinstance.json](https://axway-open-docs.netlify.app/samples/central/apiconsumerinstance.json) sample, and see how a DevOps user can use the AMPLIFY Central CLI to create a Catalog item (ConsumerInstance) for an API service in an environment  `env1`, and publish it to the Unified Catalog.

On the `apiconsumerinstance.json` file:

* The spec `state` set to `PUBLISHED` means all roles including the Consumer role can see the Catalog item.
* The spec `state` set to `UNPUBLISHED` means the Consumer role cannot see the Catalog item (Only API Admins and API Developers can see the Catalog item).
* The spec `visibility` set to `RESTRICTED` means only the teams, which shared the Catalog item have access to the item.
* The spec `visibility` set to `PUBLIC` means all teams in the organization have access to the Catalog item.

To view the Catalog item created in the environment `env1`, run this CLI command:

```
amplify central get consumerinstance -s env1 ## Get a list (name, age, title) of all the Catalog Items for the scope of env1
amplify central get consumerinstance -s env1 -o yaml   ## Get all the Catalog Items for the scope of env1 in YAML format
amplify central get consumerinstance -s env1 -o json   ## Get all the Catalog Items for the scope of env1 in JSON format
```

You can also modify the `apiconsumerinstance.json` file to make changes to the Catalog item with this CLI command:

```
amplify central apply -f <filepath>   # Update the Catalog Item using a JSON or YAML file
```

## Create an API Service combining different resources

You can create an API service within environment `env1` by providing a path to a valid .yaml, .yml, or .json file that defines a specific resource. In this case, only one API Service called `apisvc1` is created from the resource file and published to the Unified Catalog:

```
amplify central create -f <filepath>
```

Try out this procedure using the [publishAPI.json](https://axway-open-docs.netlify.app/samples/central/publishAPI.json) sample, which combines all of the previous configuration files into one JSON file.

The `publishAPI.json` file has the optional flags:

* `-o, --output` = yaml | json
* `-f, --file` = filename.yml, filename.yaml, filename.json

## Create a Catalog item for SDK documentation

You can use the AMPLIFY Central CLI to create a Catalog item (ConsumerInstance) for any type of unstructured data (for example, SDK documentation in a zip file, PDF file, and so on) in an environment, and publish it to the Unified Catalog.

You can create a Catalog item for SDK documentation in a zip file and publish it to the Unified Catalog by providing a path to a valid .yaml, .yml, or .json file that defines a specific resource (ConsumerInstance). No Endpoint (ServiceInstance) or subscription definition is required to exist before you create a Catalog item.

```
amplify central create -f <filepath>
```

Try out this procedure using the [sdkconsumerinstance.json](https://axway-open-docs.netlify.app/samples/central/sdkconsumerinstance.json) sample.

On the `sdkconsumerinstance.json` file:

* In the `"spec" : "unstructuredDataProperties" : "data"`, the zip file contents are encoded as Base64.
* The spec `state` set to `PUBLISHED` means all roles including the Consumer role can see the Catalog item.
* The spec `state` set to `UNPUBLISHED` means the Consumer role cannot see the Catalog item (Only API Admins and API Developers can see the Catalog item).
* The spec `visibility` set to `RESTRICTED` means only the teams, which shared the Catalog item have access to the item.
* The spec `visibility` set to `PUBLIC` means all teams in the organization have access to the Catalog item.

The following are some of the `"unstructuredDataProperties" : "contentTypes"` supported:

* application/zip
* application/json
* application/pdf
* application/rtf
* text/protobuf
* text/x-yaml
* text/xml
* text/plain
* txt/csv

## Review

You have learned how to publish your API Service to Unified Catalog using the AMPLIFY Central CLI. You have also learned how to create other resource types which can be used by your API service and how to publish SDK docs to the Unified Catalog.

## For Further information

* See [AMPLIFY Unified Catalog](/docs/catalog/).
* See more examples of [Unified Catalog Integrations](https://github.com/Axway/unified-catalog-integrations).
