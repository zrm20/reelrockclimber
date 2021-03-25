import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('reelrockclimber.db')

export async function openDB() {
  console.log("Creating/Reading Table...")

  return new Promise (
    (resolve, reject) =>{
      db.transaction(tx =>{
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS testing (id INTEGER PRIMARY KEY NOT NULL, name TEXT, number INTEGER);', 
          [], 
          () => {
            resolve(console.log("Table created"));
            }, 
          () => {
            reject(console.log("Error in initDB"));
          })
      })
    }
  )
}



