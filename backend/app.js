const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require('cors');
app.use(cors());

db.serialize(() => {
    db.run("CREATE TABLE user (firstName TEXT,lastName TEXT,email TEXT,telNumber TEXT)");
    db.run("CREATE TABLE date (dateValue TEXT, startTime TEXT, endTime TEXT)");
    db.run("CREATE TABLE car (carType TEXT, carYear TEXT)");
});


const createAppoint=(req,res)=>{
    try{
        const appointment = req.body;
        console.log(appointment);

        const stmt = db.prepare("INSERT INTO user VALUES (?,?,?,?)");
        stmt.run(appointment.firstName,appointment.lastName,appointment.email,appointment.telNumber);
        stmt.finalize();
        db.each("SELECT rowid AS id, firstName, lastName,email,telNumber FROM user", (err, row) => {
            console.log(`${row.id}: ${row.firstName},${row.lastName},${row.email},${row.telNumber}`)
        })

        const stmt2 = db.prepare("INSERT INTO date VALUES (?,?,?)");
        stmt2.run(appointment.dateValue,appointment.startTimeValue,appointment.endTimeValue);
        stmt2.finalize();
        db.each("SELECT rowid AS id, dateValue, startTime,endTime FROM date", (err, row) => {
            console.log(`${row.id}: ${row.dateValue},${row.startTime},${row.endTime}`)
        })

        const stmt3 = db.prepare("INSERT INTO car VALUES (?,?)");
        stmt3.run(appointment.carType,appointment.carYear);
        stmt3.finalize();
        db.each("SELECT rowid AS id, carType, carYear FROM car", (err, row) => {
            console.log(`${row.id}: ${row.carType},${row.carYear}`)
        })
        res.status(200).send({msg:"OK"});
    }
    catch (err){
        res.status(500).send({error: err});
    }
}
app.post('/', createAppoint);

module.exports = app;
app.listen(3001);