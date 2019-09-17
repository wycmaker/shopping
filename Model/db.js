const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'blogs'
const db = module.exports = {}
var mdb

db.open = async function () {
  db.client = await MongoClient.connect(url)
  db.url = url
  db.dbName = dbName
  db.db = mdb = await db.client.db(dbName)

  return mdb
}

db.table = function (tableName) {
  return mdb.collection(tableName)
}

db.close = async function () {
  return db.client.close()
}