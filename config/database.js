const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports={
    uri: 'mongodb://localhost/'+this.db,
    //ma hoa
    secret: crypto,
    db: 'mean-angular-2'
}