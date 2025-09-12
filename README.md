Simpre http Rest Server

Get All Pets:
GET /pets 

Get one Pet by Id:
GET /pets/1 

Create a Pet
POST pets HTTP/1.1
Content-Type: application/json

{
"id": 4,
"QR": "234wr23ewr2werwer",
"petName": "Arturo",
"ownerName": "Cacho Castaniares",
"phone": "3794566566",
"medicine": "",
"other": ""
}

Update a Pet
PUT /pets/1 
Content-Type: application/json

{
   "QR": "r3346789werfg234242sdawerweq3242323rewrwer",
   "petName": "Pelusa",
   "ownerName": "Diego Toronja",
   "phone": "3794592343",
   "medicine": "",
   "other": "",
   "createdAt": null
}

Delete a Pet By Id
DELETE pets/1 
