import mongoose from 'mongoose';

const connection = {};

async function connect() {
    if (connection.isConnected) {
        console.log('already connected');
        return;
    }
    if (mongoose.connection.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log('use previous connection');
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('new Connection');
    connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'prodeuction') {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log('not disconnected');
        }
    }
}

const db = {connect, disconnect}
export default db;