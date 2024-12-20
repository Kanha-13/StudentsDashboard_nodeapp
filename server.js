const express = require('express');
const studentRoutes = require('./routes/students.route');
const cors = require('cors');
const DB = require('./db/connect');

const app = express();
const PORT = 5000;

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api', studentRoutes);


//db connection status
const checkPrismaConnection = async () => {
  try {
    await DB.$connect();
    console.log('🎉 Prisma connected successfully!');
    console.log('✅ Supabase connection active via Prisma!');
  } catch (err) {
    console.error('❌ Error connecting to Prisma:', err.message);
  }
};

checkPrismaConnection();

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
