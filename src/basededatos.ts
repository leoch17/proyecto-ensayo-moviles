import mongoose, {ConnectOptions} from 'mongoose'

import config from './config/config'

const dbOptions: ConnectOptions =  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

mongoose.connect(config.DB.URI, dbOptions );

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexion establecida a Mongodb');
});

connection.on('error', err => {
    console.log(err);
    process.exit(0);
})