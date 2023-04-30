const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

const authRoutes = require('./routes/auth.js')
const adminRoutes = require('./routes/admin.js')
const userRoutes = require('./routes/user.js')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return "Job Posting App APIs";
})

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// app.get('/', async (req, res) => {
//   const user = await prisma.user.create({ data: { name: "Abhishek Mankar", "email": "abhishekmankar11.am@gmail.com", "phone": "1234567890", "password": "12345", "role": "USER" } });
//   console.log(user);
//   res.status(200).send("worked");
// });

app.listen(port, () => console.log(`Express app running on port ${port}!`));