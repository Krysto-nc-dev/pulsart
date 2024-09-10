# 📊 Pulsart

## 🌟 Introduction

PulsArt est une plateforme dédiée aux artisans de Nouvelle-Calédonie, conçue pour faciliter la gestion quotidienne de leurs activités. Elle offre des outils intégrés pour la gestion de la caisse, du stock, et des relations avec les tiers tels que les prospects et les clients. Chaque artisan peut également créer une page publique pour présenter et promouvoir ses productions artisanales.

## 🚀 Fonctionnalités Principales

- **📅Gestion de la caisse :**
  - Suivez vos entrées et sorties financières de manière simple et intuitive.
- **🏦 Gestion de stock :**
- Tenez à jour l'inventaire de vos produits, matériaux et outils.

- **📑 Gestion des relations clients et prospects :**

  - Gardez un contact étroit avec votre clientèle et développez votre réseau.

- **🧾 Gestion des Tiers :**
  - Création et gestion des clients, prospects et fournisseurs.
  - Organisation des tiers par catégories et critères spécifiques.
- **🧾 Page publique personnalisable :**
  - Chaque artisan dispose d'une vitrine personnalisée pour mettre en valeur ses œuvres.

## 🛠️ Technologies Utilisées

- **Frontend :**

  - React.js
  - Redux
  - React Router

- **Backend :**

  - Node.js
  - Express.js

- **Base de Données :**

  - MongoDB

- **API :**
  - Dolibarr API

## 🏗️ Installation et Configuration

### Prérequis

- Node.js
- npm ou yarn
- MongoDB

### Étapes d'Installation

1. **Clonez le dépôt :**

   ```bash
   git clone https://github.com/Krysto-nc-dev/pulsart.git
   cd dolibarr-custom-ui
   ```

2. **Installez les dépendances :**

   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement :**
   Créez un fichier `.env` à la racine du projet et ajoutez vos configurations.

   ```env
   NODE_ENV=development
   PORT=[YOUR_PORT]
   MONGO_URI=[YOUR_MONGO_URI]
   DOLI_BASE_URL=[YOUR_DOLIBARR_BASE_URL]
   JWT_SECRET=[YOUR_JWT_SECRET]
   DOLAPIKEY=[YOUR_DOLAPIKEY]
   ```

4. **Lancez l'application :**
   ```bash
   npm start
   ```
