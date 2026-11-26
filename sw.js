/* Service worker Survivia — généré par outils/generer-sw.mjs, ne pas modifier à la main. */
const VERSION = 'd31f941054ee';
const CACHE = 'survivia-' + VERSION;
const COEUR = ["/","/_astro/_fiche_.astro_astro_type_script_index_0_lang.BV_2qT0z.js","/_astro/_fiche_.B4s7Yam8.css","/_astro/atkinson-hyperlegible-latin-400-italic.D-qjh7ci.woff2","/_astro/atkinson-hyperlegible-latin-400-normal.BrHNak5F.woff2","/_astro/atkinson-hyperlegible-latin-700-normal.GZI4o3u0.woff2","/_astro/atkinson-hyperlegible-latin-ext-400-italic.3fJ3SmOv.woff2","/_astro/atkinson-hyperlegible-latin-ext-400-normal.DRk46D-x.woff2","/_astro/atkinson-hyperlegible-latin-ext-700-normal.BoVPHkS0.woff2","/_astro/favoris.astro_astro_type_script_index_0_lang.BSyzOKsZ.js","/_astro/index.astro_astro_type_script_index_0_lang.BZNSbZC5.js","/_astro/je-m-entraine.astro_astro_type_script_index_0_lang.BWy1c7E1.js","/_astro/kit.astro_astro_type_script_index_0_lang.BohosZKo.js","/_astro/ma-commune.astro_astro_type_script_index_0_lang.BL8ZEIId.js","/_astro/quiz-moteur.BhB3Ecq-.js","/_astro/recherche.astro_astro_type_script_index_0_lang.CD06cAC7.js","/_astro/reglages.astro_astro_type_script_index_0_lang.dPAY7dg-.js","/_astro/regler-mon-telephone.astro_astro_type_script_index_0_lang.B9Y5P-cE.js","/_astro/revisions.astro_astro_type_script_index_0_lang.zjhFAfO1.js","/_astro/stockage.CW8Bq5sh.js","/_astro/test.astro_astro_type_script_index_0_lang.DXel47mO.js","/_astro/urgence.astro_astro_type_script_index_0_lang.CZw4QCNI.js","/404.html","/a-propos/","/ani/","/ani/duree/","/ani/prep/","/ani/sec/","/ani/sit/","/aut/","/aut/alim/","/aut/collectif/","/aut/comm/","/aut/eau/","/aut/energie/","/aut/mental/","/aut/sante/","/aut/soins/","/favicon.svg","/favoris/","/for/","/for/avance/","/for/defense/","/for/gestes/","/for/parcours/","/hors-ligne/","/icones/icone-180.png","/icones/icone-192.png","/icones/icone-512.png","/icones/icone-maskable-512.png","/index-quiz.json","/index-recherche.json","/je-m-entraine/","/kit/","/logo/survivia-logo-blanc.svg","/logo/survivia-logo-couleur.svg","/logo/survivia-logo-noir.svg","/ma-commune/","/manifest.webmanifest","/num/","/num/arnaques/","/num/futur/","/num/pannes/","/num/vrai/","/numeros/","/pre/","/pre/alerte/","/pre/fragiles/","/pre/kit/","/pre/logement/","/pre/plan/","/pre/reflexes/","/recherche/","/reglages/","/regler-mon-telephone/","/rep/","/rep/elec/","/rep/meca/","/rep/outils/","/rep/plomb/","/revisions/","/sav/","/sav/abri/","/sav/communaute/","/sav/fabriquer/","/sav/feu/","/sav/repere/","/sav/transmettre/","/sav/vetements/","/sec/","/sec/n1/","/sec/n2/","/sec/n3/","/sit/","/sit/animaux/","/sit/coupures/","/sit/crises/","/sit/evacuation/","/sit/fun/","/sit/maison/","/sit/menaces/","/sit/meteo/","/sit/nature/","/sit/transport/","/urgence/","/viv/","/viv/chasse/","/viv/cons/","/viv/cueil/","/viv/cult/","/viv/eau/","/viv/elev/","/viv/nutri/"];
const RESTE = ["/aut/comm/s-informer-par-la-radio/","/aut/comm/s-informer-par-la-radio/test/","/aut/eau/epidemie-dans-un-groupe/","/aut/eau/epidemie-dans-un-groupe/test/","/aut/eau/gerer-les-dechets/","/aut/eau/gerer-les-dechets/test/","/aut/eau/hygiene-sans-eau-courante/","/aut/eau/hygiene-sans-eau-courante/test/","/aut/eau/regles-protections-reutilisables/","/aut/eau/regles-protections-reutilisables/test/","/aut/eau/rendre-l-eau-potable/","/aut/eau/rendre-l-eau-potable/test/","/aut/eau/stocker-l-eau/","/aut/eau/stocker-l-eau/test/","/aut/eau/toilettes-de-fortune/","/aut/eau/toilettes-de-fortune/test/","/aut/energie/se-rafraichir-sans-electricite-pendant-une-canicule/","/aut/energie/se-rafraichir-sans-electricite-pendant-une-canicule/test/","/aut/mental/crise-d-angoisse-ou-de-panique-aider-la-personne/","/aut/mental/crise-d-angoisse-ou-de-panique-aider-la-personne/test/","/aut/mental/gerer-le-stress-et-la-peur/","/aut/mental/gerer-le-stress-et-la-peur/test/","/aut/soins/diarrhee-et-deshydratation/","/aut/soins/diarrhee-et-deshydratation/test/","/aut/soins/fievre/","/aut/soins/fievre/test/","/aut/soins/soulager-la-douleur/","/aut/soins/soulager-la-douleur/test/","/aut/soins/steriliser-du-materiel-de-soin/","/aut/soins/steriliser-du-materiel-de-soin/test/","/aut/soins/surveiller-un-blesse-plusieurs-jours/","/aut/soins/surveiller-un-blesse-plusieurs-jours/test/","/pre/alerte/demander-de-l-aide-en-silence/","/pre/alerte/demander-de-l-aide-en-silence/test/","/pre/alerte/numeros-d-urgence/","/pre/alerte/numeros-d-urgence/test/","/pre/alerte/regler-son-telephone-pour-l-urgence/","/pre/alerte/regler-son-telephone-pour-l-urgence/test/","/pre/fragiles/confusion-soudaine/","/pre/fragiles/confusion-soudaine/test/","/pre/fragiles/hypoglycemie-chez-une-personne-diabetique/","/pre/fragiles/hypoglycemie-chez-une-personne-diabetique/test/","/pre/kit/kit-72-heures/","/pre/kit/kit-72-heures/test/","/pre/kit/trousse-de-secours/","/pre/kit/trousse-de-secours/test/","/pre/logement/couper-eau-gaz-electricite/","/pre/logement/couper-eau-gaz-electricite/test/","/pre/logement/reserves-d-eau-et-de-nourriture/","/pre/logement/reserves-d-eau-et-de-nourriture/test/","/pre/plan/contacts-et-point-de-rendez-vous/","/pre/plan/contacts-et-point-de-rendez-vous/test/","/pre/plan/plan-familial-de-mise-en-surete/","/pre/plan/plan-familial-de-mise-en-surete/test/","/pre/reflexes/bien-preparer-une-sortie-en-nature/","/pre/reflexes/bien-preparer-une-sortie-en-nature/test/","/pre/reflexes/la-methode-stop-s-arreter-reflechir-observer-prevoir/","/pre/reflexes/la-methode-stop-s-arreter-reflechir-observer-prevoir/test/","/pre/reflexes/les-priorites-de-survie-la-regle-des-3/","/pre/reflexes/les-priorites-de-survie-la-regle-des-3/test/","/sav/abri/abri-de-fortune-dehors/","/sav/abri/abri-de-fortune-dehors/test/","/sav/fabriquer/desinfectant-avec-de-l-eau-de-javel/","/sav/fabriquer/desinfectant-avec-de-l-eau-de-javel/test/","/sav/feu/entretenir-un-feu-en-securite/","/sav/feu/entretenir-un-feu-en-securite/test/","/sav/feu/faire-du-feu-sans-briquet-ni-allumettes/","/sav/feu/faire-du-feu-sans-briquet-ni-allumettes/test/","/sav/repere/lire-une-carte/","/sav/repere/lire-une-carte/test/","/sav/repere/utiliser-une-boussole/","/sav/repere/utiliser-une-boussole/test/","/sec/n1/alerter-les-secours/","/sec/n1/alerter-les-secours/test/","/sec/n1/arret-cardiaque-enfant-et-nourrisson/","/sec/n1/arret-cardiaque-enfant-et-nourrisson/test/","/sec/n1/arret-cardiaque/","/sec/n1/arret-cardiaque/test/","/sec/n1/avc/","/sec/n1/avc/test/","/sec/n1/brulure/","/sec/n1/brulure/test/","/sec/n1/convulsions-et-epilepsie/","/sec/n1/convulsions-et-epilepsie/test/","/sec/n1/crise-d-asthme/","/sec/n1/crise-d-asthme/test/","/sec/n1/etouffement/","/sec/n1/etouffement/test/","/sec/n1/hemorragie/","/sec/n1/hemorragie/test/","/sec/n1/malaise/","/sec/n1/malaise/test/","/sec/n1/perte-de-connaissance-pls/","/sec/n1/perte-de-connaissance-pls/test/","/sec/n1/plaie-simple/","/sec/n1/plaie-simple/test/","/sec/n1/plusieurs-blesses-par-qui-commencer/","/sec/n1/plusieurs-blesses-par-qui-commencer/test/","/sec/n1/reaction-allergique-grave/","/sec/n1/reaction-allergique-grave/test/","/sec/n1/saignement-de-nez/","/sec/n1/saignement-de-nez/test/","/sec/n1/surdose-ou-intoxication-medicamenteuse/","/sec/n1/surdose-ou-intoxication-medicamenteuse/test/","/sec/n1/traumatisme-a-la-tete/","/sec/n1/traumatisme-a-la-tete/test/","/sec/n1/traumatisme-chute-choc/","/sec/n1/traumatisme-chute-choc/test/","/sec/n2/brulures-graves/","/sec/n2/brulures-graves/test/","/sec/n2/coup-de-chaleur/","/sec/n2/coup-de-chaleur/test/","/sec/n2/entorse-et-luxation/","/sec/n2/entorse-et-luxation/test/","/sec/n2/fractures-et-attelles/","/sec/n2/fractures-et-attelles/test/","/sec/n2/garrot/","/sec/n2/garrot/test/","/sec/n2/hypothermie/","/sec/n2/hypothermie/test/","/sec/n2/morsures-et-piqures/","/sec/n2/morsures-et-piqures/test/","/sec/n2/plaie-profonde/","/sec/n2/plaie-profonde/test/","/sec/n3/deshydratation/","/sec/n3/deshydratation/test/","/sec/n3/infection-d-une-plaie/","/sec/n3/infection-d-une-plaie/test/","/sit/animaux/abeilles-frelons-et-guepes/","/sit/animaux/abeilles-frelons-et-guepes/test/","/sit/animaux/animal-enrage/","/sit/animaux/animal-enrage/test/","/sit/animaux/araignee/","/sit/animaux/araignee/test/","/sit/animaux/chien/","/sit/animaux/chien/test/","/sit/animaux/crocodile/","/sit/animaux/crocodile/test/","/sit/animaux/loup/","/sit/animaux/loup/test/","/sit/animaux/meduse/","/sit/animaux/meduse/test/","/sit/animaux/moustique/","/sit/animaux/moustique/test/","/sit/animaux/ours/","/sit/animaux/ours/test/","/sit/animaux/requin/","/sit/animaux/requin/test/","/sit/animaux/sanglier/","/sit/animaux/sanglier/test/","/sit/animaux/scorpion/","/sit/animaux/scorpion/test/","/sit/animaux/serpent/","/sit/animaux/serpent/test/","/sit/animaux/tique/","/sit/animaux/tique/test/","/sit/animaux/vaches-et-taureaux/","/sit/animaux/vaches-et-taureaux/test/","/sit/animaux/vive-et-raie/","/sit/animaux/vive-et-raie/test/","/sit/coupures/coupure-d-eau/","/sit/coupures/coupure-d-eau/test/","/sit/coupures/coupure-electrique/","/sit/coupures/coupure-electrique/test/","/sit/coupures/eau-du-robinet-non-potable/","/sit/coupures/eau-du-robinet-non-potable/test/","/sit/coupures/plus-de-chauffage/","/sit/coupures/plus-de-chauffage/test/","/sit/crises/accident-nucleaire/","/sit/crises/accident-nucleaire/test/","/sit/crises/attaque-nucleaire/","/sit/crises/attaque-nucleaire/test/","/sit/crises/pandemie/","/sit/crises/pandemie/test/","/sit/evacuation/crise-pendant-que-les-enfants-sont-a-l-ecole/","/sit/evacuation/crise-pendant-que-les-enfants-sont-a-l-ecole/test/","/sit/evacuation/documents-a-emporter/","/sit/evacuation/documents-a-emporter/test/","/sit/evacuation/quitter-son-logement-a-pied-ou-en-voiture/","/sit/evacuation/quitter-son-logement-a-pied-ou-en-voiture/test/","/sit/evacuation/se-mettre-a-l-abri-chez-soi/","/sit/evacuation/se-mettre-a-l-abri-chez-soi/test/","/sit/maison/chute-d-une-personne-agee/","/sit/maison/chute-d-une-personne-agee/test/","/sit/maison/coince-dans-un-ascenseur/","/sit/maison/coince-dans-un-ascenseur/test/","/sit/maison/degat-des-eaux/","/sit/maison/degat-des-eaux/test/","/sit/maison/effondrement/","/sit/maison/effondrement/test/","/sit/maison/electrisation/","/sit/maison/electrisation/test/","/sit/maison/enfant-qui-avale-un-produit-toxique/","/sit/maison/enfant-qui-avale-un-produit-toxique/test/","/sit/maison/explosion/","/sit/maison/explosion/test/","/sit/maison/feu-de-cuisine-ou-de-friteuse/","/sit/maison/feu-de-cuisine-ou-de-friteuse/test/","/sit/maison/fuite-de-gaz/","/sit/maison/fuite-de-gaz/test/","/sit/maison/fumee-dans-la-cage-d-escalier/","/sit/maison/fumee-dans-la-cage-d-escalier/test/","/sit/maison/incendie/","/sit/maison/incendie/test/","/sit/maison/intoxication-alimentaire/","/sit/maison/intoxication-alimentaire/test/","/sit/maison/monoxyde-de-carbone/","/sit/maison/monoxyde-de-carbone/test/","/sit/menaces/agression/","/sit/menaces/agression/test/","/sit/menaces/enfant-seul-a-la-maison-pendant-une-crise/","/sit/menaces/enfant-seul-a-la-maison-pendant-une-crise/test/","/sit/meteo/canicule/","/sit/meteo/canicule/test/","/sit/meteo/feu-de-foret/","/sit/meteo/feu-de-foret/test/","/sit/meteo/grand-froid-neige-et-verglas/","/sit/meteo/grand-froid-neige-et-verglas/test/","/sit/meteo/grele/","/sit/meteo/grele/test/","/sit/meteo/inondation/","/sit/meteo/inondation/test/","/sit/meteo/orage-violent-et-foudre/","/sit/meteo/orage-violent-et-foudre/test/","/sit/meteo/submersion-marine/","/sit/meteo/submersion-marine/test/","/sit/meteo/tempete-et-vents-violents/","/sit/meteo/tempete-et-vents-violents/test/","/sit/meteo/tornade/","/sit/meteo/tornade/test/","/sit/meteo/tremblement-de-terre/","/sit/meteo/tremblement-de-terre/test/","/sit/nature/noyade/","/sit/nature/noyade/test/","/sit/transport/accident-de-voiture/","/sit/transport/accident-de-voiture/test/","/sit/transport/chute-a-l-eau-depuis-un-bateau/","/sit/transport/chute-a-l-eau-depuis-un-bateau/test/"];
const MARQUEUR = '/__tout-telecharge__';
const LOT = 12;

