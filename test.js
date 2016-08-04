var r = [
  {
    "_id": "57a18f39d2eecb0631303f6a",
    "name": "Bob Burger",
    "email": "bob@burger.com",
    "phone": "12343443443",
    "lot": "57a0ed2c40c1b83b26b601dd",
    "spot": "5",
    "price": "25",
    "time": "2016-08-03T06:29:13.746Z",
    "expirationTime": "2016-08-02T07:00:00.000Z",
    "__v": 0,
  },
  {
    "_id": "57a190c9d2eecb0631303f6b",
    "name": "a a",
    "email": "a@a.a",
    "phone": "12343443443",
    "lot": "57a0ed1b40c1b83b26b601dc",
    "spot": "2",
    "price": "20",
    "time": "2016-08-03T06:35:53.713Z",
    "expirationTime": "2016-08-02T07:00:00.000Z",
    "__v": 0,
  },
  {
    "_id": "57a2ae454cb2c5a64b073df7",
    "name": "me me",
    "email": "me@me.me",
    "phone": "12343443443",
    "lot": "57a0ed2c40c1b83b26b601dd",
    "spot": "7",
    "price": "25",
    "time": "2016-08-04T02:53:57.414Z",
    "expirationTime": "2016-08-03T07:00:00.000Z",
    "__v": 0,
  },
  {
    "_id": "57a2ae784cb2c5a64b073df8",
    "name": "U U",
    "email": "u@u.u",
    "phone": "12343443443",
    "lot": "57a0ed2c40c1b83b26b601dd",
    "spot": "3",
    "price": "25",
    "time": "2016-08-04T02:54:48.494Z",
    "expirationTime": "2016-08-03T07:00:00.000Z",
    "__v": 0,
  },
  {
    "_id": "57a2b2552438b9e94c0cc1b7",
    "name": "My Spot",
    "email": "e@mail.com",
    "phone": "12343443443",
    "lot": "57a0ed2c40c1b83b26b601dd",
    "spot": "12",
    "price": "25",
    "time": "2016-08-04T03:11:17.394Z",
    "expirationTime": "2016-08-03T07:00:00.000Z",
    "__v": 0,
  },
];
var obj = {};
for(let i=0;i<r.length;i++){
  obj[r[i].lot] = obj[r[i].lot] || [];
  obj[r[i].lot].push(r[i].spot);
}

console.log('obj: ', obj);
