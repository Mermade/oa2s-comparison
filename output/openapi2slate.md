---
title: Swagger Petstore
search: true
toc_footers:
  - Swagger Petstore
  - <em>Version 1.0.0</em>
  - <hr>
  - <strong>undefined</strong>
  - <em>Apache 2.0</em>
  - <a href='undefined'>undefined</a>
  - <a href='mailto:apiteam@swagger.io'>apiteam@swagger.io</a>
---

# Swagger Petstore

## General Information
### Version `1.0.0`

### Schemes
`http`


###Host & base path

`petstore.swagger.io/v2/`

### Terms of Service

http://swagger.io/terms/

### External resources
[Find out more about Swagger](http://swagger.io)

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

# List of API Calls

## pet


<p>
<a href="#v2pet">
<strong>
<code class="operation-method operation-method-POST">POST  /v2/pet</code>
</strong>
</a>
</p>

<p>
<a href="#v2petfindByStatus">
<strong>
<code class="operation-method operation-method-GET">GET  /v2/pet/findByStatus</code>
</strong>
</a>
</p>

<p>
<a href="#v2petfindByTags">
<strong>
<code class="operation-method operation-method-GET">GET  /v2/pet/findByTags</code>
</strong>
</a>
</p>

<p>
<a href="#v2pet{petId}">
<strong>
<code class="operation-method operation-method-GET">GET  /v2/pet/{petId}</code>
</strong>
</a>
</p>

<p>
<a href="#v2pet{petId}">
<strong>
<code class="operation-method operation-method-POST">POST  /v2/pet/{petId}</code>
</strong>
</a>
</p>

<p>
<a href="#v2pet{petId}uploadImage">
<strong>
<code class="operation-method operation-method-POST">POST  /v2/pet/{petId}/uploadImage</code>
</strong>
</a>
</p>

## store


<p>
<a href="#v2storeinventory">
<strong>
<code class="operation-method operation-method-GET">GET  /v2/store/inventory</code>
</strong>
</a>
</p>

<p>
<a href="#v2storeorder">
<strong>
<code class="operation-method operation-method-POST">POST  /v2/store/order</code>
</strong>
</a>
</p>

<p>
<a href="#v2storeorder{orderId}">
<strong>
<code class="operation-method operation-method-GET">GET  /v2/store/order/{orderId}</code>
</strong>
</a>
</p>

## user


<p>
<a href="#v2user">
<strong>
<code class="operation-method operation-method-POST">POST  /v2/user</code>
</strong>
</a>
</p>

<p>
<a href="#v2usercreateWithArray">
<strong>
<code class="operation-method operation-method-POST">POST  /v2/user/createWithArray</code>
</strong>
</a>
</p>

<p>
<a href="#v2usercreateWithList">
<strong>
<code class="operation-method operation-method-POST">POST  /v2/user/createWithList</code>
</strong>
</a>
</p>

<p>
<a href="#v2userlogin">
<strong>
<code class="operation-method operation-method-GET">GET  /v2/user/login</code>
</strong>
</a>
</p>

<p>
<a href="#v2userlogout">
<strong>
<code class="operation-method operation-method-GET">GET  /v2/user/logout</code>
</strong>
</a>
</p>

<p>
<a href="#v2user{username}">
<strong>
<code class="operation-method operation-method-GET">GET  /v2/user/{username}</code>
</strong>
</a>
</p>

# pet

<div><a id="v2pet"></a></div>
## Add a new pet to the store

<p>
<strong>
<code class="operation-method operation-method-POST">POST  /v2/pet</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>body</code><br/><em>required</em></p></td><td><p>Pet object that needs to be added to the store</p>
</td><td></td><td>body</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>405</td> <td><p>Invalid input</p>
</td> </tr>
</table>



<div><a id="v2petfindByStatus"></a></div>
## Finds Pets by status

<p>
<strong>
<code class="operation-method operation-method-GET">GET  /v2/pet/findByStatus</code>
</strong>
</p>

Multiple status values can be provided with comma separated strings
### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>status</code><br/><em>required</em></p></td><td><p>Status values that need to be considered for filter</p>
</td><td><p>array</p></td><td>query</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
<tr> <td>400</td> <td><p>Invalid status value</p>
</td> </tr>
</table>



<div><a id="v2petfindByTags"></a></div>
## Finds Pets by tags

<p>
<strong>
<code class="operation-method operation-method-GET">GET  /v2/pet/findByTags</code>
</strong>
</p>

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>tags</code><br/><em>required</em></p></td><td><p>Tags to filter by</p>
</td><td><p>array</p></td><td>query</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
<tr> <td>400</td> <td><p>Invalid tag value</p>
</td> </tr>
</table>



<div><a id="v2pet{petId}"></a></div>
## Find pet by ID

<p>
<strong>
<code class="operation-method operation-method-GET">GET  /v2/pet/{petId}</code>
</strong>
</p>

Returns a single pet
### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>petId</code><br/><em>required</em></p></td><td><p>ID of pet to return</p>
</td><td><p>integer<br><em>int64</em></p></td><td>path</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
<tr> <td>400</td> <td><p>Invalid ID supplied</p>
</td> </tr>
<tr> <td>404</td> <td><p>Pet not found</p>
</td> </tr>
</table>



<div><a id="v2pet{petId}"></a></div>
## Updates a pet in the store with form data

<p>
<strong>
<code class="operation-method operation-method-POST">POST  /v2/pet/{petId}</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>petId</code><br/><em>required</em></p></td><td><p>ID of pet that needs to be updated</p>
</td><td><p>integer<br><em>int64</em></p></td><td>path</td></tr>
<tr><td><p><code>name</code><br/><em>optional</em></p></td><td><p>Updated name of the pet</p>
</td><td><p>string</p></td><td>formData</td></tr>
<tr><td><p><code>status</code><br/><em>optional</em></p></td><td><p>Updated status of the pet</p>
</td><td><p>string</p></td><td>formData</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>405</td> <td><p>Invalid input</p>
</td> </tr>
</table>



<div><a id="v2pet{petId}uploadImage"></a></div>
## uploads an image

<p>
<strong>
<code class="operation-method operation-method-POST">POST  /v2/pet/{petId}/uploadImage</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>petId</code><br/><em>required</em></p></td><td><p>ID of pet to update</p>
</td><td><p>integer<br><em>int64</em></p></td><td>path</td></tr>
<tr><td><p><code>additionalMetadata</code><br/><em>optional</em></p></td><td><p>Additional data to pass to server</p>
</td><td><p>string</p></td><td>formData</td></tr>
<tr><td><p><code>file</code><br/><em>optional</em></p></td><td><p>file to upload</p>
</td><td><p>file</p></td><td>formData</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
</table>


# store

<div><a id="v2storeinventory"></a></div>
## Returns pet inventories by status

<p>
<strong>
<code class="operation-method operation-method-GET">GET  /v2/store/inventory</code>
</strong>
</p>

Returns a map of status codes to quantities
### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
</table>



<div><a id="v2storeorder"></a></div>
## Place an order for a pet

<p>
<strong>
<code class="operation-method operation-method-POST">POST  /v2/store/order</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>body</code><br/><em>required</em></p></td><td><p>order placed for purchasing the pet</p>
</td><td></td><td>body</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
<tr> <td>400</td> <td><p>Invalid Order</p>
</td> </tr>
</table>



<div><a id="v2storeorder{orderId}"></a></div>
## Find purchase order by ID

<p>
<strong>
<code class="operation-method operation-method-GET">GET  /v2/store/order/{orderId}</code>
</strong>
</p>

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>orderId</code><br/><em>required</em></p></td><td><p>ID of pet that needs to be fetched</p>
</td><td><p>integer<br><em>int64</em></p></td><td>path</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
<tr> <td>400</td> <td><p>Invalid ID supplied</p>
</td> </tr>
<tr> <td>404</td> <td><p>Order not found</p>
</td> </tr>
</table>


# user

<div><a id="v2user"></a></div>
## Create user

<p>
<strong>
<code class="operation-method operation-method-POST">POST  /v2/user</code>
</strong>
</p>

This can only be done by the logged in user.
### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>body</code><br/><em>required</em></p></td><td><p>Created user object</p>
</td><td></td><td>body</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>default</td> <td><p>successful operation</p>
</td> </tr>
</table>



<div><a id="v2usercreateWithArray"></a></div>
## Creates list of users with given input array

<p>
<strong>
<code class="operation-method operation-method-POST">POST  /v2/user/createWithArray</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>body</code><br/><em>required</em></p></td><td><p>List of user object</p>
</td><td></td><td>body</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>default</td> <td><p>successful operation</p>
</td> </tr>
</table>



<div><a id="v2usercreateWithList"></a></div>
## Creates list of users with given input array

<p>
<strong>
<code class="operation-method operation-method-POST">POST  /v2/user/createWithList</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>body</code><br/><em>required</em></p></td><td><p>List of user object</p>
</td><td></td><td>body</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>default</td> <td><p>successful operation</p>
</td> </tr>
</table>



<div><a id="v2userlogin"></a></div>
## Logs user into the system

<p>
<strong>
<code class="operation-method operation-method-GET">GET  /v2/user/login</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>username</code><br/><em>required</em></p></td><td><p>The user name for login</p>
</td><td><p>string</p></td><td>query</td></tr>
<tr><td><p><code>password</code><br/><em>required</em></p></td><td><p>The password for login in clear text</p>
</td><td><p>string</p></td><td>query</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
<tr> <td>400</td> <td><p>Invalid username/password supplied</p>
</td> </tr>
</table>



<div><a id="v2userlogout"></a></div>
## Logs out current logged in user session

<p>
<strong>
<code class="operation-method operation-method-GET">GET  /v2/user/logout</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>default</td> <td><p>successful operation</p>
</td> </tr>
</table>



<div><a id="v2user{username}"></a></div>
## Get user by user name

<p>
<strong>
<code class="operation-method operation-method-GET">GET  /v2/user/{username}</code>
</strong>
</p>


### Parameters
<table class="table-left-col-25">
<tr> <th>Parameter</th> <th>Description</th> <th>Type</th> <th>In</th> </tr>
<tr><td><p><code>username</code><br/><em>required</em></p></td><td><p>The name that needs to be fetched. Use user1 for testing.</p>
</td><td><p>string</p></td><td>path</td></tr>
</table>

### Responses
<table>
<tr> <th>Code</th> <th>Description</th> </tr>
<tr> <td>200</td> <td><p>successful operation</p>
</td> </tr>
<tr> <td>400</td> <td><p>Invalid username supplied</p>
</td> </tr>
<tr> <td>404</td> <td><p>User not found</p>
</td> </tr>
</table>



# Responses

# Definitions

## (object)


<div class="json-schema">

<p>This object has the following properties:</p>

<h3><code>id</code> (integer)</h3>


<div class="json-schema">

</div>

<h3><code>petId</code> (integer)</h3>


<div class="json-schema">

</div>

<h3><code>quantity</code> (integer)</h3>


<div class="json-schema">

</div>

<h3><code>shipDate</code> (string)</h3>


<div class="json-schema">

</div>

<h3><code>status</code> (string, enum)</h3>


<div class="json-schema">

<p>Order Status</p>


<p>This element must be one of the following enum values:</p>

<ul>

<li><code>placed</code></li>
<li><code>approved</code></li>
<li><code>delivered</code></li>

</ul>

</div>

<h3><code>complete</code> (boolean)</h3>


<div class="json-schema">

<p>Default: <code>false</code></p>

</div>

</div>

## (object)


<div class="json-schema">

<p>This object has the following properties:</p>

<h3><code>id</code> (integer)</h3>


<div class="json-schema">

</div>

<h3><code>name</code> (string)</h3>


<div class="json-schema">

</div>

</div>

## (object)


<div class="json-schema">

<p>This object has the following properties:</p>

<h3><code>id</code> (integer)</h3>


<div class="json-schema">

</div>

<h3><code>username</code> (string)</h3>


<div class="json-schema">

</div>

<h3><code>firstName</code> (string)</h3>


<div class="json-schema">

</div>

<h3><code>lastName</code> (string)</h3>


<div class="json-schema">

</div>

<h3><code>email</code> (string)</h3>


<div class="json-schema">

</div>

<h3><code>password</code> (string)</h3>


<div class="json-schema">

</div>

<h3><code>phone</code> (string)</h3>


<div class="json-schema">

</div>

<h3><code>userStatus</code> (integer)</h3>


<div class="json-schema">

<p>User Status</p>


</div>

</div>

## (object)


<div class="json-schema">

<p>This object has the following properties:</p>

<h3><code>id</code> (integer)</h3>


<div class="json-schema">

</div>

<h3><code>name</code> (string)</h3>


<div class="json-schema">

</div>

</div>

## (object)


<div class="json-schema">

<p>This object has the following properties:</p>

<h3><code>id</code> (integer)</h3>


<div class="json-schema">

</div>

<h3><code>category</code> (object)</h3>


<div class="json-schema">

<p>The <code>category</code> object has the following properties:</p>

<h4><code>id</code> (integer)</h4>


<div class="json-schema">

</div>

<h4><code>name</code> (string)</h4>


<div class="json-schema">

</div>

</div>

<h3><code>name</code> (string, required)</h3>


<div class="json-schema">

</div>

<h3><code>photoUrls</code> (array, required)</h3>


<div class="json-schema">

<p>All array elements must be of type:</p>

<h4>(string)</h4>


<div class="json-schema">

</div>

</div>

<h3><code>tags</code> (array)</h3>


<div class="json-schema">

<p>All array elements must be of type:</p>

<h4>(object)</h4>


<div class="json-schema">

<p>This object has the following properties:</p>

<h5><code>id</code> (integer)</h5>


<div class="json-schema">

</div>

<h5><code>name</code> (string)</h5>


<div class="json-schema">

</div>

</div>

</div>

<h3><code>status</code> (string, enum)</h3>


<div class="json-schema">

<p>pet status in the store</p>


<p>This element must be one of the following enum values:</p>

<ul>

<li><code>available</code></li>
<li><code>pending</code></li>
<li><code>sold</code></li>

</ul>

</div>

</div>

## (object)


<div class="json-schema">

<p>This object has the following properties:</p>

<h3><code>code</code> (integer)</h3>


<div class="json-schema">

</div>

<h3><code>type</code> (string)</h3>


<div class="json-schema">

</div>

<h3><code>message</code> (string)</h3>


<div class="json-schema">

</div>

</div>


