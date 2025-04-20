# 🍕 PizzaManager

> Plataforma web completa para gerenciamento de pizzaria — pedidos, produtos, categorias e usuários.

O **PizzaManager** é uma aplicação moderna composta por um back-end robusto em **Node.js** com **Express** e **Prisma**, um front-end eficiente em **Next.js 15**, e uma aplicação mobile desenvolvida com **React Native**. Juntas, essas tecnologias permitem o controle total de uma pizzaria, desde o cadastro de produtos até a finalização de pedidos. Ideal para quem deseja digitalizar e automatizar a rotina de atendimento de uma pizzaria.

🔗 [Acesse o projeto](https://pizzamanager.vercel.app/)

---

## 🧭 Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contato](#contato)

---

## ⚙️ Funcionalidades

### Backend

- Autenticação com JWT
- Criação e login de usuários
- Criação e listagem de categorias
- Criação de produtos com upload de imagem via Multer
- Criação, listagem, envio e finalização de pedidos
- Adição e remoção de itens dos pedidos
- Integração com banco de dados **PostgreSQL** via **Neon.tech**

### Frontend

- Interface moderna com SCSS Modules
- Listagem e criação de categorias e produtos
- Sistema de pedidos com controle total
- Alertas com **Sonner**
- Ícones modernos com **Lucide React**
- Integração com cookies para controle de sessão

### Mobile

- Aplicação mobile desenvolvida com **React Native**
- Navegação com **React Navigation** (Stack + Native)
- Persistência de sessão com **Async Storage**
- Consumo da API via **Axios**

---

## 🧪 Tecnologias Utilizadas

### 🛠 Backend

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **Multer**
- **JWT (JSON Web Token)**
- **Cloudinary** (upload opcional)
- **PostgreSQL** via **Neon.tech**

### 🎨 Frontend

- **Next.js 15 (App Router)**
- **React 19**
- **TypeScript**
- **SASS / SCSS Modules**
- **Axios**
- **Cookies-next**
- **Sonner** (notificações)
- **Lucide-react** (ícones)

### 📱 Mobile

- **React Native 0.76**
- **Expo**
- **React Navigation** (Stack + Native)
- **Axios**
- **Async Storage** (persistência de sessão)

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seuusuario/pizzamanager.git
```

---

### 2. Backend

```bash
cd pizzamanager/backend
npm install
```

Crie o arquivo `.env` com base no exemplo:

```env
NEXT_PUBLIC_API="sua_string_do_postgres_no_neon.tech"
```

Rode as migrations e suba o servidor:

```bash
npx prisma migrate deploy
npm run dev
```

🔗 [Repositório do Backend](https://github.com/yurisdevops/pizzamanager-backend)

---

### 3. Frontend

```bash
cd pizzamanager/frontend
npm install
npm run dev
```

---

### 4. Mobile

```bash
cd pizzamanager/mobile
npm install
expo start
```

🔗 [Repositório do Mobile](https://github.com/yurisdevops/pizzamanager-mobile)

---

## 🗂 Estrutura do Projeto

### Backend (Express + Prisma)

```
src/
├── controllers/
│   ├── user/
│   ├── category/
│   ├── product/
│   └── order/
├── middlewares/
├── config/
│   └── multer.ts
├── prisma/
├── routes.ts
└── server.ts
```

### Frontend (Next.js App Router)

```
src/
├── app/
│   ├── dashboard/
│   │   ├── category/
│   │   │   └── components/
│   ├── product/
│   ├── signup/
│   └── layout.tsx
├── lib/
├── providers/
├── services/
└── middleware.ts
```

### Mobile (React Native)

```
src/
├── components/
├── navigation/
├── screens/
├── services/
└── App.tsx
```

---

## 📬 Contato

Desenvolvido por [Yuri Souza](https://github.com/yurisdevops)  
📧 yurimachado.dev@gmail.com

---

### 🍕 Gerencie sua pizzaria com mais agilidade e organização com o **PizzaManager**!

