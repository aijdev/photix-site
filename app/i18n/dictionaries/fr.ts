import type { Dictionary } from "./en";

/**
 * French (fr) — full translation. Brand names, avatar/style category and
 * template names kept in English (they mirror the app's UI).
 */
export const fr: Dictionary = {
  meta: {
    home: {
      title: "Photix — Générateur d'images IA, éditeur de photos et créateur d'avatars pour iPhone",
      description:
        "Créez de l'art original par IA à partir d'une instruction textuelle, modifiez des photos en décrivant les changements, et transformez des selfies en avatars thématiques — le tout dans une seule appli iOS. Téléchargez Photix gratuitement pour iPhone et iPad.",
      keywords: [
        "appli générateur d'images IA",
        "éditeur photo IA iPhone",
        "créateur d'avatars IA",
        "appli de texte en image",
        "générateur d'art IA",
      ],
    },
    features: {
      title: "Fonctionnalités — Générer, modifier, avatars et styles artistiques par IA",
      description:
        "Découvrez chaque fonctionnalité de Photix : le générateur d'images IA, l'éditeur de photos par description, le créateur d'avatars à partir de selfies, dix styles artistiques, l'amélioration des instructions, les photos de référence, et le partage instantané.",
      keywords: [
        "fonctionnalités appli d'images IA",
        "fonctionnalités éditeur photo IA",
        "générateur d'avatars IA",
        "styles artistiques IA",
      ],
    },
    aiImageGenerator: {
      title: "Générateur d'images IA — Du texte à l'image sur iPhone",
      description:
        "Le générateur d'images IA de Photix transforme une instruction textuelle en art original haute résolution en quelques secondes. Choisissez parmi dix styles, améliorez votre instruction automatiquement, et ajoutez des photos de référence — sans compétence de rédaction d'instructions.",
    },
    aiPhotoEditor: {
      title: "Éditeur de photos IA — Modifiez des photos en décrivant le changement",
      description:
        "L'éditeur de photos IA de Photix vous permet de modifier n'importe quelle image en langage courant. Ajoutez des objets, changez de tenue, remplacez l'arrière-plan, et retouchez des photos étape par étape — sans calques, masques ni Photoshop.",
    },
    aiAvatar: {
      title: "Créateur d'avatars IA — Transformez des selfies en portraits thématiques",
      description:
        "Le créateur d'avatars IA de Photix transforme n'importe quel selfie en un portrait soigné et thématique — super-héros, anime, haute couture, noble de la Renaissance, et bien d'autres. Détection du visage, modifiable, et prêt à partager en un geste.",
    },
    artStyles: {
      title: "Styles artistiques IA — Réalisme, anime, cyberpunk et plus",
      description:
        "Découvrez les dix styles artistiques en un geste de Photix : Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration et Pixel Art. Transformez n'importe quelle idée en un seul geste — sans instructions.",
    },
    faq: {
      title: "Questions fréquentes",
      description:
        "Réponses aux questions les plus courantes sur Photix — comment fonctionnent le générateur d'images IA, l'éditeur de photos et le créateur d'avatars, Photix PRO, confidentialité et sécurité, et comment démarrer sur iPhone et iPad.",
      keywords: ["FAQ Photix", "aide appli d'images IA", "questions Photix PRO"],
    },
    useCases: {
      title: "Cas d'usage — Ce que vous pouvez créer avec Photix",
      description:
        "Des façons concrètes d'utiliser Photix : contenu pour réseaux sociaux, photos de profil, retouches photo rapides, art conceptuel, avatars thématiques pour groupes d'amis, et une entrée facile dans l'art par IA.",
      keywords: [
        "cas d'usage art IA",
        "appli photo de profil IA",
        "création de contenu IA",
        "idées de retouche photo IA",
      ],
    },
    about: {
      title: "À propos de Photix — Création d'images par IA sans effort",
      description:
        "Photix rend la création d'images par IA accessible à tous, sans effort. Découvrez notre mission, à qui s'adresse Photix, et la famille d'applis créatives AI Journey derrière l'appli.",
      keywords: ["à propos de Photix", "applis AI Journey", "créateur d'applis créatives IA"],
    },
    contact: {
      title: "Contact Photix — Support et retours",
      description:
        "Contactez l'équipe Photix. Écrivez au support, partagez vos retours, ou notez Photix sur l'App Store. Nous orientons les avis positifs vers l'App Store et les questions directement vers notre boîte de réception.",
      keywords: ["support Photix", "contact Photix", "avis Photix"],
    },
    avatarIdeas: {
      title: "Idées d'avatars IA — Styles et inspiration pour votre photo de profil",
      description:
        "Vous ne savez pas quel avatar IA créer ? Découvrez des idées populaires — super-héros, anime, haute couture, Renaissance, cyberpunk et plus — ainsi que des sélections par occasion et des astuces pour le meilleur selfie. Créez le vôtre gratuitement dans Photix.",
      keywords: [
        "idées d'avatars IA",
        "idées de photo de profil IA",
        "styles d'avatar IA",
        "inspiration photo de profil",
        "idées d'avatar sympas",
      ],
    },
  },

  common: {
    skipToContent: "Aller au contenu",
    appStoreDownloadOn: "Télécharger sur",
    appStoreName: "l'App Store",
    appStoreAria: "Télécharger {name} sur l'App Store",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Langue",
    homeAria: "Accueil {name}",
    nav: {
      features: "Fonctionnalités",
      avatarIdeas: "Idées d'avatars",
      useCases: "Cas d'usage",
      faq: "FAQ",
      about: "À propos",
    },
    footer: {
      tagline:
        "Photix — un générateur d'images IA, éditeur de photos, et créateur d'avatars pour iPhone et iPad.",
      productTitle: "Produit",
      featuresTitle: "Fonctionnalités",
      companyTitle: "Entreprise",
      moreFrom: "Plus d'AI Photo Journey",
      portfolioLabel: "Portfolio",
      rights: "Tous droits réservés.",
      links: {
        overview: "Aperçu",
        allFeatures: "Toutes les fonctionnalités",
        useCases: "Cas d'usage",
        avatarIdeas: "Idées d'avatars",
        aiImageGenerator: "Générateur d'images IA",
        aiPhotoEditor: "Éditeur de photos IA",
        aiAvatarMaker: "Créateur d'avatars IA",
        artStyles: "Styles artistiques",
        about: "À propos",
        faq: "FAQ",
        privacy: "Confidentialité",
        terms: "Conditions",
        contact: "Contact",
      },
    },
    ctaDefault: {
      title: "Commencez à créer en quelques secondes",
      description:
        "Téléchargez Photix gratuitement et transformez dès aujourd'hui votre première idée en art prêt à partager. Sans compte, sans compétence de design — juste votre imagination.",
    },
    ctaRatedBy: "Noté {rating} par {users} utilisateurs satisfaits",
    relatedFeatures: {
      eyebrow: "Continuez à explorer",
      title: "Plus de fonctionnalités Photix",
      description: "Une appli, tout un studio créatif. Découvrez ce que votre imagination peut encore faire.",
    },
    companion: {
      partOfPre: "Fait partie d'",
      partOfPost: "— une famille d'applis créatives IA pour iPhone et iPad.",
    },
    breadcrumbHome: "Accueil",
    learnMore: "En savoir plus",
    explore: "Explorer",
    useCaseProblemLabel: "Le problème — ",
    useCaseSolutionLabel: "Avec Photix — ",
    greatForLabel: "Idéal pour : ",
  },

  content: {
    features: [
      {
        eyebrow: "AI Generate",
        name: "Générateur d'images IA",
        tab: "AI Generate",
        tagline: "Transformez une description textuelle en art original",
        summary:
          "Décrivez n'importe quoi — une scène, un personnage, une ambiance — choisissez un style, et Photix génère une image entièrement nouvelle en haute résolution en quelques secondes. Ajoutez jusqu'à deux photos de référence et laissez l'améliorateur d'instructions intégré compléter les détails.",
        keywords: [
          "générateur d'images IA",
          "appli de texte en image",
          "générateur d'art IA iPhone",
          "d'instruction à image",
        ],
      },
      {
        eyebrow: "AI Edit",
        name: "Éditeur de photos IA",
        tab: "AI Edit",
        tagline: "Modifiez n'importe quelle photo simplement en décrivant le changement",
        summary:
          "Importez une photo et tapez ce que vous voulez — « ajoute un béret rouge », « fais que ce soit l'automne », « change le fond pour Paris ». Chaque retouche s'appuie sur la précédente, pour sculpter une image de façon conversationnelle sans jamais toucher un calque ou un curseur.",
        keywords: [
          "éditeur photo IA",
          "modifier une photo avec du texte",
          "appli de retouche photo IA",
          "changer le fond IA",
        ],
      },
      {
        eyebrow: "AI Avatar",
        name: "Créateur d'avatars IA",
        tab: "AI Avatar",
        tagline: "Transformez un selfie en portraits thématiques par IA",
        summary:
          "Choisissez un modèle — Superhero, Renaissance Noble, Anime Hero, High Fashion — ajoutez un selfie, et Photix renvoie un portrait soigné et prêt à partager. La détection de visage vérifie votre photo en amont pour que vous ne gaspilliez jamais une génération.",
        keywords: [
          "générateur d'avatars IA",
          "appli de selfies IA",
          "créateur de photo de profil",
          "générateur de portraits IA",
        ],
      },
      {
        eyebrow: "Styles",
        name: "Styles artistiques IA",
        tab: "Styles",
        tagline: "Dix looks en un geste qui transforment chaque résultat",
        summary:
          "Du Realism photoréaliste à l'Anime en cellulo, en passant par le Fantasy lumineux, le Cyberpunk néon, et le Pixel Art rétro — chaque style est une recette sélectionnée. Touchez-en un et la même idée prend une allure complètement différente, sans besoin d'écrire d'instructions.",
        keywords: [
          "styles artistiques IA",
          "générateur d'anime IA",
          "art cyberpunk IA",
          "appli de transfert de style IA",
        ],
      },
    ],
    artStyles: [
      { feel: "Photoréaliste, éclairage naturel, détail ultra-HD.", use: "Maquettes de produits, portraits réalistes, scènes crédibles." },
      { feel: "Magie lumineuse, créatures mythiques, atmosphère éthérée.", use: "Couvertures de livres, personnages de jeux de rôle, mondes oniriques." },
      { feel: "Cellulo, contours marqués, personnages expressifs.", use: "Avatars style anime, planches de manga, fan art." },
      { feel: "Éclairage dramatique, grain de pellicule, ambiance grand écran.", use: "Looks affiche de film, cadres narratifs pleins d'atmosphère." },
      { feel: "Engrenages en laiton, machinerie victorienne, détail ornemental.", use: "Personnages rétro-industriels et mondes inventifs." },
      { feel: "Néons, haute technologie, paysages urbains rétro-futuristes.", use: "Avatars futuristes, scènes de science-fiction, art de jeux vidéo." },
      { feel: "Grain de pellicule, tons délavés, look photo rétro et nostalgique.", use: "Portraits rétro et images d'inspiration analogique." },
      { feel: "Coups de pinceau à la main, tons picturaux chaleureux.", use: "Portraits de beaux-arts et pièces façon galerie." },
      { feel: "Contours marqués, ombrage bande dessinée et trame.", use: "Autocollants, planches de bande dessinée, graphismes ludiques." },
      { feel: "Blocs rétro 8 bits et palettes limitées.", use: "Sprites de jeu, icônes rétro, scènes pixelisées nostalgiques." },
    ],
    avatarCategories: [
      { blurb: "Des personas héroïques, fantastiques et de science-fiction créés à partir d'un seul selfie." },
      { blurb: "Des looks éditoriaux, de podium et de style de vie pour une photo de profil qui se démarque." },
      { blurb: "Traversez les époques, de l'Égypte antique à la Renaissance." },
      { blurb: "Des portraits chaleureux, naturels et du quotidien qui restent malgré tout élégants." },
    ],
    useCases: [
      {
        title: "Du contenu pour réseaux sociaux qui arrête le défilement",
        audience: "Créateurs et utilisateurs des réseaux sociaux",
        problem:
          "Vous avez besoin de visuels frais et tendance pour Instagram, TikTok, et les Stories, mais les photos de banque d'images paraissent génériques et les outils de design prennent trop de temps.",
        solution:
          "Générez de l'art original ou retouchez vos propres photos avec des styles en un geste, puis partagez directement dans n'importe quelle appli via le menu de partage natif.",
        example:
          "Tapez « horizon néon reflété dans une rue sous la pluie, cinématographique » et publiez le résultat dans votre Story en moins d'une minute.",
        feature: "Générateur d'images IA",
      },
      {
        title: "Une photo de profil qui n'est pas qu'un simple filtre",
        audience: "Toute personne renouvelant sa photo de profil",
        problem:
          "Tout le monde utilise les mêmes filtres. Vous voulez une photo de profil qui ressemble vraiment à une version différente et sublimée de vous.",
        solution:
          "Choisissez un modèle d'avatar, ajoutez un selfie, et obtenez un portrait thématique — super-héros, anime, haute couture, ou noble de la Renaissance — prêt pour n'importe quelle plateforme.",
        example:
          "Transformez un selfie pris au téléphone en photo éditoriale haute couture pour LinkedIn, ou en avatar Anime Hero pour Discord.",
        feature: "Créateur d'avatars IA",
      },
      {
        title: "Des retouches photo rapides sans Photoshop",
        audience: "Retoucheurs photo occasionnels",
        problem:
          "Vous voulez changer une chose sur une photo — une tenue, l'arrière-plan, l'éclairage — mais les éditeurs professionnels sont écrasants et lents.",
        solution:
          "Décrivez le changement en langage courant et Photix l'applique. Superposez les retouches une par une jusqu'à ce que la photo soit exactement comme il faut.",
        example:
          "Importez un portrait et tapez « ajoute un béret rouge et change le fond pour Paris », puis « fais que ce soit l'automne ».",
        feature: "Éditeur de photos IA",
      },
      {
        title: "Art conceptuel et moodboards en déplacement",
        audience: "Amateurs, designers et écrivains",
        problem:
          "Vous avez une idée visuelle pour une histoire, un jeu, ou un projet, mais aucun moyen de la esquisser rapidement pendant qu'elle est fraîche.",
        solution:
          "Transformez une phrase en art conceptuel dans l'un des dix styles, régénérez pour obtenir des variations, et sauvegardez celles qui correspondent à votre tableau.",
        example:
          "Explorez « temple antique reconquis par la jungle » dans les styles Fantasy, Cinematic et Illustration côte à côte.",
        feature: "Styles artistiques IA",
      },
      {
        title: "Des avatars thématiques pour groupes d'amis et équipes",
        audience: "Communautés et petites équipes",
        problem:
          "Vous voulez un ensemble assorti d'avatars pour un chat de groupe, un clan de jeu vidéo, ou une page d'équipe — mais engager un illustrateur n'est pas réaliste.",
        solution:
          "Tout le monde choisit le même modèle d'avatar et ajoute son propre selfie pour un ensemble de portraits cohérent et à l'image de la marque, en quelques minutes.",
        example:
          "Un clan de jeu vidéo génère tous des avatars Galactic Warrior ; une équipe de startup utilise toutes des photos de profil Chic Minimalist.",
        feature: "Créateur d'avatars IA",
      },
      {
        title: "Apprendre l'art par IA sans courbe d'apprentissage",
        audience: "Nouveaux venus curieux de l'IA",
        problem:
          "Vous avez entendu parler de l'art par IA mais l'ingénierie des instructions, les modèles, et les réglages semblent intimidants et techniques.",
        solution:
          "Des styles sélectionnés, des modèles prêts à l'emploi, et un interrupteur Enhance Prompt signifient que vous obtenez d'excellents résultats sans savoir comment tout cela fonctionne.",
        example:
          "Touchez le style Cinematic, tapez quelques mots, activez Enhance Prompt, et laissez Photix écrire l'instruction détaillée pour vous.",
        feature: "Générateur d'images IA",
      },
    ],
    benefits: [
      { title: "Aucune compétence requise", body: "Des styles sélectionnés, des modèles d'avatars, et une amélioration automatique des instructions signifient des résultats impressionnants sans talent de design ni connaissance des instructions." },
      { title: "Tout dans une appli", body: "Génération, retouche, et création d'avatars vivent sous une interface cohérente — la plupart des applis ne font qu'une des trois choses." },
      { title: "Retouche conversationnelle", body: "Les retouches s'appuient les unes sur les autres, pour affiner une image étape par étape en langage courant plutôt que de lutter avec des calques et des outils." },
      { title: "Des résultats en quelques secondes", body: "Un compte à rebours convivial vous met à l'aise pendant que l'IA travaille, et les images terminées sont à un geste de votre pellicule ou d'un menu de partage." },
      { title: "Des avatars conscients du visage", body: "Photix confirme qu'un visage est présent avant de générer, pour que vous ne gaspilliez jamais une création sur une photo inutilisable." },
      { title: "Conçu pour iPhone et iPad", body: "Une interface soignée au thème sombre qui s'adapte avec fluidité du téléphone dans votre main au grand écran de l'iPad." },
    ],
    problemsSolved: [
      "« J'ai une idée mais je ne sais pas dessiner ni concevoir. »",
      "« Je veux une photo de profil sympa qui ne soit pas qu'un simple filtre. »",
      "« Je veux modifier une photo mais Photoshop me dépasse. »",
      "« Je ne sais pas comment écrire de bonnes instructions pour l'IA. »",
      "« Je veux des résultats rapides, sur mon téléphone, prêts à partager. »",
    ],
    howItWorks: [
      { title: "Décrivez ou choisissez", body: "Tapez une idée, choisissez un style en un geste, ou sélectionnez un modèle d'avatar. Pas de page blanche — chaque mode vous donne un point de départ." },
      { title: "Ajoutez une photo (facultatif)", body: "Joignez un selfie ou jusqu'à deux photos de référence pour guider le résultat, ou passez directement à la génération depuis le texte seul." },
      { title: "Touchez Generate", body: "Un compte à rebours convivial « ~10 secondes restantes » vous rassure pendant que Photix améliore l'instruction et exécute le modèle d'IA." },
      { title: "Affinez, enregistrez, ou partagez", body: "Zoomez, régénérez pour de nouvelles variantes, comparez-les dans la bande d'historique, puis téléchargez vers Photos ou partagez où vous voulez." },
    ],
    companionApps: [
      { what: "Retoucheur photo IA" },
      { what: "Générateur de vidéos IA" },
      { what: "Échange de visage IA" },
      { what: "Photo vers vidéo" },
    ],
    testimonials: [
      { quote: "J'ai fait une version super-héros de moi-même pour mon profil en environ trente secondes. Tout mon chat de groupe l'a téléchargée après.", name: "Maya R.", role: "Créatrice de contenu" },
      { quote: "J'ai enfin retouché une photo sans ouvrir Photoshop. J'ai juste tapé ce que je voulais changer et ça a marché.", name: "Daniel K.", role: "Propriétaire de petite entreprise" },
      { quote: "Les styles font tout le travail difficile. Je tape quelques mots, je touche Cinematic, et ça ressemble à une affiche de film.", name: "Priya S.", role: "Artiste amateure" },
    ],
    faqs: [
      {
        category: "Prise en main",
        items: [
          { q: "Qu'est-ce que Photix ?", a: "Photix est une appli iOS qui permet à chacun de créer, transformer, et retoucher des images avec l'IA. À partir d'une simple description textuelle ou d'une photo, vous pouvez générer de l'art original, modifier des images en décrivant des changements, et transformer des selfies en avatars thématiques — le tout dans une interface conviviale de toucher et taper, sans compétence de design requise." },
          { q: "Ai-je besoin d'une expérience en design ou en rédaction d'instructions ?", a: "Non. Photix est conçu pour les personnes sans expérience en design. Dix styles artistiques sélectionnés et des dizaines de modèles d'avatars vous donnent d'excellents résultats d'emblée, et l'interrupteur Enhance Prompt peut enrichir automatiquement votre description pour que vous n'ayez jamais à apprendre l'« ingénierie des instructions »." },
          { q: "Photix est-il gratuit ?", a: "Oui — Photix est gratuit à télécharger et à utiliser, avec des limites d'utilisation, des publicités, et un petit filigrane sur les images enregistrées. L'abonnement Photix PRO débloque une création illimitée, sans publicité et sans filigrane, avec un traitement prioritaire." },
          { q: "Quels appareils Photix prend-il en charge ?", a: "Photix fonctionne sur iPhone et iPad. La mise en page s'adapte aux grands écrans pour un confort d'utilisation aussi bien sur iPad que sur votre téléphone." },
          { q: "Dois-je créer un compte ?", a: "Non. Photix ne nécessite aucune connexion ni compte. Vous pouvez commencer à créer immédiatement, et votre statut PRO est enregistré sur votre appareil." },
        ],
      },
      {
        category: "Fonctionnalités",
        items: [
          { q: "Comment fonctionne le générateur d'images IA ?", a: "Ouvrez l'onglet AI Generate, tapez une description de ce que vous voulez, touchez éventuellement l'un des dix styles artistiques et joignez jusqu'à deux photos de référence, puis touchez Generate. Photix améliore votre instruction, exécute le modèle d'IA, et renvoie une image haute résolution que vous pouvez régénérer, télécharger, ou partager." },
          { q: "Puis-je modifier mes propres photos ?", a: "Oui. Dans AI Edit, vous choisissez une photo et décrivez le changement — par exemple, « ajoute un chapeau rouge » ou « change le fond pour une plage ». Chaque retouche s'appuie sur le résultat précédent, pour superposer des changements et affiner une image de façon conversationnelle." },
          { q: "Comment fonctionnent les avatars IA ?", a: "Dans AI Avatar, vous parcourez des galeries de modèles — Trending, AI Avatars, Fashion, Historical, et Lifestyle — choisissez un look, et ajoutez un selfie. Photix détecte un visage pour s'assurer que votre photo fonctionnera, pré-remplit une instruction descriptive que vous pouvez ajuster, et génère un portrait thématique." },
          { q: "Puis-je combiner deux photos en une seule image ?", a: "Oui. Vous pouvez joindre jusqu'à deux photos de référence dans AI Generate et AI Edit, pour que Photix les combine ou les transforme ensemble à partir d'une seule description — par exemple, en plaçant une personne dans une scène entièrement nouvelle." },
          { q: "Quels styles artistiques sont inclus ?", a: "L'appli est livrée avec dix styles : Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration, et Pixel Art. Chacun est une recette en un geste qui transforme la même idée en une allure complètement différente." },
        ],
      },
      {
        category: "Photix PRO et facturation",
        items: [
          { q: "Qu'inclut Photix PRO ?", a: "PRO supprime les filigranes et les publicités, lève les limites d'utilisation sur les générations et les retouches multi-étapes, et vous donne un traitement prioritaire et plus rapide. Il transforme Photix en création illimitée, ininterrompue, et sans filigrane." },
          { q: "Combien coûte Photix PRO ?", a: "Photix est gratuit à télécharger et à utiliser. PRO est une mise à niveau optionnelle avec des abonnements hebdomadaires, trimestriels, et semestriels abordables à partir d'un prix hebdomadaire bas, plus une option d'essai gratuit. Les prix actuels sont affichés dans l'appli et localisés pour votre région par l'App Store." },
          { q: "Puis-je annuler à tout moment ?", a: "Oui. Tous les abonnements se renouvellent automatiquement et peuvent être annulés à tout moment depuis les réglages d'abonnement de votre identifiant Apple. Photix prend aussi en charge la restauration des achats pour réappliquer un abonnement actif sur votre appareil." },
          { q: "Mon abonnement se synchronise-t-il entre les appareils ?", a: "Le statut PRO est enregistré par appareil, il n'y a donc pas de compte partagé entre appareils. Vous pouvez utiliser la restauration des achats pour réactiver un abonnement existant sur le même appareil." },
        ],
      },
      {
        category: "Confidentialité et sécurité",
        items: [
          { q: "Photix respecte-t-il la vie privée ?", a: "Photix demande l'autorisation de suivi des applications et le consentement RGPD/UE avant tout suivi publicitaire, et utilise des analyses respectueuses de la confidentialité. Il n'y a aucun compte utilisateur, et votre statut PRO reste sur votre appareil. Consultez la page Confidentialité pour plus de détails." },
          { q: "Existe-t-il des mesures de sécurité du contenu ?", a: "Oui. Un filtre de sécurité du contenu bloque les instructions contenant des termes explicites ou interdits avant qu'elles n'atteignent le serveur, avec un message de consignes, pour que l'appli reste adaptée à tous." },
          { q: "Mes images enregistrées auront-elles un filigrane ?", a: "Les images enregistrées ou partagées avec la version gratuite portent un petit filigrane Photix. Passer à Photix PRO supprime le filigrane de tous vos exports." },
        ],
      },
    ],
  },

  home: {
    hero: {
      ratingSuffix: "utilisateurs satisfaits",
      titlePre: "Créez tout ce",
      titleAccent: "que vous pouvez imaginer",
      description:
        "Photix est l'appli d'images IA tout-en-un pour iPhone et iPad. Transformez quelques mots en art original, modifiez n'importe quelle photo simplement en décrivant le changement, et transformez des selfies en avatars thématiques — sans compétence de design, compte, ni expertise en instructions.",
      exploreCta: "Découvrir les fonctionnalités",
      freeNote: "Gratuit à télécharger · Aucun compte ni connexion requis · iPhone et iPad",
    },
    stats: {
      rating: "Note App Store",
      users: "Utilisateurs satisfaits",
      modes: "Modes créatifs dans une appli",
      styles: "Styles artistiques en un geste",
    },
    featuresSection: {
      eyebrow: "Une appli, quatre modes créatifs",
      title: "Tout ce qu'il faut pour créer avec l'IA",
      description:
        "La plupart des applis font une chose. Photix réunit la génération d'images, la retouche photo, et la création d'avatars dans une seule interface cohérente, conçue pour les personnes qui veulent simplement d'excellents résultats.",
    },
    highlights: [
      {
        eyebrow: "AI Generate",
        title: "Transformez une phrase en art impressionnant",
        description:
          "Décrivez une scène, un personnage, ou une ambiance et Photix génère une image entièrement nouvelle en haute résolution en quelques secondes. Touchez un style, joignez jusqu'à deux photos de référence, et laissez l'option Enhance Prompt intégrée compléter les détails pour vous.",
        bullets: [
          "Dix styles artistiques en un geste, de Realism à Anime et Cyberpunk",
          "Enhance Prompt enrichit automatiquement votre description",
          "Joignez jusqu'à deux photos de référence pour guider le résultat",
          "Régénérez pour de nouvelles variations et comparez-les instantanément",
        ],
        cta: "À propos du générateur d'images IA",
      },
      {
        eyebrow: "AI Edit",
        title: "Modifiez n'importe quelle photo simplement en la décrivant",
        description:
          "Importez une photo et tapez ce que vous voulez changer — une tenue, un arrière-plan, l'éclairage, la saison. Chaque retouche s'appuie sur la précédente, pour sculpter une image de façon conversationnelle sans jamais toucher un calque ou un curseur.",
        bullets: [
          "Retouches en langage courant : « ajoute un béret rouge », « fais que ce soit l'automne »",
          "Retouche itérative et multi-étapes qui s'appuie sur chaque résultat",
          "Combinez deux photos de référence en une image parfaite",
          "Naviguez entre les variantes et enregistrez celle que vous préférez",
        ],
        cta: "À propos de l'éditeur de photos IA",
      },
      {
        eyebrow: "AI Avatar",
        title: "Transformez un selfie en portrait thématique",
        description:
          "Choisissez un modèle — Superhero, Renaissance Noble, Anime Hero, High Fashion — ajoutez un selfie, et Photix renvoie un portrait soigné et prêt à partager. La détection de visage vérifie votre photo en amont pour que vous ne gaspilliez jamais une génération.",
        bullets: [
          "Des dizaines de modèles dans Fashion, Historical, et plus",
          "Conscient du visage : confirme un selfie utilisable avant de générer",
          "Des instructions modifiables pour peaufiner chaque look",
          "Un geste pour enregistrer dans Photos ou partager où vous voulez",
        ],
        cta: "À propos du créateur d'avatars IA",
      },
    ],
    artStylesSection: {
      eyebrow: "Styles artistiques",
      title: "Dix looks qui font l'ingénierie des instructions à votre place",
      description:
        "Chaque style est une recette sélectionnée. Touchez-en un et la même idée prend une allure complètement différente — sans besoin d'écrire d'instructions.",
      exploreCta: "Découvrir tous les styles artistiques",
    },
    howSection: {
      eyebrow: "Comment ça marche",
      title: "De l'idée à l'image prête à partager en quatre gestes",
      description: "Le même rythme simple anime chaque mode créatif de Photix.",
    },
    useCasesSection: {
      eyebrow: "Cas d'usage",
      title: "Ce que les gens créent avec Photix",
      description:
        "Que vous publiiez du contenu, renouveliez une photo de profil, ou modifiiez une photo, Photix vous accompagne là où en est votre imagination.",
      seeAll: "Voir tous les cas d'usage",
    },
    benefitsSection: {
      eyebrow: "Pourquoi Photix",
      title: "Conçu pour lever chaque obstacle à la création",
    },
    problemsCard: { heading: "Photix est fait pour vous si vous avez déjà pensé…" },
    testimonialsSection: {
      eyebrow: "Adopté par les créateurs",
      title: "Rejoignez {users} personnes qui créent déjà",
      description: "Photix affiche une note de {rating} étoiles sur l'App Store. Voici ce que certains en disent.",
    },
    companionSection: {
      eyebrow: "La famille AI Journey",
      title: "Plus de créativité IA au-delà de Photix",
      description: "Photix fait partie d'une gamme plus large d'applis créatives IA. Découvrez les applis compagnes conçues par la même équipe.",
    },
    freeToStart: {
      eyebrow: "Gratuit pour commencer",
      title: "Téléchargez gratuitement et commencez à créer",
      description:
        "Photix est gratuit à télécharger et gratuit à utiliser. Créez de l'art original, des avatars, et des retouches dès votre première minute — sans compte, sans carte bancaire, et sans compétence de design.",
      cta: "Voir tout ce que vous pouvez créer",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Questions fréquentes",
      descriptionPre: "Tout ce qu'il faut savoir pour démarrer. ",
      seeFullFaq: "Voir toute la FAQ",
    },
    cta: {
      title: "Créez votre première image dès aujourd'hui",
      description: "Téléchargez Photix gratuitement et transformez votre imagination en art prêt à partager en quelques secondes.",
      secondary: "Voir les fonctionnalités",
    },
  },

  featuresPage: {
    header: {
      eyebrow: "Fonctionnalités",
      title: "Tout ce que Photix peut créer",
      intro:
        "Photix est un studio créatif de poche. Quatre modes créatifs, dix styles artistiques, amélioration des instructions, photos de référence, et partage instantané — le tout enveloppé dans une interface conviviale de toucher et taper qui ne demande aucune compétence de design.",
    },
    highlights: [
      {
        eyebrow: "AI Generate · De texte à image",
        title: "Un générateur d'images IA qui va à votre rencontre",
        description:
          "Tapez une idée dans le champ « Décrivez votre idée… », choisissez parmi dix styles sélectionnés, et générez une image entièrement nouvelle. Joignez jusqu'à deux photos de référence pour combiner ou transformer des images existantes, et activez Enhance Prompt pour laisser Photix enrichir de courtes descriptions en instructions détaillées.",
        bullets: [
          "Instruction libre plus recettes de style en un geste",
          "Enhance Prompt transforme quelques mots en une description riche",
          "Jusqu'à deux photos de référence par génération",
          "Régénérez jusqu'à 10 variations à partir d'un résultat",
        ],
      },
      {
        eyebrow: "AI Edit · Modification de photo",
        title: "Retouche photo conversationnelle, sans calques nécessaires",
        description:
          "Choisissez une photo, décrivez le changement, et touchez Modify. Chaque retouche s'accumule sur le résultat précédent, si bien que « ajoute un chapeau rouge » suivi de « fais que ce soit l'automne » se superpose naturellement. Ajoutez une deuxième photo de référence pour guider la retouche, et naviguez entre les variantes avant d'enregistrer.",
        bullets: [
          "Décrivez les changements en français courant",
          "Retouches itératives et multi-étapes qui s'appuient les unes sur les autres",
          "Combinez deux photos en une seule image composée",
          "Enregistrez la variante que vous préférez sur l'écran de résultat",
        ],
      },
      {
        eyebrow: "AI Avatar · Du selfie au portrait",
        title: "Des avatars thématiques à partir d'un seul selfie",
        description:
          "Parcourez des galeries de modèles — Trending, AI Avatars, Fashion, Historical, et Lifestyle — choisissez un look, et ajoutez un selfie. Photix détecte un visage pour s'assurer que votre photo fonctionnera, pré-remplit une instruction descriptive que vous pouvez ajuster, et génère un portrait soigné.",
        bullets: [
          "Des dizaines de modèles dans cinq catégories thématiques",
          "La détection de visage évite les générations gaspillées",
          "Des instructions modifiables et pré-remplies pour chaque modèle",
          "Des portraits thématiques en un geste, prêts à partager",
        ],
      },
    ],
    exploreCtaPrefix: "Explorer",
    resultSection: {
      eyebrow: "Résultat, enregistrer et partager",
      title: "Un résultat soigné, exactement où vous le souhaitez",
      description: "Quel que soit le mode utilisé, chaque création aboutit à la même expérience de résultat plaisante.",
    },
    resultFeatures: [
      { title: "Enregistrez et partagez instantanément", body: "Chaque résultat est à un geste de votre pellicule photo ou du menu de partage natif d'iOS — publiez sur Instagram, envoyez dans Messages, ou enregistrez pour plus tard." },
      { title: "Historique des variantes", body: "Régénérez pour de nouvelles approches et basculez entre les variantes dans une bande d'historique, pour comparer les options et garder la meilleure." },
      { title: "Des résultats rassurants et rapides", body: "Un compte à rebours de progression convivial vous met à l'aise pendant que l'IA travaille, et PRO ajoute un traitement prioritaire pour des générations plus rapides." },
      { title: "Privé et sûr par conception", body: "Aucun compte ni connexion, des demandes explicites de consentement au suivi, et un filtre de sécurité du contenu qui bloque les instructions dangereuses avant leur envoi." },
    ],
    howSection: {
      eyebrow: "Comment ça marche",
      title: "Le cycle créatif universel",
      description: "Décrivez ou choisissez, ajoutez une photo si vous le souhaitez, générez, puis affinez — le rythme est le même partout dans Photix.",
    },
    stylesCard: {
      title: "Dix styles artistiques intégrés",
      body: "Realism, Fantasy, Anime, Cinematic, Steampunk, Cyberpunk, Vintage, Paint, Illustration, et Pixel Art. Chacun transforme la même idée en une allure complètement différente en un seul geste.",
      cta: "Parcourir les styles",
    },
    freeCard: {
      title: "Gratuit pour créer",
      body: "Chaque mode créatif est gratuit à utiliser — sans compte, sans carte bancaire, sans compétence de design. Une mise à niveau PRO optionnelle dans l'appli débloque une création illimitée, sans publicité et sans filigrane, quand vous le souhaitez.",
      cta: "Découvrir des idées d'avatars",
    },
    companionSection: {
      eyebrow: "Famille AI Journey",
      title: "Découvrez les applis compagnes",
      description: "Photix vous fait aussi découvrir des applis sœurs pour la vidéo, l'amélioration, les portraits animés, et l'échange de visage.",
    },
  },

  toolPages: {
    aiImageGenerator: {
      headerTitle: "Générateur d'images IA — du texte à l'image en quelques secondes",
      intro:
        "Décrivez tout ce que vous pouvez imaginer et Photix génère une image entièrement nouvelle en haute résolution — sans logiciel de design, sans ingénierie d'instructions, sans compte. Juste des mots, un style, et un geste.",
      leadTitle: "Une page blanche, résolue",
      leadBody:
        "Les outils d'art IA traditionnels vous demandent de maîtriser instructions, modèles, et réglages avant de voir un seul résultat. Photix inverse cela. Vous apportez l'intention — une phrase, un style, ou une photo de référence — et il se charge d'améliorer l'instruction, d'appliquer la recette artistique, d'exécuter le modèle, et de livrer un résultat que vous pouvez affiner en quelques secondes.",
      checklist: [
        "Un rendu haute résolution, prêt à partager, à chaque fois",
        "Dix styles en un geste, de Realism à Pixel Art",
        "Enhance Prompt complète le détail descriptif",
        "Jusqu'à deux photos de référence par génération",
      ],
      howTitle: "Des mots à l'œuvre d'art en quatre étapes",
      steps: [
        { title: "Décrivez votre idée", body: "Tapez n'importe quoi dans la zone d'instruction — « un chalet douillet dans une forêt enneigée la nuit », « un dragon robotique au-dessus de nuages dorés ». Pas d'angoisse de la page blanche ; un style ou une photo de référence peuvent aussi porter l'idée." },
        { title: "Choisissez un style (facultatif)", body: "Touchez l'un des dix styles sélectionnés pour transformer instantanément l'allure — Cinematic pour le drame, Anime pour l'art de personnages, Realism pour le détail réaliste." },
        { title: "Ajoutez des références et améliorez", body: "Joignez jusqu'à deux photos de référence pour les combiner ou les transformer, et activez Enhance Prompt pour laisser Photix développer une idée courte en une instruction détaillée." },
        { title: "Générez et affinez", body: "Touchez Generate, observez le compte à rebours convivial, puis régénérez pour des variations, zoomez, téléchargez, ou partagez votre préférée." },
      ],
      promptIdeasTitle: "Vous ne savez pas quoi taper ? Commencez ici.",
      promptIdeasDescription: "Copiez l'une de ces idées dans la zone d'instruction, choisissez un style, et touchez Generate.",
      promptIdeas: [
        "Château flottant au-dessus des nuages au coucher du soleil",
        "Un dragon robotique survolant une ville néon",
        "Princesse elfe dans une forêt enchantée",
        "Forêt magique avec des arbres lumineux et des rayons de lumière dorés",
        "Portrait vintage d'un astronaute, granuleux et chaleureux",
        "Marché de rue cyberpunk sous la pluie, reflets partout",
      ],
      tipsTitle: "Conseils pour de meilleures images IA",
      tips: [
        "Nommez le sujet, le décor, et l'ambiance — « un renard, dans une forêt de pins brumeuse, à l'aube » vaut mieux que « un renard ».",
        "Laissez un style faire le gros du travail plutôt que de décrire l'éclairage et la texture à la main.",
        "Activez Enhance Prompt quand vous n'avez que quelques mots ; désactivez-le quand vous voulez un contrôle précis.",
        "Utilisez des photos de référence pour garder un visage, un objet, ou une composition spécifique cohérents.",
        "Régénérez plusieurs fois — de petits changements de formulation et de nouvelles graines produisent des résultats très différents.",
      ],
      stylesAsideTitle: "Chaque idée, de dix façons",
      stylesAsideBody: "Les styles sont le moyen le plus rapide de changer un résultat sans réécrire votre instruction. Voici les dix qui accompagnent Photix.",
      stylesAsideCta: "En savoir plus sur les styles artistiques",
      faqTitle: "Questions sur le générateur d'images IA",
      faqs: [
        { q: "Comment fonctionne le générateur d'images IA de Photix ?", a: "Ouvrez l'onglet AI Generate, tapez une description, touchez éventuellement un style et joignez jusqu'à deux photos de référence, puis touchez Generate. Photix améliore votre instruction, exécute le modèle d'IA, et renvoie une image haute résolution que vous pouvez régénérer, télécharger, ou partager." },
        { q: "Dois-je savoir écrire des instructions ?", a: "Non. Les dix styles en un geste et l'interrupteur Enhance Prompt s'occupent de la partie difficile. Vous pouvez obtenir des résultats saisissants avec quelques mots simples seulement." },
        { q: "Puis-je utiliser mes propres photos comme référence ?", a: "Oui. Vous pouvez joindre jusqu'à deux photos de référence pour guider une génération — par exemple, pour combiner deux images ou transformer une existante." },
        { q: "Combien de variations puis-je faire ?", a: "À partir d'un seul résultat, vous pouvez régénérer jusqu'à 10 variations. Photix PRO supprime les limites d'utilisation et ajoute un traitement prioritaire pour des résultats plus rapides." },
      ],
      ctaTitle: "Générez votre première image gratuitement",
      ctaDescription: "Téléchargez Photix et transformez une phrase en art impressionnant en quelques secondes.",
      ctaSecondary: "Voir toutes les fonctionnalités",
    },
    aiPhotoEditor: {
      headerTitle: "Éditeur de photos IA — modifiez des photos en décrivant le changement",
      intro:
        "Oubliez calques, masques, et menus. Importez une photo, tapez ce que vous voulez changer, et Photix s'en charge. Puis continuez — chaque retouche s'appuie sur la précédente, pour sculpter une image phrase par phrase.",
      leadTitle: "Une retouche qui ressemble à une conversation",
      leadBody:
        "La plupart des éditeurs de photos vous obligent à trouver le bon outil avant de pouvoir faire une modification. Photix supprime totalement cette étape. Vous décrivez le résultat souhaité et il trouve comment y arriver — puis se souvient de votre demande, pour que votre instruction suivante s'appuie sur la précédente.",
      checklist: [
        "Changez tenues, arrière-plans, cheveux, éclairage, et plus",
        "Retouches itératives qui s'accumulent étape par étape",
        "Combinez deux photos de référence en une composition",
        "Comparez les variantes et enregistrez le meilleur résultat",
      ],
      howTitle: "Décrivez, modifiez, répétez",
      steps: [
        { title: "Choisissez une photo", body: "Choisissez l'image que vous voulez modifier. Ajoutez une deuxième photo facultative comme référence supplémentaire pour mélanger ou guider le changement." },
        { title: "Décrivez le changement", body: "Tapez ce que vous voulez en langage courant — une tenue, un arrière-plan, l'éclairage, un nouvel objet, une saison différente." },
        { title: "Touchez Modify", body: "Photix applique votre instruction et affiche le résultat. Ça ne vous plaît pas ? Régénérez pour obtenir d'autres variantes." },
        { title: "Superposez et enregistrez", body: "Modifiez à nouveau pour vous appuyer sur le dernier résultat, basculez entre les variantes, puis enregistrez celle que vous préférez dans Photos ou partagez-la." },
      ],
      examplesTitle: "De vraies retouches, en langage courant",
      examplesDescription: "Voici le type d'instruction que Photix comprend — et comment les retouches s'accumulent.",
      examples: [
        { prompt: "Ajoute un béret rouge et change le fond pour Paris", result: "Une nouvelle tenue et un nouveau décor, appliqués en une seule retouche." },
        { prompt: "Fais que ce soit l'automne", result: "Des tons chauds et une lumière saisonnière superposés au résultat précédent." },
        { prompt: "Je veux des cheveux blonds bouclés", result: "Un changement de coiffure naturel qui préserve le visage intact." },
        { prompt: "De nuit avec du néon", result: "Toute une nouvelle ambiance et un nouvel éclairage pour le même portrait." },
      ],
      faqTitle: "Questions sur l'éditeur de photos IA",
      faqs: [
        { q: "Comment modifier une photo avec Photix ?", a: "Ouvrez l'onglet AI Edit, choisissez une photo, et décrivez le changement souhaité — par exemple « ajoute un chapeau rouge » ou « change le fond pour une plage ». Touchez Modify et Photix renvoie la photo modifiée. Chaque retouche s'appuie sur le résultat précédent, pour affiner étape par étape." },
        { q: "Puis-je superposer plusieurs retouches ?", a: "Oui. AI Edit fonctionne de façon itérative : chaque Modify s'accumule sur le dernier résultat, pour superposer des changements — une coiffure, puis une tenue, puis un arrière-plan — dans un déroulé naturel et conversationnel." },
        { q: "Puis-je combiner deux photos ?", a: "Oui. Vous pouvez ajouter une deuxième photo de référence pour que Photix les combine ou les transforme ensemble à partir de votre description — par exemple, en plaçant une personne dans une scène entièrement nouvelle." },
        { q: "Ai-je besoin de compétences en retouche photo ?", a: "Non. Il n'y a ni calques, ni masques, ni curseurs. Si vous pouvez décrire le changement avec des mots, Photix peut l'appliquer." },
      ],
      ctaTitle: "Modifiez votre première photo gratuitement",
      ctaDescription: "Téléchargez Photix et changez n'importe quelle image simplement en décrivant ce que vous voulez.",
      ctaSecondary: "Voir toutes les fonctionnalités",
    },
    aiAvatar: {
      headerTitle: "Créateur d'avatars IA — transformez des selfies en portraits thématiques",
      intro:
        "Choisissez un modèle, ajoutez un selfie, et Photix vous transforme en super-héros, en héros d'anime, en noble de la Renaissance, ou en mannequin haute couture — un portrait soigné qui va bien au-delà d'un simple filtre.",
      leadTitle: "Une photo de profil qui n'est pas qu'un simple filtre",
      leadBody:
        "Les filtres retouchent une photo ; Photix la réinvente. Choisissez un thème et votre selfie devient un portrait pleinement réalisé — nouveau décor, garde-robe, et éclairage, avec votre ressemblance intacte. C'est le moyen le plus rapide d'obtenir un avatar qui se démarque sur les réseaux sociaux, en jeu vidéo, ou en messagerie.",
      checklist: [
        "Des dizaines de modèles dans cinq catégories thématiques",
        "Conscient du visage : valide votre selfie avant de générer",
        "Des instructions modifiables et pré-remplies pour chaque modèle",
        "Enregistrement et partage en un geste, sans filigrane avec PRO",
      ],
      howTitle: "Du selfie au portrait en quatre étapes",
      steps: [
        { title: "Parcourez les modèles", body: "Explorez des galeries thématiques — Trending, AI Avatars, Fashion, Historical, et Lifestyle — et choisissez un look qui correspond à votre style." },
        { title: "Ajoutez un selfie", body: "Choisissez un portrait dans votre pellicule. Photix détecte un visage en amont pour que vous ne gaspilliez jamais une génération sur une photo inutilisable." },
        { title: "Ajustez l'instruction", body: "Chaque modèle pré-remplit une instruction descriptive. Laissez-la telle quelle ou personnalisez-la avant de générer." },
        { title: "Générez et partagez", body: "Obtenez un portrait soigné et thématique en quelques secondes, puis téléchargez vers Photos ou partagez-le directement dans votre appli préférée." },
      ],
      galleriesTitle: "Des dizaines de looks, regroupés par thème",
      galleriesDescriptionPre: "Parcourez des collections sélectionnées et trouvez la persona parfaite — ou essayez-en plusieurs et choisissez votre préférée. Besoin d'un point de départ ? ",
      galleriesDescriptionLink: "Voir des idées d'avatars populaires",
      looksSuffix: "looks",
      crossPromo: {
        eyebrow: "Vous voulez aussi échanger des scènes ?",
        title: "Vous préférez vous glisser dans de vraies scènes ? Découvrez SwapTo",
        bodyPre: "Les avatars Photix vous réinventent en tant qu'art. Si vous souhaitez également placer votre visage dans des centaines de scènes photoréalistes tournées professionnellement — photos professionnelles, vacances, tapis rouges — essayez ",
        linkText: "l'avatar IA et l'échange de visage de SwapTo",
        bodyPost: " — conçu par la même équipe AI Journey.",
      },
      faqTitle: "Questions sur les avatars IA",
      faqs: [
        { q: "Comment fonctionne le créateur d'avatars IA ?", a: "Ouvrez l'onglet AI Avatar, parcourez les galeries de modèles, choisissez un look, et ajoutez un selfie. Photix détecte un visage pour confirmer que votre photo fonctionnera, pré-remplit une instruction descriptive que vous pouvez modifier, et génère un portrait thématique prêt à enregistrer ou partager." },
        { q: "Quels styles d'avatar sont disponibles ?", a: "Les modèles couvrent cinq catégories : Trending, AI Avatars (Superhero, Fantasy Princess, Anime Hero, Cyberpunk et plus), Fashion (High Fashion, Street Style, Vintage Glamour…), Historical (Renaissance Noble, Ancient Egypt, Samurai…), et Lifestyle (Cozy Smile, City Greenery…)." },
        { q: "Pourquoi Photix vérifie-t-il un visage ?", a: "Les avatars fonctionnent mieux à partir d'un portrait clair, donc Photix confirme qu'un visage est présent avant de générer. Si aucun n'est détecté, un message « Visage non détecté » s'affiche pour que vous puissiez choisir un meilleur selfie — vous épargnant une création gaspillée." },
        { q: "Puis-je utiliser des avatars comme photos de profil ?", a: "Absolument. Les portraits thématiques font d'excellentes photos de profil pour les réseaux sociaux, les jeux vidéo, et les applis de messagerie. Enregistrez des exports sans filigrane avec Photix PRO." },
      ],
      ctaTitle: "Créez votre avatar IA gratuitement",
      ctaDescription: "Téléchargez Photix, ajoutez un selfie, et devenez qui vous pouvez imaginer.",
      ctaSecondary: "Voir toutes les fonctionnalités",
    },
    artStyles: {
      headerTitle: "Des styles artistiques IA qui font l'ingénierie des instructions à votre place",
      intro:
        "Un style est une recette sélectionnée — l'éclairage, la texture, la palette, et l'ambiance qui font qu'un look ressemble à lui-même. Touchez-en un et la même idée est transformée, sans besoin de compétence de rédaction d'instructions.",
      leadTitle: "Pourquoi les styles valent mieux qu'écrire des instructions",
      leadBody1:
        "Obtenir un look précis d'un modèle d'IA signifie généralement décrire avec soin l'éclairage, le type de pellicule, la touche picturale, et l'étalonnage des couleurs. Les styles condensent tout cela en un seul geste. Tapez une idée simple — « un renard dans une forêt » — puis comparez-la en Realism, Anime, et Cinematic pour voir trois résultats complètement différents et soignés à partir des mêmes mots.",
      leadBody2:
        "Comme les styles sont des recettes cohérentes, ils sont aussi le moyen le plus simple de garder une série d'images qui semblent aller ensemble — idéal pour un feed thématique, un moodboard, ou un ensemble d'avatars assortis.",
      pairTitle: "Associez les styles avec",
      pairChecklist: [
        "Le générateur d'images IA pour de l'art original",
        "Des photos de référence pour garder un sujet cohérent",
        "Enhance Prompt pour un détail descriptif supplémentaire",
        "La régénération pour explorer les variations d'un look",
      ],
      pairCta: "Ouvrir le générateur d'images",
      collectionTitle: "Dix styles, dix ambiances distinctes",
      collectionDescription: "Chacun transforme votre résultat — voici comment ils se ressentent et quand y recourir.",
      ctaTitle: "Essayez chaque style gratuitement",
      ctaDescription: "Téléchargez Photix et voyez vos idées dans dix looks différents en un seul geste.",
      ctaSecondary: "Voir toutes les fonctionnalités",
    },
  },

  faqPage: {
    header: {
      eyebrow: "FAQ",
      title: "Questions fréquentes",
      intro: "Tout ce que vous pourriez vouloir savoir sur Photix — du fonctionnement de chaque mode créatif à Photix PRO, en passant par la confidentialité, et la facturation.",
    },
    cta: {
      title: "Encore une question ?",
      description: "Contactez directement l'équipe et nous vous aiderons à tirer le meilleur parti de Photix.",
      secondary: "Nous contacter",
    },
  },

  useCasesPage: {
    header: {
      eyebrow: "Cas d'usage",
      title: "Ce que vous pouvez créer avec Photix",
      intro: "Photix est conçu pour les personnes ordinaires avec une idée et un téléphone. Voici les scénarios concrets où il excelle — et le problème précis qu'il résout dans chacun.",
    },
    problemsSection: {
      eyebrow: "Problèmes résolus",
      title: "Si vous avez déjà pensé l'un de ceux-ci, Photix est fait pour vous",
    },
    cta: {
      title: "Donnez vie à votre idée",
      description: "Quoi que vous essayiez de créer, Photix le transforme en image prête à partager en quelques secondes. Téléchargez gratuitement.",
      secondary: "Découvrir les fonctionnalités",
    },
  },

  aboutPage: {
    header: {
      eyebrow: "À propos",
      title: "Rendre la création d'images par IA accessible à tous, sans effort",
      intro: "La plupart des gens ont des idées et des photos qu'ils aimeraient voir réinventées, mais manquent des outils ou du talent pour y parvenir. Photix existe pour éliminer chaque obstacle entre l'imagination et une image terminée et partageable.",
    },
    missionLead: "Notre mission est simple :",
    missionRest: " rendre la création d'images par IA délicieuse et accessible à quiconque possède un téléphone. Les éditeurs de photos traditionnels sont complexes, et les outils d'IA professionnels sont intimidants. Photix condense tout cela en une expérience conviviale de toucher et taper, où l'IA fait le gros du travail et vous décrivez simplement ce que vous voulez.",
    missionBody2: "L'idée centrale du produit est un seul cycle créatif : vous fournissez l'intention — une instruction textuelle, un style choisi, ou un modèle — et éventuellement une photo d'entrée. Photix s'occupe de tout le reste : améliorer l'instruction, appliquer la recette artistique, exécuter le modèle, et livrer un résultat de haute qualité que vous pouvez affiner, enregistrer, et partager.",
    pullQuote: "« Photix transforme les mots ou selfies de chacun en imagerie IA prête à partager en quelques secondes — un studio créatif complet qui ne demande ni compétence, ni compte, ni courbe d'apprentissage. »",
    ratingLine: "Cette approche fonctionne : Photix affiche une note de {rating} étoiles et a accueilli {users} utilisateurs satisfaits qui créent de l'art original, transforment des selfies, et modifient des photos chaque jour.",
    audienceSection: {
      eyebrow: "À qui s'adresse Photix",
      title: "Conçu pour les créateurs du quotidien",
      colAudience: "Public",
      colWant: "Ce qu'ils veulent",
      colHow: "Comment Photix aide",
    },
    audience: [
      { who: "Utilisateurs et créateurs de réseaux sociaux", want: "Des visuels et avatars accrocheurs et tendance à publier", how: "Des styles en un geste, des modèles tendance, et un partage instantané" },
      { who: "Créatifs occasionnels et amateurs", want: "Donner vie à des idées imaginatives", how: "Du texte à l'image avec dix styles artistiques sélectionnés" },
      { who: "Passionnés d'expression personnelle", want: "Se réinventer dans des thèmes amusants", how: "Des avatars super-héros, fantastiques, historiques, et de mode" },
      { who: "Retoucheurs photo occasionnels", want: "Des ajustements rapides sans outils professionnels", how: "Une retouche IA en décrivant le changement" },
      { who: "Nouveaux venus curieux de l'IA", want: "Essayer l'art IA sans courbe d'apprentissage", how: "Des modèles, une amélioration des instructions, et des parcours guidés" },
    ],
    strengthsSection: { eyebrow: "Pourquoi ça marche", title: "Ce qui rend Photix différent" },
    strengths: [
      { title: "La polyvalence en une appli", body: "Génération, retouche, et avatars sous une seule interface cohérente — la plupart des concurrents ne font qu'une seule chose." },
      { title: "Courbe d'apprentissage nulle", body: "Des styles sélectionnés, des modèles d'avatars, et une amélioration des instructions signifient d'excellents résultats sans compétence de rédaction d'instructions." },
      { title: "Retouche conversationnelle", body: "Les retouches s'appuient les unes sur les autres, vous permettant de sculpter une image par langage naturel, étape par étape." },
      { title: "Une expérience délicieuse et rassurante", body: "Un thème sombre soigné, des comptes à rebours de progression, des résultats zoomables, et un historique des variantes suppriment l'anxiété du « est-ce que ça marche ? »." },
      { title: "Un rendu sans friction", body: "L'enregistrement en un geste et le partage natif placent les images terminées exactement là où vous les voulez." },
      { title: "Soucieux de la confidentialité", body: "Des flux explicites de suivi et de consentement, plus un filtre de sécurité du contenu côté client, sans compte à gérer." },
    ],
    familySection: {
      eyebrow: "AI Journey",
      title: "Membre d'une famille d'applis créatives IA",
      description: "Photix est l'une des {count} applis de la gamme AI Journey. Chacune explore un aspect différent de la créativité IA, et Photix vous aide à toutes les découvrir.",
    },
  },

  contactPage: {
    header: {
      eyebrow: "Contact",
      title: "Nous serions ravis de vous entendre",
      intro: "Que vous ayez une question, rencontriez un souci, ou veniez tout juste de créer quelque chose dont vous êtes fier, l'équipe Photix n'est qu'à un message.",
    },
    emailCard: {
      title: "Support par e-mail",
      body: "Questions, signalements de bugs, aide à l'abonnement, ou demandes liées à la confidentialité — écrivez-nous et nous vous répondrons.",
    },
    feedbackCard: {
      title: "Retours dans l'appli",
      body: "Après un résultat, touchez « Satisfait du résultat ? ». Si quelque chose ne va pas, choisissez « Pas vraiment » pour envoyer un retour qui parvient directement à l'équipe par e-mail.",
      cta: "Lire d'abord la FAQ",
    },
    rateCard: {
      title: "Notez Photix",
      body: "Vous appréciez l'appli ? Une note sur l'App Store aide vraiment d'autres créateurs à découvrir Photix.",
      cta: "Noter sur l'App Store",
    },
    cta: {
      title: "Vous n'avez pas encore essayé Photix ?",
      description: "Téléchargez-le gratuitement et découvrez ce que vous pouvez créer en votre première minute.",
      secondary: "Découvrir les fonctionnalités",
    },
  },

  avatarIdeasPage: {
    header: {
      eyebrow: "Idées d'avatars",
      title: "Idées d'avatars IA pour une photo de profil qui se démarque",
      intro: "Vous ne savez pas quel avatar créer ? Voici l'inspiration — des styles populaires, des sélections pour chaque occasion, et des astuces pour le meilleur selfie. Choisissez un look, ajoutez une photo, et Photix fait le reste.",
    },
    howToChoose: {
      title: "Une meilleure photo de profil en trois gestes",
      body: "Chaque idée ci-dessous est un modèle prêt à l'emploi. Aucune instruction à écrire ni compétence de design requise — choisissez un style, ajoutez un selfie, et vous aurez un portrait soigné et thématique en quelques secondes. Vous ne savez pas par où commencer ? Choisissez selon l'ambiance que vous voulez ou l'endroit où vous l'utiliserez.",
      checklist: [
        "{count}+ modèles dans des catégories thématiques",
        "Conscient du visage — vérifie votre selfie avant de générer",
        "Des instructions modifiables, bien que vous n'ayez jamais à y toucher",
        "Enregistrement et partage en un geste dans n'importe quelle appli",
      ],
      cta: "Comment fonctionne le créateur d'avatars",
    },
    popularSection: {
      eyebrow: "Idées populaires",
      title: "Des styles d'avatar que les gens adorent",
      description: "Un tour rapide des looks les plus populaires — ce que chacun ressent, et où il excelle.",
      greatForLabel: "Idéal pour : ",
    },
    ideas: [
      { name: "Superhero", vibe: "Cape, éclairage dramatique, et énergie de bande dessinée qui transforme un selfie en couverture.", greatFor: "Photos de profil audacieuses et pseudos de jeux vidéo" },
      { name: "Anime Hero", vibe: "En cellulo et expressif, comme si vous étiez sorti de votre série préférée.", greatFor: "Discord, TikTok, et communautés de fans" },
      { name: "High Fashion", vibe: "Éclairage de studio éditorial et style de podium pour une allure soignée et sublimée.", greatFor: "LinkedIn, portfolios, et photos professionnelles" },
      { name: "Renaissance Noble", vibe: "Grandeur de peinture à l'huile avec garde-robe d'époque et lumière douce et picturale.", greatFor: "Une photo de profil spirituelle, digne d'une galerie" },
      { name: "Cyberpunk", vibe: "Lueur néon, rues détrempées par la pluie, et une touche high-tech rétro-futuriste.", greatFor: "Fans de science-fiction et avatars de jeux vidéo" },
      { name: "Fantasy Princess", vibe: "Magie éthérée, détail lumineux, et une atmosphère de conte de fées.", greatFor: "Amateurs de fantasy et portraits façon cosplay" },
      { name: "Samurai", vibe: "Armure du Japon féodal et ambiance cinématographique pour un portrait saisissant et puissant.", greatFor: "Un avatar dramatique et unique" },
      { name: "Street Style", vibe: "Décor urbain, confiance décontractée, et une garde-robe moderne du quotidien.", greatFor: "Des profils sociaux sympas et accessibles" },
      { name: "Galactic Warrior", vibe: "Blindé et d'un autre monde, prêt pour la bataille parmi les étoiles.", greatFor: "Clans de jeux vidéo et communautés de science-fiction" },
    ],
    occasionSection: {
      eyebrow: "Par occasion",
      title: "Trouvez un avatar pour l'endroit où vous l'utiliserez",
      description: "Adaptez le look au moment — une photo qui correspond au profil sur lequel elle va.",
    },
    occasions: [
      { title: "Professionnel et LinkedIn", body: "Restez net et confiant avec un portrait bien habillé et éclairé en studio qui vous ressemble toujours.", styles: "High Fashion · Chic Minimalist · Casual Confidence" },
      { title: "Jeux vidéo et Discord", body: "Optez pour l'audace et le caractère — une persona qui ressort dans un petit cercle d'avatar et correspond à votre pseudo.", styles: "Cyberpunk · Galactic Warrior · Anime Hero" },
      { title: "Profils de rencontre", body: "Chaleureux, naturel, et sublimé — une version de vous qui paraît authentique et accessible.", styles: "Cozy Smile · Street Style · Casual Confidence" },
      { title: "Avatars de groupe et d'équipe", body: "Faites en sorte que chacun choisisse le même modèle et ajoute son propre selfie pour un ensemble cohérent et à l'image de la marque.", styles: "Chic Minimalist · Galactic Warrior · Superhero" },
      { title: "Saisonnier et fêtes", body: "Renouvelez votre photo pour la saison avec une garde-robe riche, des tons chauds, et un style festif.", styles: "Autumn Charm · Vintage Glamour · Luxury Evening" },
      { title: "Juste pour s'amuser", body: "Voyez-vous à travers les époques et les univers — histoire, mythe, et science-fiction sont tous à un geste.", styles: "Renaissance Noble · Ancient Egypt · Mystic Sorcerer" },
    ],
    categoriesSection: {
      eyebrow: "Toutes les catégories",
      title: "Découvrez chaque galerie thématique",
      description: "Ces idées ne sont qu'un début. Chaque catégorie regorge de modèles supplémentaires dans l'appli.",
      looksSuffix: "looks",
      seeFullLink: "Voir le créateur d'avatars complet",
    },
    tipsSection: {
      eyebrow: "Meilleurs résultats",
      title: "Comment obtenir le meilleur avatar IA",
      body: "Le modèle fait le travail créatif — votre selfie n'a qu'à lui donner un point de départ clair. Quelques habitudes simples font une grande différence.",
    },
    tips: [
      "Utilisez une photo claire et de face, où votre visage est bien éclairé.",
      "Évitez les lunettes de soleil, les chapeaux, ou les ombres marquées qui cachent vos traits.",
      "Un visage par photo donne le résultat le plus net et le plus précis.",
      "Des selfies en plus haute résolution donnent à l'IA plus de détails avec lesquels travailler.",
      "Essayez plusieurs modèles — le même selfie peut briller dans des thèmes très différents.",
      "Une expression neutre et un arrière-plan simple se transforment le plus fidèlement.",
    ],
    faqTitle: "Questions sur les idées d'avatars",
    faqs: [
      { q: "Comment choisir un style d'avatar IA ?", a: "Commencez par l'endroit où vous l'utiliserez. Vous voulez une photo professionnelle ? Essayez High Fashion ou Chic Minimalist. Vous construisez une identité de jeu vidéo ? Optez pour Cyberpunk ou Galactic Warrior. En cas de doute, générez deux ou trois styles à partir du même selfie et gardez votre préféré." },
      { q: "Quel est un bon avatar IA pour un profil professionnel ?", a: "Les looks éclairés en studio et bien stylisés se lisent le mieux professionnellement. High Fashion, Chic Minimalist, et Casual Confidence gardent votre ressemblance claire tout en vous donnant un portrait soigné et présentable pour LinkedIn ou un portfolio." },
      { q: "Tout le monde dans un groupe peut-il utiliser le même style d'avatar ?", a: "Oui — c'est l'une des idées les plus populaires. Faites en sorte que chaque personne choisisse le même modèle et ajoute son propre selfie, et vous obtenez un ensemble cohérent d'avatars assortis pour un chat de groupe, un clan de jeu vidéo, ou une page d'équipe." },
      { q: "Dois-je écrire une instruction pour créer un avatar ?", a: "Non. Chaque modèle est livré avec une instruction descriptive déjà écrite pour vous. Choisissez simplement un look et ajoutez un selfie — vous pouvez éventuellement ajuster l'instruction, mais vous n'avez jamais à partir d'une page blanche." },
    ],
    ctaTitle: "Créez votre avatar IA gratuitement",
    ctaDescription: "Téléchargez Photix, choisissez un look, et transformez un selfie en portrait prêt à partager en quelques secondes.",
    ctaSecondary: "À propos du créateur d'avatars",
  },
};
