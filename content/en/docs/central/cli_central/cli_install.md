---
title: Install AMPLIFY Central CLI
linkTitle: Install AMPLIFY Central CLI
weight: 90
date: 2020-05-29T00:00:00.000Z
description: Learn how to install AMPLIFY CLI and authorize your DevOps service
  to use the AMPLIFY Central DevOps APIs by way of AMPLIFY Central CLI.
---

## Before you start

* You will need a basic understanding of OAuth authorization ([RFC 6749](https://tools.ietf.org/html/rfc6749)) and JWT ([RFC 7523](https://tools.ietf.org/html/rfc7523))
* You will need an administrator account for AMPLIFY Central

## Install AMPLIFY CLI and AMPLIFY Central CLI

1. Install `Node.js 8 LTS` or later (`Node.js 11` and later is not supported).
2. Run the following command to install AMPLIFY CLI:

    ```
    [sudo] npm install -g @axway/amplify-cli
    ```

    {{< alert title="Note" color="primary" >}}Use `sudo` on Mac OS X or Linux if you do not own the directory where npm installs packages to. On Windows, you do not need to run as     Administrator as npm installs packages into your AppData directory.{{< /alert >}}

3. Run AMPLIFY package manager to install AMPLIFY Central CLI:

    ```
    amplify pm install @axway/amplify-central-cli
    ```

4. Run AMPLIFY package manager list command to view available packages.

    ```
    amplify pm list
    AMPLIFY CLI, version 1.2.1
    Copyright (c) 2018, Axway, Inc. All Rights Reserved.
    NAME                           | INSTALLED VERSIONS             | ACTIVE VERSION
    @axway/amplify-central-cli     | 0.1.3,0.1.3-dev.10             | 0.1.3
    ```

All the development versions of AMPLIFY Central CLI can be found at [NPM install of AMPLIFY Central CLI](https://www.npmjs.com/package/@axway/amplify-central-cli). To install specific develop version, run the following command:

```
amplify pm install @axway/amplify-central-cli@0.1.3-dev.10
```

## Authorize your DevOps service to use the AMPLIFY Central DevOps APIs

Learn how to authorize your DevOps service to use the AMPLIFY Central DevOps APIs by way of AMPLIFY CLI.

### Authenticate and authorize your service account

To use Central CLI your DevOps service account must authenticate with AMPLIFY Platform, and it must be authorized to use the AMPLIFY Central DevOps APIs.

To support DevOps service interactions, AMPLIFY Central uses the OAuth 2.0 client credentials flow with JWT:

* Create an RSA public private key pair for your DevOps service account.
* Use the public key to register the service account with AMPLIFY Platform to obtain a client ID.
* Use the client ID and private key to authenticate with AMPLIFY Platform to obtain a JWT.
* Use the JWT to make authorized API calls to AMPLIFY Central.

### Generate an RSA key pair

To authorize a DevOps service account with AMPLIFY Platform, you must have a public and private key pair in RSA format. To create this key pair, use `openssl` as follows:

```
$ openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
..............................................................+++
.........................+++

user@test123 ~/test
$ openssl rsa -pubout -in private_key.pem -out public_key.pem
writing RSA key

user@test123 ~/test
$ ls
private_key.pem  public_key.pem
```

Alternatively, you can create this key pair using `openssh` and the _PKCS8_ format as follows:

```
# private key generation
ssh-keygen -t rsa -b 2048 -m PEM
# public key generation
ssh-keygen -f <public_key_name> -e -m PKCS8
```

### Create a service account

Log in to AMPLIFY Central UI as an administrator, and create a service account for your DevOps service. Add the public key that you created earlier. When the account is created, copy the client identifier from the **Client ID** field.

Watch the animation to learn how to do this in AMPLIFY Central UI.

![Create service account in AMPLIFY Central UI](/Images/central/service_account_animation.gif)

### Authorize the service account with AMPLIFY platform

To authorize the service account with AMPLIFY platform, log in to AMPLIFY CLI using the following command:

```
amplify auth login --client-id DOSA_105cf15d051c432c8cd2e1313f54c2da --secret-file ~/test/private_key.pem
```

### Save the service account client identifier

To save the service account client identifier for future operations:

```
amplify central config set --client-id DOSA_105cf15d051c432c8cd2e1313f54c2da
```

To view the saved configuration:

```
amplify central config list
{ 'client-id': 'DOSA_105cf15d051c432c8cd2e1313f54c2da' }
```

## Review

You have learned how to install AMPLIFY CLI and authorize your DevOps service to use the AMPLIFY Central DevOps APIs by way of AMPLIFY CLI.
