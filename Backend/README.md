# User Registration Endpoint

## POST /users/register

### Description

This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name (minimum 3 characters).
  - `lastname` (string, optional): The user's last name (minimum 3 characters).
- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be atleast 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Example Request

```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Login Endpoint

## POST /users/login

### Description

This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be atleast 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request

```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Profile Endpoint

## GET /users/profile

### Description

This endpoint is used to get the profile of the authenticated user. It requires a valid authentication token.

### Responses

#### Success

- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the user details.
  ```json
  {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request

```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer your-auth-token"
```

# User Logout Endpoint

## GET /users/logout

### Description

This endpoint is used to log out the authenticated user. It requires a valid authentication token.

### Responses

#### Success

- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing a success message.
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request

```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer your-auth-token"
```
