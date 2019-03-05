import { Db, MongoError, MongoClient } from "mongodb";

import { primes } from "domain";

let db = null;

export async function connectToDb(url) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      if (err) {
        reject(err);
        return;
      }
      db = client.db(encodeURIComponent(process.env.MONGO_DATABASE));
      console.log("Connected to DB :)");
      resolve();
    });
  });
}

async function myfunc() {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.log(2);
      reject(err);
      return;
    }
    db = client.db(encodeURIComponent(process.env.MONGO_DATABASE));
    resolve();
  });
}

export const collections = {
  get primes() {
    return db.collection("primes");
  }
};
