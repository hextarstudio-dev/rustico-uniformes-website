# Rústico Uniformes - Website Oficial

Website oficial da Rústico Uniformes - Uniformes personalizados premium com excelência técnica e criatividade artesanal.

## 🚀 Deploy no Cloudflare Pages

### Passo 1: Fork no GitHub
1. Acesse: https://github.com/hextarstudio-dev/rustico-uniformes-website
2. Clique em "Fork" no canto superior direito
3. Escolha sua conta como destino

### Passo 2: Configurar Cloudflare Pages
1. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Vá para **Pages** > **Create a project**
3. Clique em **Connect to Git**
4. Autorize o GitHub e selecione o repositório forkado

### Passo 3: Configurações do Build
```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 18
```

### Passo 4: Variáveis de Ambiente (Opcional)
```
NODE_VERSION: 18
```

### Passo 5: Deploy
- Clique em **Save and Deploy**
- Aguarde o build completar
- Seu site estará disponível em: `https://seu-subdom.pages.dev`

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📦 Otimizações Implementadas

- **Performance**: Lazy loading, code splitting, cache headers
- **SEO**: Meta tags otimizadas, structured data
- **PWA**: Service worker para cache offline
- **Segurança**: Headers de segurança configurados
- **Imagens**: Componente OptimizedImage com lazy loading

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes React
├── pages/         # Páginas da aplicação
├── hooks/         # Hooks customizados
├── lib/           # Utilitários
└── assets/        # Imagens e recursos estáticos
```

## 🌐 Tecnologias Utilizadas

- React 18 + TypeScript
- Vite (build tool)
- TailwindCSS
- React Router
- TanStack Query
- Radix UI components

## ⚡ Performance Features

- **Code Splitting**: Separação automática de chunks
- **Lazy Loading**: Componentes e imagens carregados sob demanda
- **Cache Strategy**: Service worker para cache offline
- **Resource Hints**: Preload e prefetch para recursos críticos
- **Bundle Optimization**: Configuração otimizada do Vite

## 🔧 Deploy Automático

Após o primeiro deploy, qualquer push para a branch principal acionará um novo deploy automaticamente no Cloudflare Pages.
