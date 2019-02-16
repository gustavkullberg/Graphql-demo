import  {Db, MongoError, MongoCLient} from 'mongodb';
import { rejects } from 'assert';

let db = null;

export async function connectToDb(url) {
    MongoCLient.connect(url, (err, client) => {
        if(err) {
            rejects(err);
            return;
        }
        db = client.db(encodeURIComponent("database"))
        resolve()
    })
}