# wunderlist-code-exchange
Simple proxy for handling Wunderlist OAuth2 code exchange for installed applications that should not store secrets.

It provides two `POST` endpoints:
- `/exchange`: exchanges `code` from your JSON request body for OAuth tokens

# Quickstart

    make setup

Edit `env.source` to your wunderlist client id, secrect and redirect uri.

    make dev

Your OAuth2 code exchange proxy is now running via nodemon with debug messages.

    make start

Proxy is now running via node without additional debug messages.  You may now POST to the endpoints.