async function diffuser(message) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const c of clients) c.postMessage(message);
}

async function mettreEnCache(cache, urls, surProgression) {
  let fait = 0;
  for (let i = 0; i < urls.length; i += LOT) {
    await Promise.all(
      urls.slice(i, i + LOT).map(async (u) => {
        try {
          if (!(await cache.match(u, { ignoreVary: true }))) {
            const r = await fetch(u, { cache: 'no-cache' });
            if (r.ok) await cache.put(u, r);
          }
        } catch (e) {
          /* pas de réseau : on réessaiera au prochain « Tout télécharger » */
        }
        fait++;
      }),
    );
    if (surProgression) surProgression(fait, urls.length);
  }
}

async function compterManquants(cache, urls) {
  let n = 0;
  for (const u of urls) if (!(await cache.match(u, { ignoreVary: true }))) n++;
  return n;
}

let telechargementEnCours = null;
function toutTelecharger() {
  if (telechargementEnCours) return telechargementEnCours;
  telechargementEnCours = (async () => {
    const cache = await caches.open(CACHE);
    const tout = COEUR.concat(RESTE);
    await mettreEnCache(cache, tout, (fait, total) => diffuser({ type: 'progression', fait, total }));
    const manquants = await compterManquants(cache, tout);
    if (manquants === 0) await cache.put(MARQUEUR, new Response('ok'));
    await diffuser({ type: 'termine', complet: manquants === 0, manquants, total: tout.length });
  })().finally(() => { telechargementEnCours = null; });
  return telechargementEnCours;
}

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await mettreEnCache(cache, COEUR);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const nom of await caches.keys()) {
      if (nom.startsWith('survivia-') && nom !== CACHE) await caches.delete(nom);
    }
    await self.clients.claim();
  })());
  // Dès la première visite (et à chaque mise à jour) : tout le contenu, en arrière-plan.
  e.waitUntil(toutTelecharger());
});

self.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.type === 'tout-telecharger') e.waitUntil(toutTelecharger());
  if (d.type === 'etat') {
    e.waitUntil((async () => {
      const cache = await caches.open(CACHE);
      const tout = COEUR.concat(RESTE);
      const manquants = await compterManquants(cache, tout);
      const reponse = { type: 'etat', version: VERSION, complet: manquants === 0, manquants, total: tout.length, enCours: !!telechargementEnCours };
      if (e.source) e.source.postMessage(reponse); else diffuser(reponse);
    })());
  }
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    // ignoreVary : sans cela, un en-tête « Vary » du serveur empêche de retrouver les polices et les scripts.
    const enCache = await cache.match(req, { ignoreSearch: true, ignoreVary: true });
    if (enCache) return enCache;
    try {
      const r = await fetch(req);
      if (r.ok && (req.mode === 'navigate' || url.pathname.startsWith('/_astro/'))) {
        cache.put(url.origin + url.pathname, r.clone()).catch(() => {});
      }
      return r;
    } catch (err) {
      if (req.mode === 'navigate') {
        const secours = await cache.match('/hors-ligne/', { ignoreVary: true });
        if (secours) return secours;
      }
      return new Response('Hors ligne', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
  })());
});
