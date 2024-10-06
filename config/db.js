var mongoose= require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jewel:jewel@dbma.umqhd.mongodb.net/?retryWrites=true&w=majority&appName=Dbma', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected successfully');
    } catch (err) {
        console.error(err.message,'hey not connecting');
        process.exit(1);
    }
};

module.exports =connectDB;