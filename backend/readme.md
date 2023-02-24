EndPoints

Uri : http://nocountry.somee.com

Authorize

Post

/aut/login
{
  "userName": "string",
  "password": "string"
}

Post

/aut/register
{
  "userName": "string",
  "password": "string",
  "email": "string",
  "phoneNumber": "string",
  "address": "string"
}

Post

/aut/registerAdmin
{
  "userName": "string",
  "password": "string",
  "email": "string",
  "phoneNumber": "string",
  "address": "string"
}


BookGenders

Get

/bookGender/gender/{id}

Get

/bookGender/book/{id}

Post

/bookGender
{
  "bookId": 0,
  "genderId": 0
}

Delete

/bookGender/{id}


Books

Get

/books

Post

/books
{
  "name": "string",
  "editorial": "string",
  "author": "string",
  "authorCountry": "string",
  "editionDate": "2023-02-24T01:51:26.814Z",
  "price": 0,
  "photoUrl": "string"
}

Get

/books/{id}

Put

/books/{id}
{
  "name": "string",
  "editorial": "string",
  "author": "string",
  "authorCountry": "string",
  "editionDate": "2023-02-24T01:52:24.167Z",
  "price": 0,
  "photoUrl": "string"
}

Delete

/books/{id}



Genders

Get

/genders

Post

/genders
{
  "name": "string"
}

Get

/genders/{id}

Put

/genders/{id}
{
  "name": "string"
}

Delete

/genders/{id}
