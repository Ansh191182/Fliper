# 🚀 Fliper Web App

A modern single-page React application that showcases **Projects**, **Clients**, **Contact Forms**, and includes a **secured Admin Panel** for managing content.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (with React Router DOM)
- **Styling:** CSS Modules
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas (cloud)
- **Image Storage:** Cloudinary
- **HTTP Client:** Axios
- **Toast Notifications:** react-toastify

---

## 🔐 Admin Panel Access

This project includes a secure **Admin Panel** to manage and view content.

### ✅ How to Access:

- Visit: `http://localhost:3000/admin`
- Enter the password:
fliper0611
> You will be redirected to the **Admin Dashboard**.

### 👨‍💼 Admin Permissions:

Once logged in, the admin can:

- 📌 Post new projects (`/post-project`)
- 👤 Add new client testimonials (`/post-client`)
- 📥 View contact form data
- 📂 See all existing projects and clients
- 📝 Submit forms both from the admin side and public-facing site

> 🔒 Routes are protected using a custom `ProtectedRoute` component that restricts access based on local storage authentication.

---

## 🌐 APIs Used

| Action            | Method | Endpoint                      |
|-------------------|--------|-------------------------------|
| Post a Project    | POST   | `/projectPost`                |
| Post a Client     | POST   | `/clientPost`                 |
| Get All Projects  | GET    | `/getProjects`                |
| Get All Clients   | GET    | `/getclientPost`              |
| Submit Contact    | POST   | `/contact`                    |

---

## 🧠 How Image Upload Works

- All project/client image uploads are handled via **Cloudinary API**.
- Images are previewed and submitted as `multipart/form-data` using Axios.

---

## 💾 Database

- Hosted on **MongoDB Atlas**
- Collections:
- `Projects`
- `Clients`
- `Contacts`

---

## 📦 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Ansh191182/Fliper.git
cd Fliper

# Install dependencies
npm install

# Start frontend
npm start
