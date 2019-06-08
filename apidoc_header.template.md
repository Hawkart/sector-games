## **Usage Overview**

Here are some information that should help you understand the basic usage of our RESTful API. 
Including info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and more.

## **Headers**

Certain API calls require you to send data in a particular format as part of the API call. 
By default, all API calls expect input in `JSON` format, however you need to inform the server that you are sending a JSON-formatted payload.
And to do that you must include the `Accept => application/json` HTTP header with every call.


| Header        | Value Sample                        | When to send it                                                              |
|---------------|-------------------------------------|------------------------------------------------------------------------------|
| Accept        | `application/json`                  | MUST be sent with every endpoint.                                            |
| Content-Type  | `application/x-www-form-urlencoded` | MUST be sent when passing Data.                                              |
| Authorization | `Bearer {Access-Token-Here}`        | MUST be sent whenever the endpoint requires (Authenticated User).            |

## **Tokens**

The Access Token lives for `expires_in`. More information about token get from login oauth.
*You will need to re-authenticate the user when the token expires.*



## **Responses**

Unless otherwise specified, all of API endpoints will return the information that you request in the JSON data format.


#### Standard Response Format without pagination

```shell
{
    {
      "id": 29,
      "title": "Stivy G",
      "slug": "stivy-g",
      "image": "teams/yCXCT5GREiDRKZ9GmC4Vym8KtGJaUeqsuXtl2eGR.jpeg",
      "capt_id": 111,
      "created_at": null,
      "updated_at": null,
      "quantity": 3,
      "overlay": "teams/xBfed3etEmphVwaEF4E9ZLc4KiXtOtLtJFdARsNG.jpeg",
      "game_id": 36,
      "balance": 0,
      "status": 1,
      "total_sum": 0,
      "count_wins": 0,
      "count_losses": 0,
      "count_fights": 0,
      "payed_dividents": 0
    },
    {
      "id": 30,
      "title": "Team-dota",
      "slug": "team-dota",
      "image": "teams/ayGURgScUHONXpFndFDHKUUF1r88rhOuERm2d43V.jpeg",
      "capt_id": 111,
      "created_at": null,
      "updated_at": null,
      "quantity": 4,
      "overlay": "teams/VNy2UNm1yUqo74shnPZfxDCp7b9DEhupsdCEs2pb.jpeg",
      "game_id": 5,
      "balance": 0,
      "status": 0,
      "total_sum": 0,
      "count_wins": 0,
      "count_losses": 0,
      "count_fights": 0,
      "payed_dividents": 0
    },
    ....
}
```

#### Header

Header Response:

```
Content-Type → application/json
Date → Thu, 14 Feb 2014 22:33:55 GMT
ETag → "9c83bf4cf0d09c34782572727281b85879dd4ff6"
Server → nginx
Transfer-Encoding → chunked
X-Powered-By → PHP/7.0.9
X-RateLimit-Limit → 100
X-RateLimit-Remaining → 99
```


### Caching

Some endpoints stores their response data in memory (caching) after querying them for the first time, to speed up the response time.
The `?skipCache=` parameter can be used to force skip loading the response data from the server cache and instead get a fresh data from the database upon the request.

**Usage:**

```
sparta.games/api/endpoint?skipCache=true
```


## Filtering
Every query parameter, except the predefined functions `_fields`, `_with`, `_sort`, `_limit`, `page` and `_q`, is interpreted as a filter. Be sure to remove additional parameters not meant for filtering before passing them to collection.

```
/api/teams?title=The Lord of the Rings
```
All the filters are combined with an `AND` operator.
```
/api/teams?title-lk=The Lord*&created_at-min=2014-03-14 12:55:02
```
The above example would result in the following SQL where:
```sql
WHERE `title` LIKE "The Lord%" AND `created_at` >= "2014-03-14 12:55:02"
```
Its also possible to use multiple values for one filter. Multiple values are separated by a pipe `|`.
Multiple values are combined with `OR` except when there is a `-not` suffix, then they are combined with `AND`.
For example all the teams with the id 5 or 6:
```
/api/teams?id=5|6
```
Or all the teams except the ones with id 5 or 6:
```
/api/teams?id-not=5|6
```

