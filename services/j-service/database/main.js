const mysql = require("mysql");
const pass = require('../../../mysqlPass.js');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pass,
  database: "mashBnB"
});
con.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

const getImages = function(houseId, callback) {

  con.query(
    "SELECT * FROM house_images where house_id =?",
    [houseId],
    (err, rows) => {
      if (err) throw err;
      let result = rows.map(n=>n.image_url);
      callback(result);
    }
  );
};
const closeConnection = function() {
  con.end(err => {
    console.log("Dis-connected!");
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
  });
};
module.exports.getImages = getImages;
