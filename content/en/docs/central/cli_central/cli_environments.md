---
title: Build an environment using the AMPLIFY Central CLI
linkTitle: Build an environment using the AMPLIFY Central CLI
weight: 110
date: 2020-06-10T00:00:00.000Z
description: Learn how your DevOps process can use AMPLIFY Central CLI to build and manage your environments.
---

{{< alert title="Public beta" color="warning" >}}This feature is currently in **public beta** and not yet available for production use.{{< /alert >}}

## Before you start

* You will need to [authorize your DevOps service to use the DevOps API](/docs/central/cli_getstarted/)
* Verify the @axway/amplify-central-cli version is at minimum 0.1.3.

## Objectives

Learn how to create and manage your distributed cloud and on-premise environments using the AMPLIFY Central CLI. This includes the representation of connected Axway Agent environments, that is AMPLIFY API Management V7 and AWS.

* Create a new environment
* Retrieve a list of all available environments
* Retrieve details for a specific environment
* Update a specific environment
* Delete a specific environment

## Create an environment

An environment is a logical representation or grouping of API Services.
Here are examples of how a DevOps user could excute CLI commands to create of an environment representation.

Create an environment by providing the environment name argument:

 ```
 amplify central create env <name>
 ```

Create an environment by providing the environment name argument and output in json format:

 ```
 amplify central create env <name> -o json
 ```

Create an environment by providing the environment name argument and output in yaml format:

 ```
 amplify central create env <name> -o yaml
 ```

Create an environment by providing the path to a valid .yaml, .yml, or .json file that defines the specific resource (for example, two environments):

 ```
 amplify central create environment -f <filepath>
 ```

Create an environment by providing the environment name argument (`env3`) and path to a valid .yaml, .yml, or .json file that defines a specific resource (for example, two environments). In this case, only one environment called `env3` will be created from the resource file:

```
amplify central create environment env3 -f <filepath>
```

Optional flags:

```
-o, --output = yaml | json
-f, --file = (filename.yml, filename.yaml, filename.json)
```

Try out the [`create_environments.json`](https://axway-open-docs.netlify.app/samples/central/create_environments.json) or [`create_environments.yaml`](https://axway-open-docs.netlify.app/samples/central/create_environments.yaml) samples to create an environment.

## Retrieve a list of all available environments

The following example shows how a DevOps user can get a list of all environments for my tenant/organization or just details about one environment:

```
amplify central get environments    ## Get a list of all environment names, ages, and titles
amplify central get envs -o json    ## Get a list of all environments details in JSON format
amplify central get envs -o yaml    ## Get a list of all environments details in YAML format
```

## Retrieve details for a specific environment

The following example shows how to get details on a specific environment by providing the environment name argument:

```
amplify central get environment <name>    ## Get a name, age, and title for one environment <name>
amplify central get env <name> -o json    ## Get environment details for one environment <name> in JSON format
amplify central get env <name> -o yaml    ## Get environment details for one environment <name> in YAML format
```

## Update a specific environment

The following example shows how to edit the details of specific environment by providing the environment name argument:

```
amplify central edit environment <name>   ## Edit the environment details for one environment <name> in YAML format
amplify central edit env <name> -o yaml   ## Edit the environment details for one environment <name> in YAML format
```

## Delete a specific environment

This action will delete all API services and resources in the environment specified. The CLI command can take a few seconds to finish depending on the number of resources represented in the environment.

{{% alert title="Warning" color="warning"%}}This action cannot be reversed.{{% /alert %}}

To delete all resources in an environment:

```
amplify central delete env <name>
```

Use the `--wait` option to delete resources from an environment while waiting for resource deletion confirmation. The `--wait` option will check for resource deletion for up to ten seconds.

```
amplify central delete env <name> --wait
```

## Review

You have learned how to use the AMPLIFY Central CLI to build and manage your environments.
