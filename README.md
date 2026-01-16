# 🎯 0xECE CTFd Theme

Thème CTFd custom **Neo-Brutalist** inspiré du style de [0xece.fr](https://0xece.fr).

![Preview](https://0xece.fr/og-image.png)

## ✨ Features

- 🎨 **Design Neo-Brutalist** : Bordures épaisses, hard shadows, typographie bold
- 🌈 **Palette 0xECE** : Background beige crème, accent teal, catégories colorées
- ⚡ **Animations fluides** : Entrées en slide-up, hover effects, ripple sur les boutons
- 📱 **Responsive** : Adapté mobile et desktop
- 🎮 **Challenge modal** : Interface moderne pour résoudre les challenges
- 📊 **Scoreboard animé** : Graph de progression avec Chart.js
- 🔒 **Auth stylée** : Pages login/register avec le design 0xECE

## 📁 Structure

```
0xece/
├── static/
│   ├── css/
│   │   └── style.css          # Design system complet
│   └── js/
│       └── main.js            # Animations et interactions
└── templates/
    ├── base.html              # Template de base
    ├── index.html             # Homepage
    ├── challenges.html        # Liste des challenges + modal
    ├── challenge.html         # Template challenge individuel
    ├── scoreboard.html        # Classement avec graph
    ├── login.html             # Connexion
    ├── register.html          # Inscription
    ├── settings.html          # Paramètres utilisateur
    ├── reset_password.html    # Réinitialisation mot de passe
    ├── confirm.html           # Page de confirmation
    ├── errors/
    │   ├── error.html
    │   ├── 404.html
    │   └── 500.html
    ├── users/
    │   ├── users.html         # Liste des users
    │   ├── user.html          # Profil public
    │   └── private.html       # Mon profil
    └── teams/
        ├── teams.html         # Liste des teams
        ├── team.html          # Profil public team
        └── private.html       # Ma team
```

## 🚀 Installation

### 1. Copier le thème
Copie le dossier `0xece` dans le répertoire des thèmes de CTFd :

```bash
cp -r 0xece /path/to/CTFd/CTFd/themes/
```

### 2. Configurer CTFd
Dans l'admin CTFd → Config → Theme, sélectionne **0xece**.

Ou via variable d'environnement :
```env
CTF_THEME=0xece
```

### 3. (Optionnel) Personnaliser
Modifie les variables CSS dans `style.css` pour adapter les couleurs :

```css
:root {
  --bg-cream: #f0e1cf;      /* Fond principal */
  --accent-teal: #1bcab7;   /* Couleur accent */
  --card-white: #ffffff;    /* Fond des cartes */
  --text-black: #000000;    /* Texte et bordures */
}
```

## 🎨 Palette de couleurs

| Élément | Couleur | Hex |
|---------|---------|-----|
| Background | Beige crème | `#f0e1cf` |
| Accent | Teal | `#1bcab7` |
| Cards | Blanc | `#FFFFFF` |
| Text/Borders | Noir | `#000000` |
| Web | Rouge | `#ef4444` |
| Crypto | Violet | `#8b5cf6` |
| Pwn | Amber | `#f59e0b` |
| Reverse | Rose | `#ec4899` |
| Forensics | Bleu | `#3b82f6` |
| OSINT | Vert | `#22c55e` |

## 🔧 Dépendances

Le thème utilise :
- **Google Fonts** : Inter, JetBrains Mono (chargé via CDN)
- **Chart.js** : Pour les graphs de progression (chargé via CDN)

Aucune dépendance locale à installer !

## 📝 License

MIT — Fait avec ❤️ par 0xECE

---

**0xECE** — Association Cybersécurité & CTF — [0xece.fr](https://0xece.fr)