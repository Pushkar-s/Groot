var dbusername = process.env.USER_NAME;
var dbpassword = process.env.USER_PASSWORD;
var dburl = process.env.DB_URL_PLINTH;

console.log(dbusername);
console.log(dbpassword);
console.log(dburl);
console.log('mongodb+srv://'+ dbusername + ':' + dbpassword + dburl);



exports.url = 'mongodb+srv://'+ dbusername + ':' + dbpassword + dburl;
//exports.url = 'mongodb://localhost/user_data2k20';
//exports.url="mongodb+srv://Hack:Hack123@hackday-1hwua.mongodb.net/test?retryWrites=true&w=majority";