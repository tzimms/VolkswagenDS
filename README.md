# Express + MySQL boilerplate

## Run the app locally (in development):
```
yarn dev
```
note: there's a `yarn start` but that is for **production**

## Add your MySQL credentials
Create a file in the root of the project called `keys.js` with the following:

```
const keys = {
    MYSQL_USERNAME:  'my_username',
    MYSQL_PASSWORD:  'super_secret_password'
}

module.exports = keys;
```