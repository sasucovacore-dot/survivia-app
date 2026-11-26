const q=["A","B","C","D","E","F"];function r(t){return t.replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a])}function z(t,a,p={}){let n=0,l=0;const u=[];function d(){const s=a[n];t.innerHTML=`
      <p class="quiz-compteur">Question ${n+1} sur ${a.length}${s.type==="scenario"?" · mise en situation":""}</p>
      ${p.afficherFiche&&s.ficheTitre?`<p class="quiz-fiche">Fiche « ${r(s.ficheTitre)} »</p>`:""}
      <h2 class="quiz-question" tabindex="-1">${r(s.question)}</h2>
      <div class="quiz-choix" role="group" aria-label="Réponses">
        ${s.choix.map((e,i)=>`<button type="button" class="quiz-reponse" data-k="${i}"><span class="lettre" aria-hidden="true">${q[i]}</span><span>${r(e)}</span></button>`).join("")}
      </div>
      <div class="quiz-retour" aria-live="polite"></div>`,t.querySelectorAll(".quiz-reponse").forEach(e=>e.addEventListener("click",()=>h(Number(e.dataset.k)))),t.querySelector(".quiz-question")?.focus()}function h(s){const e=a[n],i=s===e.bonne_reponse;i?l++:u.push(e),p.surReponse?.(e,i),t.querySelectorAll(".quiz-reponse").forEach(c=>{const f=Number(c.dataset.k);c.disabled=!0,f===e.bonne_reponse?c.classList.add("juste"):f===s&&c.classList.add("faux")});const o=t.querySelector(".quiz-retour"),b=n+1>=a.length;o.innerHTML=`
      <p class="${i?"ok":"ko"}"><b>${i?"Bonne réponse.":`Ce n'est pas ça : la bonne réponse est ${q[e.bonne_reponse]}.`}</b> ${r(e.explication)}</p>
      <button type="button" class="bouton" data-suite>${b?"Voir mon résultat":"Question suivante"}</button>`,o.querySelector("[data-suite]").addEventListener("click",()=>{n++,n<a.length?d():$()}),o.querySelector("[data-suite]").focus()}function $(){const s=a.length,e=s?l/s:0,i=e===1?"Sans faute. Vous avez les bons réflexes.":e>=.7?"Bien. Relisez les points ratés : ce sont ceux qui comptent le jour où ça arrive.":"Relisez la fiche tranquillement, puis refaites le test.";t.innerHTML=`
      <h2 class="quiz-question" tabindex="-1">Résultat : ${l} sur ${s}</h2>
      <p>${i}</p>
      ${u.length?`<h3>À revoir</h3><ul class="quiz-ratees">${u.map(o=>`<li><b>${r(o.question)}</b><br><small>${r(o.explication)}</small></li>`).join("")}</ul><p class="quiz-note">Ces questions reviendront demain, puis dans 7 jours, puis dans 30 jours, dans la page Révisions.</p>`:""}
      <div class="actions-ligne" data-actions></div>`,t.querySelector(".quiz-question")?.focus(),p.surFin?.({score:l,total:s,ratees:u},t.querySelector("[data-actions]"))}d()}export{z as l};