The same could be achieved using the `-in` suffix:
```
/api/teams?id-in=5,6
```
Respectively the `not-in` suffix:
```
/api/teams?id-not-in=5,6
```


#### Suffixes
Suffix        | Operator      | Meaning
------------- | ------------- | -------------
-lk           | LIKE          | Same as the SQL `LIKE` operator
-not-lk       | NOT LIKE      | Same as the SQL `NOT LIKE` operator
-in           | IN            | Same as the SQL `IN` operator
-not-in       | NOT IN        | Same as the SQL `NOT IN` operator
-min          | >=            | Greater than or equal to
-max          | <=            | Smaller than or equal to
-st           | <             | Smaller than
-gt           | >             | Greater than
-not          | !=            | Not equal to

### Sorting
Two ways of sorting, ascending and descending. Every column which should be sorted descending always starts with a `-`.
```
/api/teams?_sort=-title,created_at
```

### Fulltext search
Two implementations of full text search are supported.

***Note:*** When using an empty `_q` param the search will always return an empty result.

**Limited custom implementation (default)**

A given text is split into keywords which then are searched in the database. Whenever one of the keyword exists, the corresponding row is included in the result set.

```
/api/teams?_q=The Lord of the Rings
```
The above example returns every row that contains one of the keywords `The`, `Lord`, `of`, `the`, `Rings` in one of its columns.

Each result will also contain a `_score` column which allows you to sort the results according to how well they match with the search terms. E.g.

```
/api/teams?_q=The Lord of the Rings&_sort=-_score
```

### Limit the result set
To define the maximum amount of datasets in the result, use `_limit`.
```
/api/teams?_limit=50
```
To define the page of the datasets in the result, use `page`.
```
/api/teams?page=2&_limit=50
```

### Paginating

The `?page=` parameter can be applied to any **`GET`** HTTP request responsible for listing records (mainly for Paginated data).

**Usage:**

```
sparta.games/api/teams?page=1&_limit=1
```

#### Standard Response Format when pagination is available

```shell
  {
    "current_page": 1,
    "data": [...],
    "from": 1,
    "last_page": 2,
    "next_page_url": "http://sparta.games/api/teams?page=2",
    "path": "http://sparta.games/api/teams",
    "per_page": 1,
    "prev_page_url": null,
    "to": 1,
    "total": 2
  }
```

You can skip the pagination limit to get all the data, by adding `?_limit=0`, this will only work if 'skip pagination' is enabled on the server.

### Relationships
The api handler also supports Eloquent relationships. So if you want to get all the teams with their players, just add the users to the `_with` parameter.
```
/api/teams?_with=users
```
Relationships, can also be nested:
```
/api/teams?_with=users.game
```

***Note:*** Whenever you limit the fields with `_fields` in combination with `_with`. Under the hood the fields are extended with the primary/foreign keys of the relation. Eloquent needs the linking keys to get related models.

## **Errors** (Outdated)


General Errors:

| Error Code | Message                                                                               | Reason                                              |
|------------|---------------------------------------------------------------------------------------|-----------------------------------------------------|
| 401        | Wrong number of segments.                                                             | Wrong Token.                                        |
| 401        | Failed to authenticate because of bad credentials or an invalid authorization header. | Missing parts of the Token.                         |
| 401        | Could not decode token: The token ... is an invalid JWS.                              | Missing Token.                                      |
| 405        | Method Not Allowed.                                                                   | Wrong Endpoint URL.                                 |
| 422        | Invalid Input.                                                                        | Validation Error.                                   |
| 500        | Internal Server Error.                                                                | {Report this error as soon as you get it.}          |
| 500        | This action is unauthorized.                                                          | Using wrong HTTP Verb. OR using unauthorized token. |


## **Requests**

Calling unprotected endpoint example:

```shell
curl -X POST -H "Accept: application/json" -H "Content-Type: application/x-www-form-urlencoded; -F "email=admin@admin.com" -F "password=admin" -F "=" "http://sparta.games/api/v2/register"
```

Calling protected endpoint (passing Bearer Token) example:

```shell
curl -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." -H "http://sparta.games/api/users"
```