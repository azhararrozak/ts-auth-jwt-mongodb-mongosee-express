# TS Auth JWT MongoDB Boilerplate

Boilerplate ini menyediakan template untuk membangun REST API menggunakan:
- Node.js + Express  
- TypeScript  
- MongoDB + Mongoose  
- JSON Web Tokens (JWT) untuk autentikasi  

## Fitur
- Registrasi & login dengan hashing password (bcrypt)  
- Autentikasi berbasis JWT  
- Validasi request body (celebrate/Joi)  
- Struktur folder scalable  
- Error handling terpusat  
- TypeScript support dengan ESLint & Prettier  

## Prasyarat
- Node.js v14+  
- npm atau yarn  
- MongoDB (lokal atau Atlas)  

## Instalasi

```bash
git clone https://github.com/azhararrozak/ts-auth-jwt-mongodb-mongosee-express.git
cd ts-auth-jwt-mongodb-mongosee-express
npm install
```

## Konfigurasi

Buat file `.env` di root:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

## Menjalankan Aplikasi

```bash
# mode development (watch + reload)
npm run dev

# build & production
npm run build
npm start
```

Akses API di http://localhost:5000

## Struktur Proyek

```
src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── app.ts
└── server.ts
```

## Skrip NPM

- `npm run dev` – jalankan di development dengan nodemon  
- `npm run build` – compile TypeScript  
- `npm start` – jalankan hasil build  
- `npm test` – (opsional) jalankan unit test  

## Kontribusi

1. Fork repo ini  
2. Buat branch baru (`git checkout -b feature/XYZ`)  
3. Commit perubahan (`git commit -m "Add XYZ"`)  
4. Push ke branch (`git push origin feature/XYZ`)  
5. Buka Pull Request  

## Lisensi

MIT © Azhar Arrozak
