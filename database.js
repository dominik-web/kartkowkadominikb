var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db2 = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Połączono z bazą danych");
    db2.run(
      `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            opis text
            )`,
      (err) => {
        if (err) {
        } else {
          var insert = "INSERT INTO user (opis) VALUES (?)";
          db2.run(insert, [
            "Programowanie to - zgodnie z definicją - proces tworzenia programu komputerowego realizującego konkretne zadania. Wszystko jest zawarte wkodzie źródłowym, który musi zostać napisany w jednym z językówprogramowania. Ile jest takich języków? Tak do końca policzyć się tegochyba nie da, bo świat nowych technologii to żywy, dynamiczny organizm,ale możemy przyjąć, że obecnie istnieje ok. 700 aktywnych języków",
          ]);
        }
      }
    );
  }
});

module.exports = db2;
