import { Db, MongoError, MongoClient } from 'mongodb';

import { Agreement, IPersistedAgreement } from 'domain-models';

let db = null;

export async function connectToDb(url) {
    if (db) { return Promise.resolve(); }

    return (resolve, reject) => {
        // tslint:disable-next-line:max-line-length
        MongoClient.connect(url, (err, client) => {
            if (err) {
                reject(err);
                return;
            }
            db = client.db(encodeURIComponent(process.env.MONGO_DATABASE));
            resolve();
        });
    };
}

export const collections = {
    get agreements() {
        return db.collection(Agreement.name);
    }
};
