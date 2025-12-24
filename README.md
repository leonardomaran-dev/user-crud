# CRUD de Usuários

Projeto de CRUD (Create, Read, Update, Delete) de Usuários, desenvolvido com o objetivo de gerenciar usuários de forma simples, organizada e escalável. Este projeto pode ser utilizado como base para estudos, testes técnicos ou como ponto de partida para aplicações maiores.

## 📌 Funcionalidades

- ➕ Criar usuários

- 📄 Listar usuários

- ✏️ Atualizar dados de usuários

- ❌ Remover usuários

## 🛠️ Tecnologias Utilizadas

- Framework: NextJs
- Banco de Dados: Supabase(Postgres)

## 📂 Estrutura do Projeto

```bash
├── app
│   ├── _components
│   ├── favicon.ico
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── ui
├── lib
│   ├── hooks
│   ├── providers
│   └── supabase
├── public
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## ⚙️ Configuração do Ambiente

Clone o projeto

```bash
  git clone https://github.com/leonardomaran-dev/user-crud.git
```

Entre no diretório do projeto

```bash
  cd user-crud
```

Instale as dependências

```bash
  npm install
  # ou
  pnpm install
  # ou
  yarn install
```

Crie o arquivo .env

```bash
cp .env.example .env
```

Configure o .env

```bash
#SUPABASE

NEXT_PUBLIC_SUPABASE_URL='<YOUR-SUPABASE-URL>'
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY='<YOUR-SUPABASE-PUBLISHABLE-DEFAULT-KEY>'
```

Inicie o servidor

```bash
  npm run dev
  # ou
  pnpm dev
  # ou
  yarn run dev
```

## 👤 Autor

Leonardo Maran

- GitHub: https://github.com/leonardomaran-dev
- LinkedIn: https://www.linkedin.com/in/leonardo-maran-02275a2b1

## 📄 Licença

[MIT](https://choosealicense.com/licenses/mit/)
