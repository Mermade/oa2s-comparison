---
title: Swagger Petstore 1.0.0

toc_footers:
- Documentation Powered by Slate

search: true
---

# Swagger Petstore 1.0.0
> ### Produces
**Schemes**: `http`

**Host**: `petstore.swagger.io`

**Base path**: `/v2`
### Authorization: petstore_auth
Type | Description
--- | ---
oauth2 | 
### Authorization: api_key
Type | Name | In | Description
--- | --- | --- | ---
apiKey | api_key | header | 



# Pet
## Add a new pet to the store

```http
POST /v2/pet HTTP/1.1
Content-Type: application/json

{
    "body": {
        "id": "integer",
        "category": {
            "id": "integer",
            "name": "string"
        },
        "name": "string",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": "integer",
                "name": "string"
            }
        ],
        "status": "string"
    }
}
```
	
```http
HTTP/1.1 405 Method Not Allowed
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
body *  | body | [Pet](#pet) | Pet object that needs to be added to the store

### Responses
Http code | Type | Description
--- | --- | ---
405 | no content | Invalid input

## Update an existing pet

```http
PUT /v2/pet HTTP/1.1
Content-Type: application/json

{
    "body": {
        "id": "integer",
        "category": {
            "id": "integer",
            "name": "string"
        },
        "name": "string",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": "integer",
                "name": "string"
            }
        ],
        "status": "string"
    }
}
```
	
```http
HTTP/1.1 400 Bad Request
```
```http
HTTP/1.1 404 Not Found
```
```http
HTTP/1.1 405 Method Not Allowed
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
body *  | body | [Pet](#pet) | Pet object that needs to be added to the store

### Responses
Http code | Type | Description
--- | --- | ---
400 | no content | Invalid ID supplied
404 | no content | Pet not found
405 | no content | Validation exception


## Finds Pets by status

```http
GET /v2/pet/findByStatus HTTP/1.1
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": "integer",
        "category": {
            "id": "integer",
            "name": "string"
        },
        "name": "string",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": "integer",
                "name": "string"
            }
        ],
        "status": "string"
    }
]
```
```http
HTTP/1.1 400 Bad Request
```

Multiple status values can be provided with comma separated strings


### Parameters
Name | In | Type | Description
--- | --- | --- | ---
status *  | query | array[string] | Status values that need to be considered for filter

### Responses
Http code | Type | Description
--- | --- | ---
200 | array[[Pet](#pet)] | successful operation
400 | no content | Invalid status value


## Finds Pets by tags

```http
GET /v2/pet/findByTags HTTP/1.1
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": "integer",
        "category": {
            "id": "integer",
            "name": "string"
        },
        "name": "string",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": "integer",
                "name": "string"
            }
        ],
        "status": "string"
    }
]
```
```http
HTTP/1.1 400 Bad Request
```

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.


### Parameters
Name | In | Type | Description
--- | --- | --- | ---
tags *  | query | array[string] | Tags to filter by

### Responses
Http code | Type | Description
--- | --- | ---
200 | array[[Pet](#pet)] | successful operation
400 | no content | Invalid tag value


## Find pet by ID

```http
GET /v2/pet/{petId} HTTP/1.1
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "integer",
    "category": {
        "id": "integer",
        "name": "string"
    },
    "name": "string",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": "integer",
            "name": "string"
        }
    ],
    "status": "string"
}
```
```http
HTTP/1.1 400 Bad Request
```
```http
HTTP/1.1 404 Not Found
```

Returns a single pet


### Parameters
Name | In | Type | Description
--- | --- | --- | ---
petId *  | path | integer | ID of pet to return

### Responses
Http code | Type | Description
--- | --- | ---
200 | [Pet](#pet) | successful operation
400 | no content | Invalid ID supplied
404 | no content | Pet not found

## Updates a pet in the store with form data

```http
POST /v2/pet/{petId} HTTP/1.1
```
	
```http
HTTP/1.1 405 Method Not Allowed
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
petId *  | path | integer | ID of pet that needs to be updated
name | formData | string | Optional. Updated name of the pet
status | formData | string | Optional. Updated status of the pet

### Responses
Http code | Type | Description
--- | --- | ---
405 | no content | Invalid input

## Deletes a pet

```http
DELETE /v2/pet/{petId} HTTP/1.1
api_key: string
```
	
```http
HTTP/1.1 400 Bad Request
```
```http
HTTP/1.1 404 Not Found
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
api_key | header | string | Optional. 
petId *  | path | integer | Pet id to delete

### Responses
Http code | Type | Description
--- | --- | ---
400 | no content | Invalid ID supplied
404 | no content | Pet not found


## uploads an image

```http
POST /v2/pet/{petId}/uploadImage HTTP/1.1
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "code": "integer",
    "type": "string",
    "message": "string"
}
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
petId *  | path | integer | ID of pet to update
additionalMetadata | formData | string | Optional. Additional data to pass to server
file | formData | file | Optional. file to upload

### Responses
Http code | Type | Description
--- | --- | ---
200 | [ApiResponse](#apiresponse) | successful operation


# Store
## Returns pet inventories by status

```http
GET /v2/store/inventory HTTP/1.1
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

"object"
```

Returns a map of status codes to quantities


### Responses
Http code | Type | Description
--- | --- | ---
200 | object | successful operation


## Place an order for a pet

```http
POST /v2/store/order HTTP/1.1
Content-Type: application/json

{
    "body": {
        "id": "integer",
        "petId": "integer",
        "quantity": "integer",
        "shipDate": "string",
        "status": "string",
        "complete": "boolean"
    }
}
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "integer",
    "petId": "integer",
    "quantity": "integer",
    "shipDate": "string",
    "status": "string",
    "complete": "boolean"
}
```
```http
HTTP/1.1 400 Bad Request
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
body *  | body | [Order](#order) | order placed for purchasing the pet

### Responses
Http code | Type | Description
--- | --- | ---
200 | [Order](#order) | successful operation
400 | no content | Invalid Order


## Find purchase order by ID

```http
GET /v2/store/order/{orderId} HTTP/1.1
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "integer",
    "petId": "integer",
    "quantity": "integer",
    "shipDate": "string",
    "status": "string",
    "complete": "boolean"
}
```
```http
HTTP/1.1 400 Bad Request
```
```http
HTTP/1.1 404 Not Found
```

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions


### Parameters
Name | In | Type | Description
--- | --- | --- | ---
orderId *  | path | integer | ID of pet that needs to be fetched

### Responses
Http code | Type | Description
--- | --- | ---
200 | [Order](#order) | successful operation
400 | no content | Invalid ID supplied
404 | no content | Order not found

## Delete purchase order by ID

```http
DELETE /v2/store/order/{orderId} HTTP/1.1
```
	
```http
HTTP/1.1 400 Bad Request
```
```http
HTTP/1.1 404 Not Found
```

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors


### Parameters
Name | In | Type | Description
--- | --- | --- | ---
orderId *  | path | integer | ID of the order that needs to be deleted

### Responses
Http code | Type | Description
--- | --- | ---
400 | no content | Invalid ID supplied
404 | no content | Order not found


# User
## Create user

```http
POST /v2/user HTTP/1.1
Content-Type: application/json

{
    "body": {
        "id": "integer",
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": "integer"
    }
}
```
	
```http
HTTP/1.1 [default] 
```

This can only be done by the logged in user.


### Parameters
Name | In | Type | Description
--- | --- | --- | ---
body *  | body | [User](#user) | Created user object

### Responses
Http code | Type | Description
--- | --- | ---
default | no content | successful operation


## Creates list of users with given input array

```http
POST /v2/user/createWithArray HTTP/1.1
Content-Type: application/json

{
    "body": [
        {
            "id": "integer",
            "username": "string",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": "integer"
        }
    ]
}
```
	
```http
HTTP/1.1 [default] 
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
body *  | body | array[[User](#user)] | List of user object

### Responses
Http code | Type | Description
--- | --- | ---
default | no content | successful operation


## Creates list of users with given input array

```http
POST /v2/user/createWithList HTTP/1.1
Content-Type: application/json

{
    "body": [
        {
            "id": "integer",
            "username": "string",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": "integer"
        }
    ]
}
```
	
```http
HTTP/1.1 [default] 
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
body *  | body | array[[User](#user)] | List of user object

### Responses
Http code | Type | Description
--- | --- | ---
default | no content | successful operation


## Logs user into the system

```http
GET /v2/user/login HTTP/1.1
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

"string"
```
```http
HTTP/1.1 400 Bad Request
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
username *  | query | string | The user name for login
password *  | query | string | The password for login in clear text

### Responses
Http code | Type | Description
--- | --- | ---
200 | string | successful operation
400 | no content | Invalid username/password supplied


## Logs out current logged in user session

```http
GET /v2/user/logout HTTP/1.1
```
	
```http
HTTP/1.1 [default] 
```

### Responses
Http code | Type | Description
--- | --- | ---
default | no content | successful operation


## Get user by user name

```http
GET /v2/user/{username} HTTP/1.1
```
	
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "integer",
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": "integer"
}
```
```http
HTTP/1.1 400 Bad Request
```
```http
HTTP/1.1 404 Not Found
```

### Parameters
Name | In | Type | Description
--- | --- | --- | ---
username *  | path | string | The name that needs to be fetched. Use user1 for testing. 

### Responses
Http code | Type | Description
--- | --- | ---
200 | [User](#user) | successful operation
400 | no content | Invalid username supplied
404 | no content | User not found

## Updated user

```http
PUT /v2/user/{username} HTTP/1.1
Content-Type: application/json

{
    "body": {
        "id": "integer",
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": "integer"
    }
}
```
	
```http
HTTP/1.1 400 Bad Request
```
```http
HTTP/1.1 404 Not Found
```

This can only be done by the logged in user.


### Parameters
Name | In | Type | Description
--- | --- | --- | ---
username *  | path | string | name that need to be updated
body *  | body | [User](#user) | Updated user object

### Responses
Http code | Type | Description
--- | --- | ---
400 | no content | Invalid user supplied
404 | no content | User not found

## Delete user

```http
DELETE /v2/user/{username} HTTP/1.1
```
	
```http
HTTP/1.1 400 Bad Request
```
```http
HTTP/1.1 404 Not Found
```

This can only be done by the logged in user.


### Parameters
Name | In | Type | Description
--- | --- | --- | ---
username *  | path | string | The name that needs to be deleted

### Responses
Http code | Type | Description
--- | --- | ---
400 | no content | Invalid username supplied
404 | no content | User not found



# Models
## Order
```json
{
    "id": "integer",
    "petId": "integer",
    "quantity": "integer",
    "shipDate": "string",
    "status": "string",
    "complete": "boolean"
}
```
	
### Fields
Name | Type | Format | Description
--- | --- | --- | ---
id | integer | int64 | 
petId | integer | int64 | 
quantity | integer | int32 | 
shipDate | string | date-time | 
status | string | 
Acceptable values:
placed
approved
delivered
 | Order Status
complete | boolean |  | 

	
## Category
```json
{
    "id": "integer",
    "name": "string"
}
```
	
### Fields
Name | Type | Format | Description
--- | --- | --- | ---
id | integer | int64 | 
name | string |  | 

	
## User
```json
{
    "id": "integer",
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": "integer"
}
```
	
### Fields
Name | Type | Format | Description
--- | --- | --- | ---
id | integer | int64 | 
username | string |  | 
firstName | string |  | 
lastName | string |  | 
email | string |  | 
password | string |  | 
phone | string |  | 
userStatus | integer | int32 | User Status

	
## Tag
```json
{
    "id": "integer",
    "name": "string"
}
```
	
### Fields
Name | Type | Format | Description
--- | --- | --- | ---
id | integer | int64 | 
name | string |  | 

	
## Pet
```json
{
    "id": "integer",
    "category": {
        "id": "integer",
        "name": "string"
    },
    "name": "string",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": "integer",
            "name": "string"
        }
    ],
    "status": "string"
}
```
	
### Fields
Name | Type | Format | Description
--- | --- | --- | ---
id | integer | int64 | 
category | [Category](#category) |  | 
name *  | string |  | 
photoUrls *  | array[string] |  | 
tags | array[[Tag](#tag)] |  | 
status | string | 
Acceptable values:
available
pending
sold
 | pet status in the store

	
## ApiResponse
```json
{
    "code": "integer",
    "type": "string",
    "message": "string"
}
```
	
### Fields
Name | Type | Format | Description
--- | --- | --- | ---
code | integer | int32 | 
type | string |  | 
message | string |  | 

	


