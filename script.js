    /* --------------------------------------------------
        DATABASES (CHARACTERS, LOCATIONS, BOSSES, COVENANTS, GIFTS)
        -------------------------------------------------- */
    const characters = [
      // Lords
      { name: "Gwyn, Lord of Sunlight", role: "Lord", desc: "King of the Gods who wielded powerful bolts of lightning to terminate the Everlasting Dragons. Stripped his firstborn of status for foolishness, and eventually sacrificed his supreme soul to feed the fading Flame.", cat: "lords" },
      { name: "Gravelord Nito", role: "Lord", desc: "The First of the Dead, a cosmic entity assembled from thousands of bones. Administers absolute plague and sickness, slumbering deeply within the Tomb of the Giants to oversee the cycle of decay.", cat: "lords" },
      { name: "Witch of Izalith", role: "Lord", desc: "Mother of Pyromancy who, in her desperation, attempted to recreate the First Flame with a custom soul, warping into the Bed of Chaos and birthing all demonic entities into Lordran.", cat: "lords" },
      { name: "Seath the Scaleless", role: "Lord", desc: "The treacherous dragon born with no scales. Jealous of his brothers, he betrayed them to Gwyn, establishing his crystalline archives where he eventually lost his mind seeking immortality.", cat: "lords" },
      { name: "Furtive Pygmy", role: "Lord", desc: "The easily forgotten, ancient ancestor who located the unique Dark Soul within the First Flame. Fragmented his soul to spawn humanity, patiently waiting out the fading flame.", cat: "lords" },
      
      // Knights & Companions
      { name: "Solaire of Astora", role: "Knight", desc: "An incredibly resilient, joyful warrior who became undead by choice to search for his personal sun. Founder and beloved summon of the Sunlight Warriors covenant.", cat: "knights" },
      { name: "Siegmeyer of Catarina", role: "Knight", desc: "A robust knight wearing onion-shaped armor who constantly stumbles into danger while pursuing adventure, always caught in deep meditation to think of solutions.", cat: "knights" },
      { name: "Knight Artorias", role: "Knight", desc: "One of Gwyn's top four knights, famous for traversing the Abyss. Sacrificed his shield to safeguard his wolf companion Sif in Oolacile before getting corrupted.", cat: "knights" },
      { name: "Ornstein & Smough", role: "Knights", desc: "The golden Dragon Slayer and the gigantic executioner, acting as the ultimate twin gatekeepers to safeguard Gwynevere's grand Cathedral in Anor Londo.", cat: "knights" },

      // Firekeepers & Covenants
      { name: "Anastacia of Astora", role: "Firekeeper", desc: "The mute Firekeeper bound to her cold iron cage at Firelink Shrine. Her tongue was stripped out to prevent her from speaking blasphemy.", cat: "firekeepers" },
      { name: "Chaos Witch Quelaag", role: "Guardian", desc: "A daughter of Izalith who escaped the demonic transformation of Chaos, leaving her lower body fused to a giant spider. Guards the sister she cherishes.", cat: "firekeepers" },
      { name: "Quelaag's Sister (The Fair Lady)", role: "Firekeeper", desc: "The blind, terribly weakened Firekeeper of Quelaag's Domain. Swallowed lethal blightpus to relieve her infected subjects of agonizing torment.", cat: "firekeepers" },

      // Merchants, Blacksmiths & NPCs
      { name: "Big Hat Logan", role: "Sorcerer", desc: "A famous, reclusive sorcerer of Vinheim who wears an oversized hat to isolate himself from distractions. Trapped in Sen's Fortress while chasing raw knowledge.", cat: "merchants" },
      { name: "Andre of Astora", role: "Blacksmith", desc: "A persistent, ancient blacksmith who crafts and upgrades weapons for hollows inside Undead Parish, keeping himself sane through constant manual work.", cat: "merchants" },
      { name: "Laurentius of the Great Swamp", role: "Teacher", desc: "A warm, open-hearted pyromancer who welcomes the player as an equal, sharing his flame and lessons after being freed from the Depths.", cat: "merchants" },
      { name: "Patches the Hyena", role: "Merchant", desc: "A devious rogue who sets traps for greedy clerics and adventurers, begging for absolution when caught before attempting to sell their leftover gear.", cat: "merchants" },
      { name: "Oswald of Carim", role: "Pardoner", desc: "An unsettling agent of Velka, Goddess of Sin. Stationed in the parish belltower to absolve travelers of their hostile actions for a steep fee.", cat: "merchants" },
      { name: "Quelana of Izalith", role: "Pyromancer", desc: "The Mother of Pyromancy, who managed to escape her family's disaster. Secretive teacher sitting silently in Blighttown's toxic swamp.", cat: "merchants" },

      // Additional NPCs
      { name: "Crestfallen Warrior", role: "Outcast", desc: "The cynical, tired knight sitting next to the bonfire at Firelink Shrine. Advises travelers with useful but desperate tips, slowly hollowing.", cat: "others" },
      { name: "Kingseeker Frampt", role: "Serpent", desc: "A giant primordial serpent who resides in Firelink Shrine. Claims to search for Gwyn's successor to keep the Age of Fire alive.", cat: "others" },
      { name: "Darkstalker Kaathe", role: "Serpent", desc: "A sinister serpent dwelling in the dark Abyss, working to build the Dark Lord and guide the Chosen Undead to bring the Age of Dark.", cat: "others" },
      { name: "Gwynevere, Princess of Sunlight", role: "Princess", desc: "The massive, comforting daughter of Gwyn who grants the Lordvessel. She is revealed to be an illusion maintained by Gwyndolin.", cat: "others" },
      { name: "Dark Sun Gwyndolin", role: "God", desc: "Gwyn's youngest son, raised as a daughter due to his affinity for the moon. Secretly commands the Darkmoon Blades and protects Anor Londo.", cat: "others" },
      { name: "Rhea of Thorolund", role: "Cleric", desc: "A noble priestess sent on a sacred mission to find the Rite of Kindling in the Catacombs, utterly unaware of the betrayals that await her.", cat: "others" },
      { name: "Petrus of Thorolund", role: "Cleric", desc: "A treacherous cleric of Thorolund who abandons Rhea in the deep dark, posing as a pious guardian while plotting her demise.", cat: "others" },
      { name: "Shiva of the East", role: "Merchant", desc: "The second-in-command of the Forest Hunters. An eastern swordsman who trades exceptionally rare and lethal foreign arms.", cat: "others" },
      { name: "Dusk of Oolacile", role: "Princess", desc: "A survivor of Oolacile, frozen inside a golden crystal golem in Darkroot Basin. Keeps alive the forgotten arts of ancient light sorceries.", cat: "others" },
      { name: "Marvelous Chester", role: "Merchant", desc: "A dapper merchant pulled from a far-off era by Manus. Resides in Royal Wood, wielding a heavy repeating crossbow.", cat: "others" },
      { name: "Alvina of the Darkroot Wood", role: "Guardian", desc: "An ancient, highly intelligent cat who leads the Forest Hunters. Warns all travelers to stay away from Artorias' grave.", cat: "others" },
      { name: "Snuggly the Crow", role: "Trader", desc: "A hidden, unseen nesting bird residing at the asylum who will exchange rare treasures for warm, soft gifts.", cat: "others" },
      { name: "Crossbreed Priscilla", role: "Guardian", desc: "A mysterious half-dragon, half-human sealed within the Painted World of Ariamis. Wields a scythe that inflicts lethal出血, she guards the frozen realm from intruders.", cat: "others" },
      { name: "Gwyn's Firstborn", role: "God", desc: "The God of War, son of Gwyn. Stripped of his status for foolishness, he abandoned his father's kingdom. His statue stands in Anor Londo, his name erased from history.", cat: "others" },
      { name: "Manus, Father of the Abyss", role: "Boss", desc: "An ancient pygmy whose humanity went wild when disturbed by treasure hunters. His rage birthed the Abyss that consumed Oolacile, becoming the DLC's final horror.", cat: "others" },
      { name: "Ornstien", role: "Knight", desc: "The golden Dragon Slayer, first of Gwyn's four knights. Guarded the cathedral in Anor Londo alongside Smough. His spear channels the power of lightning.", cat: "knights" },
      { name: "Smough", role: "Knight", desc: "The grotesque executioner who ground the bones of his victims into his meals. Partnered with Ornstein to guard Gwynevere's cathedral in Anor Londo.", cat: "knights" }
    ];

    const locations = [
      { name: "Northern Undead Asylum", bosses: "Asylum Demon; Stray Demon (revisited)", connections: "Firelink Shrine", desc: "A decaying prison nested on high mountain peaks where the branded Undead are exiled to await madness." },
      { name: "Firelink Shrine", bosses: "None (Hub Area)", connections: "Undead Burg, Catacombs, New Londo Ruins", desc: "A safe haven built of collapsing stone arches. Serves as the central nexus where survivors rest near the fire." },
      { name: "Undead Burg", bosses: "Taurus Demon; Capra Demon", connections: "Undead Parish, Darkroot Basin, Depths", desc: "A fortified medieval settlement now filled with mindless soldiers, aggressive hollow hounds, and sudden ambush traps." },
      { name: "Undead Parish", bosses: "Bell Gargoyles", connections: "Darkroot Garden, Sen's Fortress", desc: "A towering cathedral rising above the Burg. Harbors the first Bell of Awakening and Gwyn's giant blacksmith Andre." },
      { name: "The Depths", bosses: "Gaping Dragon", connections: "Blighttown", desc: "A foul, labyrinthine sewer network crawling with cursed basilisks, mutant rats, and butcher clans." },
      { name: "Blighttown", bosses: "None (Area boss is inside Quelaag's Domain)", connections: "Valley of Drakes, Quelaag's Domain, The Great Hollow", desc: "A toxic, dark slum constructed from rickety wooden scaffolding, ending in a massive, poison-filled swamp floor." },
      { name: "Quelaag's Domain", bosses: "Chaos Witch Quelaag", connections: "Blighttown, Demon Ruins", desc: "A hot, web-choked cavern where Quelaag defends her sick sister from those seeking to extinguish her fire." },
      { name: "The Great Hollow", bosses: "None (Hidden Area)", connections: "Blighttown, Ash Lake", desc: "A secret, treacherous vertical drop navigated along the inside roots of a colossal ancient Archtree." },
      { name: "Ash Lake", bosses: "None (Hidden Area)", connections: "The Great Hollow", desc: "A silent, infinite sea of gray water and towering Archtrees. Holds the last Everlasting Dragon and remains of the primordial world." },
      { name: "Sen's Fortress", bosses: "Iron Golem", connections: "Undead Parish, Anor Londo", desc: "A trap-filled testing ground designed by gods. Chock-full of heavy swinging scythes, pressure plates, and serpent squads." },
      { name: "Anor Londo", bosses: "Ornstein & Smough; Dark Sun Gwyndolin", connections: "The Duke's Archives, Painted World", desc: "The gorgeous, golden citadel of the old gods. Bathed in illusory light, hiding the dark reality of their abandonment." },
      { name: "Painted World of Ariamis", bosses: "Crossbreed Priscilla", connections: "Accessible via Anor Londo", desc: "A snowy, frozen asylum sealed inside a gigantic canvas. Built to keep the outcasts and forbidden tools of the gods hidden." },
      { name: "Darkroot Garden", bosses: "Great Grey Wolf Sif", connections: "Undead Parish, Darkroot Basin", desc: "A sprawling, silent forest enclosing the historical remains of ancient Oolacile, guarded by Sif." },
      { name: "Darkroot Basin", bosses: "Moonlight Butterfly", connections: "Valley of Drakes", desc: "A steep, misty valley beneath the garden. Guarded by a towering hydra and crystal golems." },
      { name: "Valley of Drakes", bosses: "None", connections: "Darkroot Basin, Blighttown, New Londo Ruins", desc: "A rocky canyon containing blue lightning drakes and the massive, decaying body of a dead dragon." },
      { name: "New Londo Ruins", bosses: "The Four Kings", connections: "Firelink Shrine, Valley of Drakes, The Abyss", desc: "A sunken city filled with banshees and ghosts. Flooded long ago by the Sealers to contain the dark Darkwraiths." },
      { name: "The Abyss", bosses: "The Four Kings", connections: "Accessed via New Londo Ruins", desc: "An absolute void of pure darkness. The birthplace of humanity's deepest corruption, where the Four Kings reside." },
      { name: "The Duke's Archives", bosses: "Seath the Scaleless (first encounter)", connections: "Crystal Cave", desc: "A crystalline library housing Seath's obsessive research on immortality, containing massive bookshelves and dangerous experiments." },
      { name: "Crystal Cave", bosses: "Seath the Scaleless", connections: "The Duke's Archives", desc: "A magical cavern formed of giant crystals and invisible walkways, guarded by crystal butterflies." },
      { name: "The Catacombs", bosses: "Pinwheel", connections: "Firelink Shrine, Tomb of the Giants", desc: "An underground graveyard where skeletons rebuild themselves endlessly under the control of hidden necromancers." },
      { name: "Tomb of the Giants", bosses: "Gravelord Nito", connections: "The Catacombs", desc: "A pitch-black underworld littered with giant bones, guarded by skeletal giants and Nito, the Lord of Death." },
      { name: "Demon Ruins", bosses: "Ceaseless Discharge; Demon Firesage; Centipede Demon", connections: "Quelaag's Domain, Lost Izalith", desc: "A volcanic region of magma and collapsing stone temples, overrun by chaotic fire demons." },
      { name: "Lost Izalith", bosses: "Bed of Chaos", connections: "Demon Ruins", desc: "The ancient city of the Witch of Izalith, completely swallowed by colossal roots, lava pools, and weird mutations." },
      { name: "Firelink Altar", bosses: "None", connections: "Kingseeker Frampt or Darkstalker Kaathe", desc: "The grand chamber where the Lordvessel must be placed and filled to burn open the gate of Cinder." },
      { name: "Kiln of the First Flame", bosses: "Gwyn, Lord of Cinder", connections: "Firelink Altar", desc: "The ash-filled tomb where the First Flame originally ignited. Gwyn stands alone, guarding its final embers." },
      { name: "Oolacile Township (DLC)", bosses: "Knight Artorias (nearby); Manus (Abyss)", connections: "Sanctuary Garden, Chasm of the Abyss", desc: "A highly advanced magical kingdom from ancient times, completely corrupted by the spreading Abyss." },
      { name: "Chasm of the Abyss (DLC)", bosses: "Manus, Father of the Abyss", connections: "Oolacile Township", desc: "The absolute epicenter of the Abyssal corruption, where Manus' primal humanity was awakened and went wild." }
    ];

    const bosses = [
      { name: "Asylum Demon", loc: "Northern Undead Asylum", drops: "Big Pilgrim's Key, Demon's Great Hammer (First Encounter)", cat: "main" },
      { name: "Stray Demon", loc: "Northern Undead Asylum (return)", drops: "Titanite Slab, Humanity", cat: "main" },
      { name: "Taurus Demon", loc: "Undead Burg", drops: "Key to the Undead Burg, Humanity, Homeward Bone", cat: "main" },
      { name: "Bell Gargoyles", loc: "Undead Parish", drops: "Gargoyle Helm, Shield, Tail Axe, Twin Humanities, Key to Depths", cat: "main" },
      { name: "Capra Demon", loc: "Undead Burg (Lower)", drops: "Key to the Depths, Humanity, Homeward Bone", cat: "main" },
      { name: "Moonlight Butterfly", loc: "Darkroot Basin", drops: "Soul of the Moonlight Butterfly, Humanity", cat: "main" },
      { name: "Gaping Dragon", loc: "The Depths", drops: "Key to Blighttown, Humanity, Dragon King Greataxe (Tail cut)", cat: "main" },
      { name: "Chaos Witch Quelaag", loc: "Quelaag's Domain", drops: "Soul of Quelaag, Humanity, Twin Humanities", cat: "main" },
      { name: "Great Grey Wolf Sif", loc: "Darkroot Garden", drops: "Covenant of Artorias, Soul of Sif, Homeward Bone", cat: "main" },
      { name: "Iron Golem", loc: "Sen's Fortress", drops: "Core of an Iron Golem, Humanity", cat: "main" },
      { name: "Crossbreed Priscilla", loc: "Painted World of Ariamis", drops: "Soul of Priscilla, Twin Humanities, Priscilla's Dagger (Tail cut)", cat: "main" },
      { name: "Dark Sun Gwyndolin", loc: "Anor Londo", drops: "Soul of Gwyndolin", cat: "main" },
      { name: "Ornstein & Smough", loc: "Anor Londo", drops: "Soul of Ornstein or Smough, Lordvessel, Leo Ring", cat: "main" },
      { name: "Pinwheel", loc: "The Catacombs", drops: "Rite of Kindling, Mask of the Father/Mother/Child", cat: "main" },
      { name: "Gravelord Nito", loc: "Tomb of the Giants", drops: "Soul of Gravelord Nito (Lord Soul), Humanity", cat: "main" },
      { name: "Seath the Scaleless", loc: "Crystal Cave", drops: "Soul of Seath (Lord Soul), Moonlight Greatsword (Tail cut)", cat: "main" },
      { name: "The Four Kings", loc: "The Abyss", drops: "Soul of the Four Kings (Lord Soul), Humanity", cat: "main" },
      { name: "Ceaseless Discharge", loc: "Demon Ruins", drops: "Soul of Ceaseless Discharge, Humanity", cat: "main" },
      { name: "Demon Firesage", loc: "Demon Ruins", drops: "Demon's Spear, Humanity", cat: "main" },
      { name: "Centipede Demon", loc: "Demon Ruins", drops: "Orange Charred Ring, Humanity", cat: "main" },
      { name: "Bed of Chaos", loc: "Lost Izalith", drops: "Soul of the Witch of Izalith (Lord Soul), Humanity", cat: "main" },
      { name: "Gwyn, Lord of Cinder", loc: "Kiln of the First Flame", drops: "Soul of Gwyn, Lord of Cinder", cat: "main" },
      { name: "Sanctuary Guardian", loc: "Sanctuary Garden", drops: "Guardian Soul, Guardian Tail (Tail cut)", cat: "dlc" },
      { name: "Knight Artorias", loc: "Royal Wood", drops: "Soul of Artorias", cat: "dlc" },
      { name: "Black Dragon Kalameet", loc: "Royal Wood", drops: "Calamity Ring, Obsidian Greatsword (Tail cut)", cat: "dlc" },
      { name: "Manus, Father of the Abyss", loc: "Chasm of the Abyss", drops: "Soul of Manus, 10 Humanities", cat: "dlc" }
    ];

    const covenants = [
      { name: "Warrior of Sunlight", sigil: "M50,15 L55,35 L75,40 L55,45 L50,65 L45,45 L25,40 L45,35 Z", desc: "The co-op covenant of Solaire of Astora [citation:4]. Members harness the power of sunlight and are disciples of Lord Gwyn's Firstborn [citation:4]. The old God of War watches over the Warriors [citation:4].", join: "Kneel at the altair in Undead Parish", npcs: "Solaire of Astora" },
      { name: "Princess Guard", sigil: "M30,30 L70,30 L65,70 L35,70 Z M20,20 L80,20 L75,30 L25,30 Z", desc: "The covenant of Gwynevere, Princess of Sunlight [citation:4]. Members are sworn to protect the Princess [citation:4]. Joining requires defeating Ornstein & Smough and rescuing Gwynevere [citation:4].", join: "Speak to Gwynevere after defeating Ornstein & Smough", npcs: "Gwynevere, Princess of Sunlight" },
      { name: "Way of White", sigil: "M50,20 C35,20 35,50 50,80 C65,50 65,20 50,20 Z", desc: "Founded by Allfather Lloyd, Lord Gwyn's uncle [citation:4]. This religious covenant views the Darksign as accursed and believes bonfires must be maintained [citation:4]. Clerics and Knights start as members automatically [citation:4].", join: "Automatic for Cleric and Knight classes", npcs: "Petrus of Thorolund, Rhea of Thorolund" },
      { name: "Darkwraith", sigil: "M35,35 L65,35 L65,65 L35,65 Z M25,25 L75,25 L70,75 L30,75 Z", desc: "The most difficult covenant to join. Led by Darkstalker Kaathe [citation:4]. Members serve the Furtive Pygmy's plan to herald the Age of Dark [citation:4]. Kaathe corrupted the knights of New Londo [citation:4].", join: "Defeat the Four Kings, then speak to Kaathe in New Londo Ruins", npcs: "Darkstalker Kaathe" },
      { name: "Forest Hunter", sigil: "M50,15 C60,25 65,40 50,85 C35,40 40,25 50,15 Z", desc: "Sworn to defend Darkroot Garden [citation:4]. Led by Alvina, the talking cat [citation:4]. Members protect the grave of Knight Artorias from those who would use the Abyss [citation:4].", join: "Speak to Alvina in Darkroot Garden", npcs: "Alvina of the Darkroot Wood, Shiva of the East" },
      { name: "Path of the Dragon", sigil: "M25,25 L75,25 L50,80 Z", desc: "Worships the dragons of the past [citation:4]. Members seek to transform themselves into dragonkind [citation:4]. Joined by praying to the Stone Dragon in Ash Lake [citation:4].", join: "Pray at the Stone Dragon in Ash Lake", npcs: "Stone Dragon" },
      { name: "Blade of Darkmoon", sigil: "M50,15 L50,85 M20,50 L80,50", desc: "Led by Dark Sun Gwyndolin, second son of Lord Gwyn [citation:4]. Members act as executioners, hunting those guilty of sin [citation:4]. Closely aligned with Velka, Goddess of Sin [citation:4].", join: "Join the Blades of the Darkmoon in Anor Londo", npcs: "Dark Sun Gwyndolin" },
      { name: "Gravelord Servant", sigil: "M50,20 L80,50 L50,80 L20,50 Z", desc: "Servants of Gravelord Nito, the First of the Dead [citation:4]. Members spread death and misery using Eyes of Death [citation:4]. Joined by praying to the Sarcophagus Gravelord in the Catacombs [citation:4].", join: "Pray to the Gravelord Nito sarcophagus in the Catacombs", npcs: "Gravelord Nito" },
      { name: "Chaos Servant", sigil: "M50,15 C70,35 70,65 50,85 C30,65 30,35 50,15 Z", desc: "Led by Quelaag's Sister (the Fair Lady) [citation:4]. Members gather Humanity to ease her pain caused by consuming Blight pus from the infected natives [citation:4]. Joined after defeating Quelaag and finding the Fair Lady [citation:4].", join: "Defeat Quelaag, then speak to the Fair Lady", npcs: "Chaos Witch Quelaag, Quelaag's Sister (The Fair Lady)" }
    ];

    const gifts = [
      { name: "Master Key", desc: "Reusable key that can open any door with a basic lock. The best gift in the game — offers unparalleled exploration freedom. The Thief class starts with this regardless." },
      { name: "Divine Blessing", desc: "Consumable that fully restores HP and clears negative status effects. Rare and extremely valuable." },
      { name: "Black Firebomb", desc: "Thrown item that creates a powerful blaze. You start with 10. Can be used to defeat the Asylum Demon early." },
      { name: "Twin Humanities", desc: "Consumable that restores 2 Humanity. Useful for bonfire kindling and online play." },
      { name: "Pendant", desc: "An item filled with blocked memories. The director's recommended gift. A gag gift with story significance." },
      { name: "Binoculars", desc: "Used to see distant threats and scenery. A reusable key item found early in the game." },
      { name: "Tiny Being's Ring", desc: "Actually gives a small boost to max health, not health regeneration as the description claims." },
      { name: "Old Witch's Ring", desc: "Allows you to talk to the Chaos Servant leader, the Daughter of Chaos. Without it, she only responds '...?'." }
    ];


    /* --------------------------------------------------
        APP CONTROLLER
        -------------------------------------------------- */
    document.addEventListener("DOMContentLoaded", () => {
      // Hide loading screen
      setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
          loadingScreen.classList.add("hidden");
          setTimeout(() => loadingScreen.remove(), 800);
        }
      }, 1500);

      initHeader();
      initParallax();
      initTypewriter();
      initEmberParticles();
      initCharacters();
      initMap();
      initLocations();
      initScrollReveal();
      initNavHighlight();

      // Scroll-down indicator hide on scroll
      const scrollIndicator = document.getElementById("scroll-indicator");
      if (scrollIndicator) {
        window.addEventListener("scroll", () => {
          scrollIndicator.classList.toggle("hidden", window.scrollY > 200);
        }, { passive: true });
      }

      // Global Search
      const searchOverlay = document.getElementById("search-overlay");
      const searchInput = document.getElementById("global-search-input");
      const searchResults = document.getElementById("global-search-results");
      const searchBtn = document.getElementById("global-search-btn");
      const searchClose = document.getElementById("search-close");

      function openSearch() {
        searchOverlay.classList.add("open");
        searchInput.value = "";
        searchResults.innerHTML = "";
        setTimeout(() => searchInput.focus(), 100);
      }
      function closeSearch() {
        searchOverlay.classList.remove("open");
      }
      if (searchBtn) searchBtn.addEventListener("click", openSearch);
      if (searchClose) searchClose.addEventListener("click", closeSearch);
      if (searchOverlay) searchOverlay.addEventListener("click", (e) => {
        if (e.target === searchOverlay) closeSearch();
      });
      document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); openSearch(); }
        if (e.key === "Escape") closeSearch();
      });

      if (searchInput) {
        let searchTimeout = null;
        searchInput.addEventListener("input", (e) => {
          clearTimeout(searchTimeout);
          searchTimeout = setTimeout(() => {
            const q = e.target.value.toLowerCase().trim();
            if (!q) { searchResults.innerHTML = ""; return; }
            let html = "";
            // Characters
            const charMatches = characters.filter(c => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
            if (charMatches.length) {
              html += '<div class="search-result-group"><div class="search-result-group-title">Characters</div>';
              charMatches.slice(0, 5).forEach(c => {
                html += `<div class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('open');document.getElementById('characters').scrollIntoView({behavior:'smooth'})">${c.name} <span style="color:var(--text-secondary);font-size:0.8rem">— ${c.role}</span></div>`;
              });
              html += '</div>';
            }
            // Bosses
            const bossMatches = bosses.filter(b => b.name.toLowerCase().includes(q) || b.loc.toLowerCase().includes(q));
            if (bossMatches.length) {
              html += '<div class="search-result-group"><div class="search-result-group-title">Bosses</div>';
              bossMatches.slice(0, 5).forEach(b => {
                html += `<div class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('open');document.getElementById('bosses').scrollIntoView({behavior:'smooth'})">${b.name} <span style="color:var(--text-secondary);font-size:0.8rem">— ${b.loc}</span></div>`;
              });
              html += '</div>';
            }
            // Locations
            const locMatches = locations.filter(l => l.name.toLowerCase().includes(q) || l.desc.toLowerCase().includes(q));
            if (locMatches.length) {
              html += '<div class="search-result-group"><div class="search-result-group-title">Locations</div>';
              locMatches.slice(0, 5).forEach(l => {
                html += `<div class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('open');document.getElementById('locations').scrollIntoView({behavior:'smooth'})">${l.name}</div>`;
              });
              html += '</div>';
            }
            // Covenants
            const covMatches = covenants.filter(c => c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
            if (covMatches.length) {
              html += '<div class="search-result-group"><div class="search-result-group-title">Covenants</div>';
              covMatches.slice(0, 3).forEach(c => {
                html += `<div class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('open');document.getElementById('covenants').scrollIntoView({behavior:'smooth'})">${c.name}</div>`;
              });
              html += '</div>';
            }
            // Gifts
            const giftMatches = gifts.filter(g => g.name.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q));
            if (giftMatches.length) {
              html += '<div class="search-result-group"><div class="search-result-group-title">Starting Gifts</div>';
              giftMatches.slice(0, 3).forEach(g => {
                html += `<div class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('open');document.getElementById('guide').scrollIntoView({behavior:'smooth'})">${g.name}</div>`;
              });
              html += '</div>';
            }
            if (!html) html = '<div style="text-align:center;padding:2rem;color:var(--text-secondary);font-style:italic">No results found</div>';
            searchResults.innerHTML = html;
          }, 200);
        });
      }

      // Light Mode Toggle
      const modeToggle = document.getElementById("mode-toggle");
      const MODE_KEY = "ds-archive-mode";
      function applyMode(mode) {
        document.body.classList.toggle("light-mode", mode === "light");
        try { localStorage.setItem(MODE_KEY, mode); } catch(e) {}
      }
      function initMode() {
        try {
          const saved = localStorage.getItem(MODE_KEY);
          if (saved) applyMode(saved);
        } catch(e) {}
      }
      if (modeToggle) {
        modeToggle.addEventListener("click", () => {
          const isLight = document.body.classList.contains("light-mode");
          applyMode(isLight ? "dark" : "light");
        });
      }
      initMode();

      // Character Detail Modal
      const modal = document.getElementById("character-modal");
      const modalBody = document.getElementById("modal-body");
      const modalClose = document.getElementById("modal-close");

      function openCharacterModal(char) {
        const roleColors = {
          lord: "#d4af37", knight: "#c0c0c0", firekeeper: "#ff6633", guardian: "#ff6633",
          sorcerer: "#6688cc", blacksmith: "#aa8844", teacher: "#88aa66", merchant: "#c49033",
          pardoner: "#9966cc", pyromancer: "#ff6633", trader: "#88aa66",
          outcast: "#888", serpent: "#6688aa", princess: "#d4af37", god: "#d4af37",
          cleric: "#c0c0c0"
        };
        const borderColor = roleColors[char.role.toLowerCase()] || "#888";
        modalBody.innerHTML = `
          <div class="modal-role" style="color:${borderColor}">${char.role}</div>
          <div class="modal-name">${char.name}</div>
          <div class="modal-desc">"${char.desc}"</div>
        `;
        modal.classList.add("open");
      }
      function closeModal() { modal.classList.remove("open"); }
      if (modalClose) modalClose.addEventListener("click", closeModal);
      if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

      // Character card click counters for easter eggs
      const charClickCounts = {};
      const charClickTimeouts = {};

      // Attach modal triggers to character cards (delegated)
      document.getElementById("character-container").addEventListener("click", (e) => {
        const card = e.target.closest(".char-card");
        if (!card || e.target.closest(".char-expand")) return;
        const name = card.querySelector(".char-name");
        if (!name) return;
        const charName = name.textContent;

        // Easter egg: rapid clicks on specific characters
        if (!charClickCounts[charName]) charClickCounts[charName] = 0;
        charClickCounts[charName]++;
        clearTimeout(charClickTimeouts[charName]);
        charClickTimeouts[charName] = setTimeout(() => { charClickCounts[charName] = 0; }, 2000);

        if (charClickCounts[charName] >= 3) {
          charClickCounts[charName] = 0;
          if (charName.includes("Solaire")) {
            trackEgg("Solaire 3-clicks");
            showSecretMessage("PRAISE THE SUN!");
            card.style.animation = "none";
            card.offsetHeight;
            card.style.animation = "bonfireWarm 0.5s ease 2";
          } else if (charName.includes("Siegmeyer")) {
            trackEgg("Siegmeyer 3-clicks");
            showSecretMessage("Hmm... What's this?");
            card.style.transform = "rotate(5deg)";
            setTimeout(() => card.style.transform = "", 500);
          } else if (charName.includes("Artorias")) {
            trackEgg("Artorias 3-clicks");
            showSecretMessage("*abyssal roar*");
            document.body.style.animation = "none";
            document.body.offsetHeight;
            document.body.style.animation = "darkFlash 0.8s ease 2";
          } else if (charName.includes("Sif")) {
            trackEgg("Sif 3-clicks");
            showSecretMessage("*loyal howl echoes through Darkroot Garden*");
            document.body.style.animation = "none";
            document.body.offsetHeight;
            document.body.style.animation = "soulGlow 1s ease 2";
          }
          return;
        }

        const char = characters.find(c => c.name === charName);
        if (char) openCharacterModal(char);
      });

      // Ambient Background Particles (enhanced)
      const particlesContainer = document.getElementById("ambient-particles");
      let particleInterval = null;
      let activeParticles = 0;
      const MAX_PARTICLES = 60;
      const isMobile = window.innerWidth < 768;

      function spawnAmbientParticle() {
        if (activeParticles >= MAX_PARTICLES) return;
        if (document.hidden) return;
        const p = document.createElement("div");
        p.className = "ambient-particle";
        p.style.left = Math.random() * 100 + "%";

        // Particle type variety: dust, embers, sparks
        const type = Math.random();
        let size, duration, color, opacity;

        if (type < 0.5) {
          // Dust: small, slow, gold
          size = Math.random() * 2 + 1;
          duration = Math.random() * 18 + 12;
          color = "var(--gold)";
          opacity = (Math.random() * 0.4 + 0.15).toString();
        } else if (type < 0.8) {
          // Ember: medium, faster, orange
          size = Math.random() * 3 + 2;
          duration = Math.random() * 12 + 8;
          color = "var(--fire-1)";
          opacity = (Math.random() * 0.5 + 0.2).toString();
        } else {
          // Spark: tiny, fast, bright
          size = Math.random() * 1.5 + 0.5;
          duration = Math.random() * 8 + 5;
          color = "var(--fire-3)";
          opacity = (Math.random() * 0.6 + 0.3).toString();
        }

        p.style.animationDuration = duration + "s";
        p.style.animationDelay = (Math.random() * 2) + "s";
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.opacity = opacity;
        p.style.background = color;
        particlesContainer.appendChild(p);
        activeParticles++;
        setTimeout(() => {
          if (p.parentNode) p.remove();
          activeParticles--;
        }, (duration + 2) * 1000);
      }

      function startParticles() {
        if (particleInterval) return;
        particleInterval = setInterval(spawnAmbientParticle, isMobile ? 600 : 400);
        for (let i = 0; i < (isMobile ? 10 : 15); i++) setTimeout(spawnAmbientParticle, i * 100);
      }

      function stopParticles() {
        if (particleInterval) { clearInterval(particleInterval); particleInterval = null; }
      }

      if (particlesContainer) {
        startParticles();
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) stopParticles();
          else startParticles();
        });
      }

      // Boss Comparison (fixed scope)
      const compareOverlay = document.getElementById("compare-overlay");
      const compareClose = document.getElementById("compare-close");
      const compareSelect1 = document.getElementById("compare-boss-1");
      const compareSelect2 = document.getElementById("compare-boss-2");
      const compareGrid = document.getElementById("compare-grid");

      function renderComparison() {
        if (!compareGrid || !compareSelect1 || !compareSelect2) return;
        const b1 = bosses[compareSelect1.value];
        const b2 = bosses[compareSelect2.value];
        if (!b1 || !b2) return;
        const d1 = bossDifficulty[b1.name] || 1;
        const d2 = bossDifficulty[b2.name] || 1;
        function diffHTML(n) {
          const labels = ["", "Novice", "Veteran", "Legendary"];
          let html = '<div class="boss-difficulty" title="' + labels[n] + '">';
          for (let i = 0; i < 3; i++) {
            html += '<span class="ember-dot' + (i < n ? ' active' : '') + '"></span>';
          }
          html += '<span class="diff-text">' + labels[n] + '</span></div>';
          return html;
        }
        compareGrid.innerHTML = `
          <div class="compare-boss">
            <div class="compare-boss-name">${b1.name}</div>
            <div class="compare-boss-loc">${b1.loc}</div>
            <div style="margin:0.5rem 0">Difficulty: ${diffHTML(d1)}</div>
            <div class="compare-boss-drops">${b1.drops}</div>
            <div style="margin-top:0.5rem;font-size:0.7rem;color:var(--text-secondary)">${b1.cat === "dlc" ? "DLC" : "Main Game"}</div>
          </div>
          <div class="compare-boss">
            <div class="compare-boss-name">${b2.name}</div>
            <div class="compare-boss-loc">${b2.loc}</div>
            <div style="margin:0.5rem 0">Difficulty: ${diffHTML(d2)}</div>
            <div class="compare-boss-drops">${b2.drops}</div>
            <div style="margin-top:0.5rem;font-size:0.7rem;color:var(--text-secondary)">${b2.cat === "dlc" ? "DLC" : "Main Game"}</div>
          </div>
        `;
      }

      if (compareSelect1 && compareSelect2) {
        bosses.forEach((b, i) => {
          compareSelect1.innerHTML += `<option value="${i}">${b.name}</option>`;
          compareSelect2.innerHTML += `<option value="${i}">${b.name}</option>`;
        });
        compareSelect2.selectedIndex = 1;
        compareSelect1.addEventListener("change", renderComparison);
        compareSelect2.addEventListener("change", renderComparison);
        renderComparison();
      }
      if (compareClose) compareClose.addEventListener("click", () => compareOverlay && compareOverlay.classList.remove("open"));
      if (compareOverlay) compareOverlay.addEventListener("click", (e) => { if (e.target === compareOverlay) compareOverlay.classList.remove("open"); });

      // Compare buttons on boss cards (delegated)
      document.getElementById("boss-container").addEventListener("click", (e) => {
        const btn = e.target.closest(".boss-compare-btn");
        if (!btn) return;
        const card = btn.closest(".boss-card");
        if (!card) return;
        const name = card.querySelector(".boss-name");
        if (!name) return;
        const idx = bosses.findIndex(b => b.name === name.textContent);
        if (idx >= 0 && compareSelect1 && compareOverlay) {
          compareSelect1.value = idx;
          renderComparison();
          compareOverlay.classList.add("open");
        }
      });

      // Timeline Interactivity
      document.querySelectorAll(".timeline-event-title").forEach(title => {
        title.addEventListener("click", () => {
          const ev = title.closest(".timeline-event");
          if (ev) ev.classList.toggle("expanded");
        });
      });
      document.querySelectorAll(".timeline-dot").forEach(dot => {
        dot.addEventListener("click", () => {
          const ev = dot.closest(".timeline-event");
          if (ev) ev.classList.toggle("expanded");
        });
      });

      // Easter Eggs
      // Konami Code
      const konamiCode = [38,38,40,40,37,39,37,39,66,65];
      let konamiIndex = 0;
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
          konamiIndex++;
          if (konamiIndex === konamiCode.length) {
            konamiIndex = 0;
            trackEgg("Konami Code");
            document.body.style.animation = "none";
            document.body.offsetHeight;
            document.body.style.animation = "konamiFlash 0.5s ease 3";
          }
        } else {
          konamiIndex = 0;
        }
      });

      // You Died on excessive scrolling (reduced frequency)
      let scrollCount = 0;
      let youDiedTimeout = null;
      let youDiedCooldown = false;
      let lastYouDiedTime = 0;
      const youDiedOverlay = document.getElementById("you-died-overlay");
      window.addEventListener("scroll", () => {
        if (youDiedCooldown) return;
        const now = Date.now();
        if (now - lastYouDiedTime < 60000) return; // 60 second minimum between triggers
        scrollCount++;
        if (scrollCount > 500 && !youDiedTimeout) {
          youDiedTimeout = setTimeout(() => {
            if (scrollCount > 500 && youDiedOverlay) {
              youDiedCooldown = true;
              lastYouDiedTime = Date.now();
              trackEgg("You Died");
              youDiedOverlay.classList.add("show");
              setTimeout(() => {
                youDiedOverlay.classList.remove("show");
                youDiedCooldown = false;
              }, 3000);
            }
            scrollCount = 0;
            youDiedTimeout = null;
          }, 30000);
        }
      }, { passive: true });

      // Hidden Bonfire Click Easter Egg
      let bonfireClicks = 0;
      const bonfireContainer = document.querySelector(".bonfire-container");
      if (bonfireContainer) {
        bonfireContainer.addEventListener("click", () => {
          bonfireClicks++;
          if (bonfireClicks >= 5) {
            bonfireClicks = 0;
            trackEgg("Bonfire Click (5x)");
            bonfireContainer.classList.add("clicked");
            setTimeout(() => bonfireContainer.classList.remove("clicked"), 800);
          }
        });
      }

      // Secret Quote Easter Egg (after visiting all locations)
      function checkSecretQuote() {
        try {
          const visited = JSON.parse(localStorage.getItem("ds-archive-visited")) || [];
          if (visited.length >= 20) {
            const footer = document.querySelector("footer .container");
            if (footer && !document.getElementById("secret-quote")) {
              trackEgg("Secret Quote");
              const quote = document.createElement("div");
              quote.id = "secret-quote";
              quote.className = "secret-quote";
              quote.innerHTML = '"The flow of time itself is convoluted..." — Kingseeker Frampt';
              footer.appendChild(quote);
              setTimeout(() => quote.classList.add("visible"), 500);
            }
          }
        } catch(e) {}
      }
      checkSecretQuote();

      // Keyboard Easter Eggs (DARK, SOUL)
      let keyBuffer = "";
      document.addEventListener("keydown", (e) => {
        keyBuffer += e.key.toUpperCase();
        if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);
        if (keyBuffer.includes("DARK")) {
          keyBuffer = "";
          trackEgg("DARK Keyboard");
          document.body.style.animation = "none";
          document.body.offsetHeight;
          document.body.style.animation = "darkFlash 0.5s ease 2";
        }
        if (keyBuffer.includes("SOUL")) {
          keyBuffer = "";
          trackEgg("SOUL Keyboard");
          document.body.style.animation = "none";
          document.body.offsetHeight;
          document.body.style.animation = "soulGlow 0.8s ease 2";
        }
        if (keyBuffer.includes("ILLUSORY")) {
          keyBuffer = "";
          trackEgg("ILLUSORY");
          showSecretMessage("Illusory wall ahead...");
        }
        if (keyBuffer.includes("BONFIRE")) {
          keyBuffer = "";
          trackEgg("BONFIRE Keyboard");
          document.body.style.animation = "none";
          document.body.offsetHeight;
          document.body.style.animation = "bonfireWarm 1s ease 2";
        }
        if (keyBuffer.includes("HOLLOW")) {
          keyBuffer = "";
          trackEgg("HOLLOW Keyboard");
          showSecretMessage("Don't go hollow...");
        }
      });

      // Secret message display
      function showSecretMessage(text) {
        const msg = document.createElement("div");
        msg.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(5,3,2,0.95);border:1px solid rgba(212,175,55,0.3);padding:1.5rem 2.5rem;z-index:99999;font-family:var(--font-body);font-size:1.1rem;color:var(--gold);letter-spacing:2px;text-align:center;opacity:0;transition:opacity 0.5s ease;";
        msg.textContent = text;
        document.body.appendChild(msg);
        setTimeout(() => msg.style.opacity = "1", 10);
        setTimeout(() => { msg.style.opacity = "0"; setTimeout(() => msg.remove(), 500); }, 3000);
      }

      // Easter Egg Tracker
      const EGG_STORAGE_KEY = "ds-archive-eggs";
      const eggNames = [
        "Konami Code", "DARK Keyboard", "SOUL Keyboard", "ILLUSORY",
        "BONFIRE Keyboard", "HOLLOW Keyboard", "Bonfire Click (5x)",
        "You Died", "Secret Quote", "Solaire 3-clicks",
        "Siegmeyer 3-clicks", "Artorias 3-clicks", "Sif 3-clicks"
      ];
      let foundEggs = [];
      try { foundEggs = JSON.parse(localStorage.getItem(EGG_STORAGE_KEY)) || []; } catch(e) {}

      function trackEgg(name) {
        if (!foundEggs.includes(name)) {
          foundEggs.push(name);
          try { localStorage.setItem(EGG_STORAGE_KEY, JSON.stringify(foundEggs)); } catch(e) {}
          updateEggTracker();
          const toggle = document.getElementById("egg-tracker-toggle");
          if (toggle) { toggle.classList.add("new-find"); setTimeout(() => toggle.classList.remove("new-find"), 1500); }
        }
      }

      function updateEggTracker() {
        const countEl = document.getElementById("egg-count");
        const listEl = document.getElementById("egg-panel-list");
        if (countEl) countEl.textContent = `${foundEggs.length}/${eggNames.length}`;
        if (listEl) {
          listEl.innerHTML = eggNames.map(name => {
            const found = foundEggs.includes(name);
            return `<div class="egg-panel-item${found ? ' found' : ''}"><div class="egg-status"></div><span>${name}</span></div>`;
          }).join("");
        }
      }

      const eggTrackerToggle = document.getElementById("egg-tracker-toggle");
      const eggTrackerPanel = document.getElementById("egg-tracker-panel");
      if (eggTrackerToggle && eggTrackerPanel) {
        eggTrackerToggle.addEventListener("click", () => eggTrackerPanel.classList.toggle("open"));
        document.addEventListener("click", (e) => {
          if (!e.target.closest(".egg-tracker")) eggTrackerPanel.classList.remove("open");
        });
        updateEggTracker();
      }

      // Fullscreen Mode
      const fullscreenBtn = document.getElementById("fullscreen-btn");
      if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", () => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
        });
        document.addEventListener("fullscreenchange", () => {
          const isFS = !!document.fullscreenElement;
          fullscreenBtn.innerHTML = isFS
            ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>'
            : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>';
        });
      }

      // Dark Souls Quotes Rotation (Typing Animation)
      const quotes = [
        { text: "Don't you dare go hollow.", author: "Laurentius of the Great Swamp" },
        { text: "Be safe, friend. Don't you dare go hollow.", author: "Laurentius of the Great Swamp" },
        { text: "Praise the Sun!", author: "Solaire of Astora" },
        { text: "I am Solaire of Astora, an adherent of the Lord of Sunlight.", author: "Solaire of Astora" },
        { text: "The flow of time itself is convoluted.", author: "Kingseeker Frampt" },
        { text: "You died.", author: "Dark Souls" },
        { text: "A chosen undead must carry the weight of worlds.", author: "Dark Souls" },
        { text: "Even in the deepest dark, a bonfire awaits.", author: "Dark Souls" },
        { text: "Seek souls. Larger, more powerful souls.", author: "Dark Souls" },
        { text: "There is no cure for a cureless disease.", author: "Dark Souls" },
        { text: "I can see it, I can see it! The sunlight!", author: "Solaire of Astora" },
        { text: "What are you? An undead? Or a human who's lost their mind?", author: "Crestfallen Warrior" },
        { text: "You're the one who rang the Bell of Awakening?", author: "Crestfallen Warrior" },
        { text: "Hmm... I don't think I've ever seen an undead like you.", author: "Crestfallen Warrior" },
        { text: "We are both undead, are we not?", author: "Kingseeker Frampt" },
        { text: "I'll be back soon... don't go hollowing on me.", author: "Siegmeyer of Catarina" },
        { text: "Hmm... What's this? Oh, I'm sorry. I was just meditating.", author: "Siegmeyer of Catarina" },
        { text: "Ah, you're undead too, aren't you?", author: "Patches the Hyena" },
        { text: "I'll remove your arms! I'll remove your legs! I'll remove your head!", author: "Patches the Hyena" },
        { text: "Lord Gwyn, the First Lord of Cinder, linked the First Flame.", author: "Frampt's Crypt" },
        { text: "The Dark Soul fragmented, creating humanity.", author: "Soul of the Furtive Pygmy" },
        { text: "This is a great soul. A great soul never fades.", author: "Lord Soul Description" },
        { text: "Every soul has its purpose.", author: "Soul Item Description" },
        { text: "The morning sun has set, leaving not a single ray of light.", author: "Loading Screen" },
        { text: "Treachery will be punished. Such is the way of the world.", author: "Darkmoon Blade Covenant" },
        { text: "When the world went mad, the Dark settled upon humanity.", author: "Ring of the Evil Eye" },
        { text: "In the end, every path leads to the same place.", author: "Dark Souls Philosophy" },
        { text: "The bell has been rung. The ancient beast stirs.", author: "Bell of Awakening" },
        { text: "A sword wields no strength unless the hand that holds it has courage.", author: "Uchigatana Description" },
        { text: "The way of the warrior is not easily walked.", author: "Way of White" },
        { text: "You've acquired a great soul. Now you must continue to endure.", author: "Kingseeker Frampt" },
        { text: "Be wary of illusory walls...", author: "Dark Souls Loading Screen" },
        { text: "Strength required for heavy armor and weapons.", author: "Dark Souls Tutorial" },
        { text: "The Darksign brands the Undead with a curse.", author: "Darksign Item" },
        { text: "Rest at bonfires to restore health and cure ailments.", author: "Dark Souls Tutorial" },
        { text: "Humanity restores your human form and strengthens yourEstus Flask.", author: "Dark Souls Mechanic" },
        { text: "Weapon scaling increases damage based on your stats.", author: "Dark Souls Mechanic" },
        { text: "Parrying at the right moment can turn the tide of battle.", author: "Dark Souls Combat" },
        { text: "Backstabbing deals massive damage to unsuspecting foes.", author: "Dark Souls Combat" },
        { text: "Rolling provides invincibility frames during combat.", author: "Dark Souls Combat" },
        { text: "Kindling a bonfire increases your Estus Flask charges.", author: "Dark Souls Mechanic" },
        { text: "The Lordvessel allows warping between bonfires.", author: "Lordvessel Item" },
        { text: "Summoning allies makes difficult battles more manageable.", author: "Dark Souls Multiplayer" },
        { text: "Invading other worlds is the way of the Darkwraiths.", author: "Darkwraith Covenant" },
        { text: "The path of the Dragon leads to eternal stone.", author: "Path of the Dragon" }
      ];
      let quoteIdx = 0;
      let quoteCharIdx = 0;
      let quoteIsDeleting = false;
      const quoteEl = document.getElementById("rotating-quote");
      const authorEl = document.getElementById("quote-author");

      function typeQuote() {
        if (!quoteEl || !authorEl) return;
        const current = quotes[quoteIdx];
        const fullText = `"${current.text}"`;

        if (!quoteIsDeleting && quoteCharIdx <= fullText.length) {
          quoteEl.textContent = fullText.substring(0, quoteCharIdx);
          quoteCharIdx++;
          setTimeout(typeQuote, 50);
        } else if (!quoteIsDeleting) {
          authorEl.textContent = `— ${current.author}`;
          authorEl.style.opacity = "1";
          setTimeout(() => { quoteIsDeleting = true; typeQuote(); }, 3000);
        } else if (quoteCharIdx >= 0) {
          quoteEl.textContent = fullText.substring(0, quoteCharIdx);
          quoteCharIdx--;
          setTimeout(typeQuote, 25);
        } else {
          quoteIsDeleting = false;
          authorEl.style.opacity = "0";
          quoteIdx = (quoteIdx + 1) % quotes.length;
          setTimeout(typeQuote, 500);
        }
      }

      if (quoteEl) {
        typeQuote();
      }

      // Build Calculator
      const classes = {
        warrior: { vit: 11, att: 8, end: 12, str: 13, dex: 13, res: 11, int: 9, faith: 9 },
        knight: { vit: 14, att: 10, end: 10, str: 11, dex: 11, res: 10, int: 9, faith: 11 },
        wanderer: { vit: 10, att: 12, end: 10, str: 10, dex: 14, res: 12, int: 11, faith: 8 },
        thief: { vit: 9, att: 11, end: 9, str: 9, dex: 15, res: 10, int: 12, faith: 11 },
        bandit: { vit: 14, att: 8, end: 14, str: 14, dex: 9, res: 11, int: 8, faith: 10 },
        hunter: { vit: 11, att: 11, end: 9, str: 12, dex: 14, res: 11, int: 10, faith: 8 },
        sorcerer: { vit: 8, att: 15, end: 8, str: 8, dex: 11, res: 11, int: 15, faith: 8 },
        pyromancer: { vit: 10, att: 12, end: 11, str: 12, dex: 9, res: 12, int: 10, faith: 8 },
        cleric: { vit: 12, att: 11, end: 10, str: 12, dex: 9, res: 11, int: 8, faith: 14 }
      };
      let buildStats = {};
      const buildClassSelect = document.getElementById("build-class");
      const buildStatsEl = document.getElementById("build-stats");
      const buildSummaryEl = document.getElementById("build-summary");

      function initBuild() {
        if (!buildClassSelect || !buildStatsEl) return;
        const cls = buildClassSelect.value;
        buildStats = { ...classes[cls] };
        renderBuild();
      }

      function renderBuild() {
        if (!buildStatsEl || !buildSummaryEl) return;
        const statNames = ["vit", "att", "end", "str", "dex", "res", "int", "faith"];
        const statLabels = { vit: "Vitality", att: "Attunement", end: "Endurance", str: "Strength", dex: "Dexterity", res: "Resistance", int: "Intelligence", faith: "Faith" };
        let html = "";
        let total = 0;
        statNames.forEach(s => {
          const val = buildStats[s];
          total += val;
          const pct = (val / 99) * 100;
          html += `
            <div class="build-stat-row">
              <div class="build-stat-name">${statLabels[s]}</div>
              <div class="build-stat-bar"><div class="build-stat-fill" style="width:${pct}%"></div></div>
              <div class="build-stat-value">${val}</div>
              <div class="build-stat-controls">
                <button class="build-stat-btn" data-stat="${s}" data-dir="-1">-</button>
                <button class="build-stat-btn" data-stat="${s}" data-dir="1">+</button>
              </div>
            </div>
          `;
        });
        buildStatsEl.innerHTML = html;
        buildSummaryEl.innerHTML = `Level: <span>${total - 79}</span> | Class: <span>${buildClassSelect.value.charAt(0).toUpperCase() + buildClassSelect.value.slice(1)}</span>`;

        buildStatsEl.querySelectorAll(".build-stat-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const stat = btn.dataset.stat;
            const dir = parseInt(btn.dataset.dir);
            buildStats[stat] = Math.max(1, Math.min(99, buildStats[stat] + dir));
            renderBuild();
          });
        });
      }

      if (buildClassSelect) {
        buildClassSelect.addEventListener("change", initBuild);
        initBuild();
      }

      // Weapons Database
      const weapons = [
        { name: "Longsword", type: "sword", phys: 186, str: 10, dex: 10, loc: "Undead Burg" },
        { name: "Bastard Sword", type: "sword", phys: 244, str: 16, dex: 10, loc: "Sen's Fortress" },
        { name: "Claymore", type: "sword", phys: 272, str: 16, dex: 10, loc: "Undead Burg" },
        { name: "Zweihander", type: "sword", phys: 345, str: 24, dex: 12, loc: "Firelink Shrine" },
        { name: "Battle Axe", type: "axe", phys: 210, str: 12, dex: 8, loc: "Undead Burg" },
        { name: "Black Knight Greataxe", type: "axe", phys: 385, str: 24, dex: 18, loc: "Darkroot Basin" },
        { name: "Spear", type: "spear", phys: 175, str: 11, dex: 10, loc: "Undead Burg" },
        { name: "Partizan", type: "spear", phys: 215, str: 16, dex: 14, loc: "Darkroot Garden" },
        { name: "Short Bow", type: "bow", phys: 80, str: 7, dex: 12, loc: "Undead Burg" },
        { name: "Black Bow of Pharis", type: "bow", phys: 155, str: 8, dex: 18, loc: "Darkroot Garden" },
        { name: "Logan's Catalyst", type: "magic", phys: 0, str: 0, dex: 0, loc: "Duke's Archives", magic: 190 },
        { name: "Talisman", type: "magic", phys: 0, str: 0, dex: 0, loc: "Undead Parish", magic: 110 }
      ];

      function initWeapons() {
        const container = document.getElementById("weapon-container");
        const searchInput = document.getElementById("weapon-search");
        if (!container || !searchInput) return;
        let filter = "all", search = "";

        function render() {
          container.innerHTML = "";
          weapons.filter(w => (filter === "all" || w.type === filter) && (w.name.toLowerCase().includes(search) || w.type.includes(search))).forEach(w => {
            const card = document.createElement("div");
            card.className = "weapon-card tilt-box";
            card.innerHTML = `
              <div class="weapon-name">${w.name}</div>
              <div class="weapon-type">${w.type}</div>
              <div class="weapon-stats">
                <span>Phys: <span class="weapon-stat-val">${w.phys}</span></span>
                <span>Str: <span class="weapon-stat-val">${w.str}</span></span>
                <span>Dex: <span class="weapon-stat-val">${w.dex}</span></span>
              </div>
              <div class="weapon-location">${w.loc}</div>
            `;
            container.appendChild(card);
          });
          apply3DHover();
        }

        let timeout;
        searchInput.addEventListener("input", (e) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => { search = e.target.value.toLowerCase(); render(); }, 150);
        });
        document.querySelectorAll("[data-weapon-filter]").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll("[data-weapon-filter]").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filter = btn.dataset.weaponFilter;
            render();
          });
        });
        render();
      }

      // Armor Database
      const armors = [
        { name: "Elite Knight Set", type: "chest", def: 52, weight: 14, loc: "Darkroot Garden", desc: "Worn by the elite knights of Astora. Light yet sturdy, favored by agile warriors.", set: "Elite Knight" },
        { name: "Havel's Set", type: "chest", def: 87, weight: 50, loc: "Watchtower Basement", desc: "Rock-solid armor worn by Havel the Rock. Extremely heavy but offers unmatched defense.", set: "Havel's" },
        { name: "Black Knight Set", type: "chest", def: 62, weight: 22, loc: "Various Locations", desc: "Armor of the Black Knights, once Gwyn's most trusted warriors. Charred from their proximity to the First Flame.", set: "Black Knight" },
        { name: "Stone Knight Set", type: "chest", def: 56, weight: 26, loc: "Darkroot Garden", desc: "Ancient armor found in Darkroot Garden. Worn by the Stone Knights who guard the forest.", set: "Stone Knight" },
        { name: "Crimson Set", type: "chest", def: 38, weight: 8, loc: "Blighttown", desc: "Light robes worn by the pyromancers of the Great Swamp. Offers minimal defense but great mobility.", set: "Crimson" },
        { name: "Xanthous Set", type: "chest", def: 32, weight: 6, loc: "New Londo Ruins", desc: "Yellow robes worn by the mad sorcerer Xanthous King Jeremiah. The oversized headpiece is... peculiar.", set: "Xanthous" },
        { name: "Elite Knight Helm", type: "head", def: 22, weight: 4, loc: "Undead Parish", desc: "Helm of the Elite Knight set. A closed-face helm that offers good protection.", set: "Elite Knight" },
        { name: "Havel's Helm", type: "head", def: 33, weight: 12, loc: "Watchtower Basement", desc: "Rock helm worn by Havel the Rock. Nearly impenetrable but restricts vision.", set: "Havel's" },
        { name: "Black Knight Helm", type: "head", def: 26, weight: 6, loc: "Various Locations", desc: "Helm of the Black Knights. The dark visor conceals the hollow within.", set: "Black Knight" },
        { name: "Stone Helm", type: "head", def: 24, weight: 8, loc: "Darkroot Garden", desc: "Ancient stone helm from Darkroot Garden. Heavy but durable.", set: "Stone Knight" },
        { name: "Elite Knight Gloves", type: "hands", def: 14, weight: 3, loc: "Undead Parish", desc: "Gauntlets of the Elite Knight set. Flexible yet protective.", set: "Elite Knight" },
        { name: "Havel's Gauntlets", type: "hands", def: 21, weight: 10, loc: "Watchtower Basement", desc: "Massive stone gauntlets. Each fist could crush a hollow.", set: "Havel's" },
        { name: "Elite Knight Leggings", type: "legs", def: 22, weight: 5, loc: "Undead Parish", desc: "Leggings of the Elite Knight set. Allow for agile movement.", set: "Elite Knight" },
        { name: "Havel's Leggings", type: "legs", def: 33, weight: 14, loc: "Watchtower Basement", desc: "Stone leggings that make walking sound like an earthquake.", set: "Havel's" },
        { name: "Gough's Set", type: "chest", def: 65, weight: 28, loc: "Royal Wood (DLC)", desc: "Armor of Hawkeye Gough, one of Gwyn's four knights. Designed for archery with excellent stability.", set: "Gough's" },
        { name: "Ornstein's Set", type: "chest", def: 58, weight: 18, loc: "Anor Londo", desc: "Armor of the Dragon Slayer Ornstein. Golden scales represent his status as first of Gwyn's knights.", set: "Ornstein's" },
        { name: "Smough's Set", type: "chest", def: 72, weight: 42, loc: "Anor Londo", desc: "Armor of the executioner Smough. Bulky and grotesque, just like its wearer.", set: "Smough's" },
        { name: "Artorias Set", type: "chest", def: 55, weight: 20, loc: "Royal Wood (DLC)", desc: "Armor of the Abysswalker Artorias. Torn and corrupted by the Abyss he sought to conquer.", set: "Artorias" },
        { name: "Gold-Haired Set", type: "chest", def: 28, weight: 6, loc: "Anor Londo", desc: "Robes worn by the maidens of Gwynevere. Offers little defense but high magic resistance.", set: "Gold-Haired" },
        { name: "Shadow Set", type: "chest", def: 25, weight: 5, loc: "Darkroot Basin", desc: "Light armor favored by assassins. Nearly invisible in darkness.", set: "Shadow" },
        { name: "Wanderer Set", type: "chest", def: 35, weight: 9, loc: "Undead Burg", desc: "Practical armor worn by traveling merchants. Balanced protection and mobility.", set: "Wanderer" },
        { name: "Chester Set", type: "chest", def: 30, weight: 7, loc: "Royal Wood (DLC)", desc: "Elegant attire of Marvelous Chester. Pulled from another time by Manus.", set: "Chester" },
        { name: "Dusk Set", type: "chest", def: 22, weight: 4, loc: "Darkroot Basin", desc: "Delicate robes of Princess Dusk of Oolacile. Woven with ancient light sorceries.", set: "Dusk" },
        { name: "Thief Set", type: "chest", def: 20, weight: 5, loc: "Undead Burg", desc: "Light leather armor favored by thieves and rogues. Minimal protection, maximum stealth.", set: "Thief" },
        { name: "Pharis Set", type: "chest", def: 28, weight: 7, loc: "Darkroot Garden", desc: "Armor of the legendary archer Black Bow of Pharis. Designed for ranged combat.", set: "Pharis" },
        { name: "Iron Set", type: "chest", def: 48, weight: 18, loc: "Undead Parish", desc: "Standard iron armor of the knights. Reliable but unremarkable.", set: "Iron" },
        { name: "Chain Set", type: "chest", def: 42, weight: 14, loc: "Undead Burg", desc: "Flexible chainmail offering decent protection. A favorite among undead warriors.", set: "Chain" },
        { name: "Leather Set", type: "chest", def: 30, weight: 8, loc: "Undead Burg", desc: "Simple leather armor. Light and allows for quick rolls.", set: "Leather" },
        { name: "Master Key Set", type: "chest", def: 18, weight: 4, loc: "Starting Gift", desc: "Minimal clothing worn by the Undead. Offers almost no protection but allows full mobility.", set: "Master Key" },
        { name: "Tattered Set", type: "chest", def: 15, weight: 3, loc: "Firelink Shrine", desc: "Tattered rags worn by hollows. More cloth than armor.", set: "Tattered" },
        { name: "Painting Guardian Set", type: "chest", def: 35, weight: 8, loc: "Painted World", desc: "White robes worn by the guardians of the Painted World. Swift and deadly with their curved swords.", set: "Painting Guardian" },
        { name: "Darkwraith Set", type: "chest", def: 45, weight: 16, loc: "New Londo Ruins", desc: "Dark armor worn by the Darkwraiths, servants of Kaathe. Absorbs light, making the wearer nearly invisible.", set: "Darkwraith" },
        { name: "Brass Set", type: "chest", def: 50, weight: 16, loc: "Anor Londo", desc: "Ornate brass armor worn by the Darkmoon Knights. Highly resistant to magic.", set: "Brass" },
        { name: "Witch Set", type: "chest", def: 30, weight: 6, loc: "Demon Ruins", desc: "Robes of the Witch of Izalith's daughters. Charred at the edges from chaotic fire.", set: "Witch" },
        { name: "Paladin Set", type: "chest", def: 55, weight: 24, loc: "Tomb of the Giants", desc: "Heavy armor worn by the clerics of Thorolund. Blessed with divine protection.", set: "Paladin" },
        { name: "Darkmoon Set", type: "chest", def: 42, weight: 14, loc: "Anor Londo", desc: "Armor of the Blade of Darkmoon. Silvery-blue, representing the moon's pale light.", set: "Darkmoon" },
        { name: "Golem Set", type: "chest", def: 68, weight: 36, loc: "Sen's Fortress", desc: "Massive armor forged from Iron Golem remains. Nearly impervious to physical damage.", set: "Golem" },
        { name: "Cleric Set", type: "chest", def: 40, weight: 12, loc: "Undead Parish", desc: "Robes worn by clerics of the Way of White. Provides good magic and fire defense.", set: "Cleric" },
        { name: "Sorcerer Set", type: "chest", def: 22, weight: 5, loc: "Undead Burg", desc: "Light robes worn by sorcerers of Vinheim. Minimal physical defense but boosts magic.", set: "Sorcerer" },
        { name: "Farmer Set", type: "chest", def: 18, weight: 6, loc: "Undead Burg", desc: "Rough clothing worn by the peasants of Lordran. More comfort than protection.", set: "Farmer" },
        { name: "Bandit Set", type: "chest", def: 28, weight: 7, loc: "Undead Burg", desc: "Leather armor favored by bandits and cutthroats. Dark and inconspicuous.", set: "Bandit" },
        { name: "Knight Set", type: "chest", def: 50, weight: 20, loc: "Undead Parish", desc: "Standard knight armor. Heavy but reliable, the backbone of Lordran's armies.", set: "Knight" },
        { name: "Warrior Set", type: "chest", def: 45, weight: 16, loc: "Undead Burg", desc: "Practical armor worn by the warriors of Astora. Balanced for offense and defense.", set: "Warrior" },
        { name: "Hollow Set", type: "chest", def: 12, weight: 2, loc: "Various", desc: "Rotting rags worn by hollowed undead. Barely recognizable as clothing.", set: "Hollow" },
        { name: "Antiquated Set", type: "chest", def: 20, weight: 4, loc: "Duke's Archives", desc: "Ancient robes from a forgotten age. Resistant to magic but fragile.", set: "Antiquated" }
      ];

      function initArmor() {
        const container = document.getElementById("armor-container");
        const searchInput = document.getElementById("armor-search");
        if (!container || !searchInput) return;
        let filter = "all", search = "";

        function render() {
          container.innerHTML = "";
          armors.filter(a => (filter === "all" || a.type === filter) && (a.name.toLowerCase().includes(search) || a.type.includes(search) || (a.desc && a.desc.toLowerCase().includes(search)))).forEach(a => {
            const card = document.createElement("div");
            card.className = "armor-card tilt-box";
            card.innerHTML = `
              <div class="armor-name">${a.name}</div>
              <div class="armor-type">${a.type}${a.set ? ' • ' + a.set + ' Set' : ''}</div>
              <div class="armor-stats">
                <span>Def: <span class="armor-stat-val">${a.def}</span></span>
                <span>Weight: <span class="armor-stat-val">${a.weight}</span></span>
              </div>
              ${a.desc ? `<p class="armor-desc" style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.5rem;line-height:1.5;font-style:italic">"${a.desc}"</p>` : ''}
              <div class="weapon-location">${a.loc}</div>
            `;
            container.appendChild(card);
          });
          apply3DHover();
        }

        let timeout;
        searchInput.addEventListener("input", (e) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => { search = e.target.value.toLowerCase(); render(); }, 150);
        });
        document.querySelectorAll("[data-armor-filter]").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll("[data-armor-filter]").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filter = btn.dataset.armorFilter;
            render();
          });
        });
        render();
      }

      // Lazy load below-fold sections
      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "bosses" && !lazyObserver._bossesLoaded) { initBosses(); lazyObserver._bossesLoaded = true; }
            if (id === "covenants" && !lazyObserver._covLoaded) { initCovenants(); lazyObserver._covLoaded = true; }
            if (id === "guide" && !lazyObserver._giftsLoaded) { initGifts(); lazyObserver._giftsLoaded = true; }
            if (id === "weapons" && !lazyObserver._weaponsLoaded) { initWeapons(); lazyObserver._weaponsLoaded = true; }
            if (id === "armor" && !lazyObserver._armorLoaded) { initArmor(); lazyObserver._armorLoaded = true; }
            lazyObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: "200px" });
      ["bosses","covenants","guide","weapons","armor"].forEach(id => {
        const el = document.getElementById(id);
        if (el) lazyObserver.observe(el);
      });
    });

    // 1. Header scroll effect and mobile navigation
    function initHeader() {
      const header = document.getElementById("main-header");
      const navMenu = document.getElementById("nav-menu");
      const toggle = document.querySelector(".nav-toggle");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }

        // Update progress bar
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        document.getElementById("progress-bar").style.width = `${progress}%`;
      });

      toggle.addEventListener("click", () => {
        header.classList.toggle("mobile-menu-active");
        navMenu.classList.toggle("open");
      });

      navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          header.classList.remove("mobile-menu-active");
          navMenu.classList.remove("open");
        });
      });
    }

    // 2. Parallax Mouse Tilt for Hero Title
    function initParallax() {
      const hero = document.getElementById("home");
      const parallaxBox = document.querySelector(".parallax-box");
      
      hero.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;
        parallaxBox.style.transform = `translate(${x}px, ${y}px) rotateX(${-y}deg) rotateY(${x}deg)`;
      });

      hero.addEventListener("mouseleave", () => {
        parallaxBox.style.transform = "translate(0,0) rotateX(0) rotateY(0)";
      });
    }

    // 3. Typewriter Core
    function initTypewriter() {
      const quotes = [
        "But soon the First Flame began to fade...",
        "The Undead Curse spreads across the land.",
        "Only you can decide the fate of Lordran.",
        "Will you link the Fire, or let it die?",
        "Be wary of traps and illusory walls...",
        "A chosen undead must carry the weight of worlds.",
        "Even in the deepest dark, a bonfire awaits.",
        "The flow of time itself is convoluted.",
        "Death is not the end. It is merely a pause.",
        "Seek souls. Larger, more powerful souls."
      ];
      let quoteIdx = 0;
      let charIdx = 0;
      let isDeleting = false;
      const target = document.getElementById("typewriter");

      function type() {
        const currentQuote = quotes[quoteIdx];
        if (!isDeleting && charIdx <= currentQuote.length) {
          target.textContent = currentQuote.substring(0, charIdx);
          charIdx++;
          setTimeout(type, 90);
        } else if (isDeleting && charIdx >= 0) {
          target.textContent = currentQuote.substring(0, charIdx);
          charIdx--;
          setTimeout(type, 40);
        } else {
          isDeleting = !isDeleting;
          if (!isDeleting) {
            quoteIdx = (quoteIdx + 1) % quotes.length;
            setTimeout(type, 600);
          } else {
            setTimeout(type, 2400); // Pause after full quote
          }
        }
      }
      type();
    }

    // 4. Bonfire Particles Generator
    function initEmberParticles() {
      const container = document.querySelector(".bonfire-container");
      
      function spawnEmber() {
        const ember = document.createElement("div");
        ember.classList.add("ember-particle");
        
        const size = Math.random() * 3.5 + 2;
        const startX = Math.random() * 90 + 155; // Core area positioning
        
        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;
        ember.style.left = `${startX}px`;
        ember.style.bottom = `120px`;
        
        const drift = `${Math.random() * 70 - 35}px`;
        const driftEnd = `${Math.random() * 120 - 60}px`;
        ember.style.setProperty("--drift", drift);
        ember.style.setProperty("--drift-end", driftEnd);
        
        const duration = Math.random() * 3 + 2.5;
        ember.style.animation = `riseAndFade ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
        
        container.appendChild(ember);
        
        setTimeout(() => {
          ember.remove();
        }, duration * 1000);
      }
      let emberInterval = null;
      const hero = document.getElementById("home");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !emberInterval) {
            emberInterval = setInterval(spawnEmber, 160);
          } else if (!entry.isIntersecting && emberInterval) {
            clearInterval(emberInterval);
            emberInterval = null;
          }
        });
      });
      observer.observe(hero);
    }

    // 5. Populate and Filter Characters
    function initCharacters() {
      const container = document.getElementById("character-container");
      const searchInput = document.getElementById("character-search");
      const countEl = document.getElementById("character-count");
      let activeFilter = "all";
      let searchVal = "";

      const roleColors = {
        lord: "#d4af37", knight: "#c0c0c0", firekeeper: "#ff6633", guardian: "#ff6633",
        sorcerer: "#6688cc", blacksmith: "#aa8844", teacher: "#88aa66", merchant: "#c49033",
        pardoner: "#9966cc", pyromancer: "#ff6633", trader: "#88aa66",
        outcast: "#888", serpent: "#6688aa", princess: "#d4af37", god: "#d4af37",
        cleric: "#c0c0c0"
      };

      function render() {
        container.innerHTML = "";
        let count = 0;
        const sorted = [...characters].sort((a, b) => a.name.localeCompare(b.name));
        sorted.forEach(char => {
          if (activeFilter !== "all" && char.cat !== activeFilter) return;
          if (searchVal && !(char.name.toLowerCase().includes(searchVal) || char.role.toLowerCase().includes(searchVal) || char.desc.toLowerCase().includes(searchVal))) return;

          const card = document.createElement("div");
          card.className = "char-card tilt-box";
          card.setAttribute("tabindex", "0");
          card.setAttribute("role", "button");
          card.setAttribute("aria-label", `View details for ${char.name}`);
          card.style.setProperty("--i", count++);
          const borderColor = roleColors[char.role.toLowerCase()] || "#888";
          const truncated = char.desc.length > 120 ? char.desc.substring(0, 120) + "..." : char.desc;
          const needsExpand = char.desc.length > 120;
          card.innerHTML = `
            <div style="border-left: 2px solid ${borderColor}; padding-left: 0.8rem;">
              <span class="char-role">${char.role}</span>
              <h3 class="char-name">${char.name}</h3>
              <p class="char-desc" data-full="${char.desc.replace(/"/g, '&quot;')}" data-truncated="${truncated.replace(/"/g, '&quot;')}">${truncated}</p>
              ${needsExpand ? '<span class="char-expand" style="font-size:0.7rem;color:var(--gold);cursor:pointer;margin-top:0.3rem;display:inline-block">Read more ▾</span>' : ''}
            </div>
          `;
          if (needsExpand) {
            card.querySelector(".char-expand").addEventListener("click", (e) => {
              e.stopPropagation();
              const p = card.querySelector(".char-desc");
              const btn = card.querySelector(".char-expand");
              if (btn.textContent.includes("more")) {
                p.textContent = p.dataset.full;
                btn.textContent = "Show less ▴";
              } else {
                p.textContent = p.dataset.truncated;
                btn.textContent = "Read more ▾";
              }
            });
          }
          container.appendChild(card);
        });
        if (countEl) countEl.textContent = `Showing ${count} of ${characters.length}`;
        apply3DHover();
      }

      const tabs = document.querySelectorAll("#characters .tab-btn");
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          tabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          activeFilter = tab.getAttribute("data-filter");
          render();
        });
      });

      if (searchInput) {
        let searchTimeout = null;
        searchInput.addEventListener("input", (e) => {
          clearTimeout(searchTimeout);
          searchTimeout = setTimeout(() => {
            searchVal = e.target.value.toLowerCase();
            render();
          }, 150);
        });
      }

      render();
    }

    // 5.5 Interactive Lordran SVG Map (Parchment Style)
    function initMap() {
      const mapContainer = document.getElementById("lordran-map");
      if (!mapContainer) return;

      const catColors = { early: "#88aa66", mid: "#d4af37", late: "#cc3300", hidden: "#6688aa", dlc: "#9966cc" };
      const catLabels = { early: "Early Game", mid: "Mid Game", late: "Late Game", hidden: "Hidden", dlc: "DLC" };

      // Visited tracking
      const VISITED_KEY = "ds-archive-visited";
      let visited = [];
      try { visited = JSON.parse(localStorage.getItem(VISITED_KEY)) || []; } catch(e) { visited = []; }

      function markVisited(idx) {
        if (!visited.includes(idx)) {
          visited.push(idx);
          try { localStorage.setItem(VISITED_KEY, JSON.stringify(visited)); } catch(e) {}
        }
      }

      const mapNodes = [
        { id: 0,  name: "Undead Asylum",    x: 300, y: 80,  cat: "early" },
        { id: 1,  name: "Firelink Shrine",  x: 300, y: 170, cat: "early" },
        { id: 2,  name: "Undead Burg",      x: 430, y: 145, cat: "early" },
        { id: 3,  name: "Undead Parish",    x: 540, y: 110, cat: "early" },
        { id: 4,  name: "The Depths",       x: 430, y: 240, cat: "early" },
        { id: 5,  name: "Blighttown",       x: 430, y: 320, cat: "mid" },
        { id: 6,  name: "Quelaag's Domain", x: 360, y: 380, cat: "mid" },
        { id: 7,  name: "Demon Ruins",      x: 280, y: 440, cat: "late" },
        { id: 8,  name: "Lost Izalith",     x: 200, y: 480, cat: "late" },
        { id: 9,  name: "Great Hollow",     x: 430, y: 390, cat: "hidden" },
        { id: 10, name: "Ash Lake",         x: 430, y: 450, cat: "hidden" },
        { id: 11, name: "Sen's Fortress",   x: 620, y: 75,  cat: "mid" },
        { id: 12, name: "Anor Londo",       x: 720, y: 55,  cat: "mid" },
        { id: 13, name: "Painted World",    x: 720, y: 140, cat: "hidden" },
        { id: 14, name: "Darkroot Garden",  x: 570, y: 195, cat: "mid" },
        { id: 15, name: "Darkroot Basin",   x: 570, y: 265, cat: "mid" },
        { id: 16, name: "Valley of Drakes", x: 500, y: 340, cat: "hidden" },
        { id: 17, name: "New Londo Ruins",  x: 155, y: 165, cat: "mid" },
        { id: 18, name: "The Abyss",        x: 80,  y: 210, cat: "late" },
        { id: 19, name: "The Catacombs",    x: 180, y: 230, cat: "mid" },
        { id: 20, name: "Tomb of Giants",   x: 115, y: 300, cat: "late" },
        { id: 21, name: "Duke's Archives",  x: 760, y: 140, cat: "late" },
        { id: 22, name: "Crystal Cave",     x: 820, y: 195, cat: "late" },
        { id: 23, name: "Firelink Altar",   x: 300, y: 560, cat: "late" },
        { id: 24, name: "Kiln of Flame",    x: 300, y: 630, cat: "late" },
        { id: 25, name: "Sanctuary Garden", x: 650, y: 400, cat: "dlc" },
        { id: 26, name: "Oolacile",         x: 590, y: 450, cat: "dlc" },
        { id: 27, name: "Royal Wood",       x: 650, y: 480, cat: "dlc" },
        { id: 28, name: "Oolacile Township",x: 590, y: 520, cat: "dlc" },
        { id: 29, name: "Chasm of Abyss",   x: 530, y: 560, cat: "dlc" }
      ];

      const mapEdges = [
        [0,1],[1,2],[2,3],[3,11],[11,12],[12,23],[23,24],
        [2,4],[4,5],[5,6],[6,7],[7,8],
        [5,9],[9,10],[5,16],
        [3,14],[14,15],[15,16],[16,17],[17,18],
        [1,19],[19,20],[1,17],
        [12,13],[12,21],[21,22],
        [14,25],[25,26],[26,27],[27,28],[28,29],
        [20,18]
      ];

      const terrainRegions = [
        { points: "520,100 610,65 660,90 640,170 555,200 520,160", color: "#88aa66", label: "Darkroot Forest", lx: 575, ly: 155 },
        { points: "240,410 340,390 370,430 320,480 220,470", color: "#cc3300", label: "Demon Wastes", lx: 290, ly: 450 },
        { points: "100,140 200,130 210,200 170,250 90,220", color: "#6688aa", label: "New Londo", lx: 150, ly: 190 },
        { points: [660,35, 770,35, 790,130, 770,160, 680,155, 650,100], color: "#d4af37", label: "Anor Londo", lx: 720, ly: 90 },
        { points: [400,300, 470,300, 470,400, 400,400], color: "#55aa33", label: "Blighttown", lx: 435, ly: 355 },
        { points: [530,380, 690,380, 690,550, 530,550], color: "#9966cc", label: "Royal Wood (DLC)", lx: 610, ly: 470 }
      ];

      const regionLabels = [
        { text: "LORDRAN", x: 400, y: 310, size: 18, opacity: 0.04 },
        { text: "Undead Settlement", x: 460, y: 185, size: 8, opacity: 0.12 },
        { text: "Deep below", x: 350, y: 460, size: 7, opacity: 0.1 }
      ];

      let selectedIdx = 1;
      const tooltip = document.createElement("div");
      tooltip.className = "map-tooltip";
      tooltip.innerHTML = '<div class="map-tooltip-name"></div><div class="map-tooltip-desc"></div>';
      mapContainer.appendChild(tooltip);

      function curvedPath(x1, y1, x2, y2) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.sqrt(dx * dx + dy * dy);
        const offset = len * 0.12;
        const cx = mx + (-dy / len) * offset;
        const cy = my + (dx / len) * offset;
        return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
      }

      function buildSVG() {
        const W = 880, H = 680;
        let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:${W}px;">`;
        svg += `<defs>`;
        svg += `<filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
        svg += `<filter id="glow-strong"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
        svg += `<filter id="parchment-noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter>`;
        svg += `<radialGradient id="parchment-vignette" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#1a1510" stop-opacity="0"/><stop offset="100%" stop-color="#0a0806" stop-opacity="0.8"/></radialGradient>`;
        svg += `</defs>`;

        // Parchment background
        svg += `<rect width="${W}" height="${H}" fill="#12100c"/>`;
        svg += `<rect width="${W}" height="${H}" fill="#1a1510" filter="url(#parchment-noise)" opacity="0.3"/>`;
        svg += `<rect width="${W}" height="${H}" fill="url(#parchment-vignette)"/>`;

        // Decorative border
        svg += `<rect x="8" y="8" width="${W-16}" height="${H-16}" fill="none" stroke="rgba(212,175,55,0.1)" stroke-width="1"/>`;
        svg += `<rect x="14" y="14" width="${W-28}" height="${H-28}" fill="none" stroke="rgba(212,175,55,0.05)" stroke-width="0.5" stroke-dasharray="4,4"/>`;

        // Title banner
        svg += `<text x="${W/2}" y="40" text-anchor="middle" fill="var(--gold)" font-size="16" font-family="'Cinzel Decorative', serif" letter-spacing="4" opacity="0.7">MAP OF LORDRAN</text>`;
        svg += `<line x1="${W/2-120}" y1="48" x2="${W/2-30}" y2="48" stroke="rgba(212,175,55,0.3)" stroke-width="0.5"/>`;
        svg += `<line x1="${W/2+30}" y1="48" x2="${W/2+120}" y2="48" stroke="rgba(212,175,55,0.3)" stroke-width="0.5"/>`;
        svg += `<circle cx="${W/2-22}" cy="48" r="2" fill="rgba(212,175,55,0.3)"/>`;
        svg += `<circle cx="${W/2+22}" cy="48" r="2" fill="rgba(212,175,55,0.3)"/>`;

        // Terrain regions
        terrainRegions.forEach(r => {
          svg += `<polygon points="${r.points}" fill="${r.color}" opacity="0.04" stroke="${r.color}" stroke-width="0.3" stroke-opacity="0.1"/>`;
          svg += `<text x="${r.lx}" y="${r.ly}" text-anchor="middle" fill="${r.color}" font-size="6.5" font-family="'IM Fell English', serif" font-style="italic" opacity="0.18">${r.label}</text>`;
        });

        // Background region labels
        regionLabels.forEach(r => {
          svg += `<text x="${r.x}" y="${r.y}" text-anchor="middle" fill="var(--gold)" font-size="${r.size}" font-family="'Cinzel Decorative', serif" letter-spacing="6" opacity="${r.opacity}">${r.text}</text>`;
        });

        // Compass rose (top-right)
        const cx = W - 60, cy = 70;
        svg += `<g opacity="0.5">`;
        svg += `<circle cx="${cx}" cy="${cy}" r="22" fill="none" stroke="rgba(212,175,55,0.2)" stroke-width="0.5"/>`;
        svg += `<circle cx="${cx}" cy="${cy}" r="18" fill="none" stroke="rgba(212,175,55,0.12)" stroke-width="0.3"/>`;
        svg += `<line x1="${cx}" y1="${cy-20}" x2="${cx}" y2="${cy+20}" stroke="rgba(212,175,55,0.25)" stroke-width="0.5"/>`;
        svg += `<line x1="${cx-20}" y1="${cy}" x2="${cx+20}" y2="${cy}" stroke="rgba(212,175,55,0.25)" stroke-width="0.5"/>`;
        svg += `<line x1="${cx-14}" y1="${cy-14}" x2="${cx+14}" y2="${cy+14}" stroke="rgba(212,175,55,0.12)" stroke-width="0.3"/>`;
        svg += `<line x1="${cx+14}" y1="${cy-14}" x2="${cx-14}" y2="${cy+14}" stroke="rgba(212,175,55,0.12)" stroke-width="0.3"/>`;
        svg += `<polygon points="${cx},${cy-16} ${cx-3},${cy-8} ${cx+3},${cy-8}" fill="rgba(212,175,55,0.4)"/>`;
        svg += `<text x="${cx}" y="${cy-24}" text-anchor="middle" fill="var(--gold)" font-size="6" font-family="'Cinzel', serif" opacity="0.6">N</text>`;
        svg += `<text x="${cx}" y="${cy+30}" text-anchor="middle" fill="var(--gold)" font-size="5" font-family="'Cinzel', serif" opacity="0.3">S</text>`;
        svg += `<text x="${cx+28}" y="${cy+2}" text-anchor="middle" fill="var(--gold)" font-size="5" font-family="'Cinzel', serif" opacity="0.3">E</text>`;
        svg += `<text x="${cx-28}" y="${cy+2}" text-anchor="middle" fill="var(--gold)" font-size="5" font-family="'Cinzel', serif" opacity="0.3">W</text>`;
        svg += `</g>`;

        // Curved connection paths
        mapEdges.forEach(([a, b]) => {
          const na = mapNodes[a], nb = mapNodes[b];
          const isActive = a === selectedIdx || b === selectedIdx;
          const color = isActive ? "#d4af37" : "#444";
          const sw = isActive ? 1.5 : 0.7;
          const op = isActive ? 0.7 : 0.25;
          const dash = isActive ? "none" : "6,4";
          const d = curvedPath(na.x, na.y, nb.x, nb.y);
          svg += `<path class="map-path" data-from="${a}" data-to="${b}" d="${d}" stroke="${color}" stroke-width="${sw}" opacity="${op}" stroke-dasharray="${dash}" stroke-linecap="round"/>`;
        });

        // Nodes
        mapNodes.forEach((n, i) => {
          const isActive = i === selectedIdx;
          const isVisited = visited.includes(i);
          const color = catColors[n.cat];
          const r = isActive ? 8 : 5.5;
          svg += `<g class="map-node${isActive ? " active" : ""}${isVisited ? " visited" : ""}" data-idx="${i}" style="cursor:pointer">`;
          if (isActive) {
            svg += `<circle cx="${n.x}" cy="${n.y}" r="${r + 5}" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.35">`;
            svg += `<animate attributeName="r" values="${r+3};${r+9};${r+3}" dur="2.5s" repeatCount="indefinite"/>`;
            svg += `<animate attributeName="opacity" values="0.35;0.08;0.35" dur="2.5s" repeatCount="indefinite"/>`;
            svg += `</circle>`;
          }
          svg += `<circle class="node-dot" cx="${n.x}" cy="${n.y}" r="${r}" fill="${isActive ? '#d4af37' : color}" opacity="${isActive ? 1 : 0.65}" filter="${isActive ? 'url(#glow-strong)' : 'none'}"/>`;
          if (isVisited && !isActive) {
            svg += `<circle cx="${n.x}" cy="${n.y}" r="${r + 2}" fill="none" stroke="#88aa66" stroke-width="0.8" opacity="0.5"/>`;
          }
          svg += `<text x="${n.x}" y="${n.y + r + 9}" text-anchor="middle" fill="${isActive ? '#d4af37' : '#999'}" font-size="7.5" font-family="'Cinzel', serif">${n.name}</text>`;
          svg += `</g>`;
        });

        svg += `</svg>`;
        return svg;
      }

      function highlightNode(idx) {
        selectedIdx = idx;
        const svgEl = mapContainer.querySelector("svg");
        if (svgEl) svgEl.outerHTML = buildSVG();
        attachMapEvents();
      }

      function attachMapEvents() {
        mapContainer.querySelectorAll(".map-node").forEach(g => {
          g.addEventListener("mouseenter", () => {
            const i = parseInt(g.dataset.idx);
            const loc = locations[i];
            if (!loc) return;
            tooltip.querySelector(".map-tooltip-name").textContent = loc.name;
            tooltip.querySelector(".map-tooltip-desc").textContent = loc.desc.substring(0, 100) + "...";
            const circle = g.querySelector(".node-dot");
            if (circle) {
              const rect = mapContainer.getBoundingClientRect();
              const svgEl = mapContainer.querySelector("svg");
              const svgRect = svgEl.getBoundingClientRect();
              const cx = parseFloat(circle.getAttribute("cx"));
              const cy = parseFloat(circle.getAttribute("cy"));
              const scaleX = svgRect.width / 880;
              const scaleY = svgRect.height / 680;
              tooltip.style.left = (svgRect.left - rect.left + cx * scaleX - 110) + "px";
              tooltip.style.top = (svgRect.top - rect.top + cy * scaleY - 65) + "px";
            }
            tooltip.classList.add("visible");
          });
          g.addEventListener("mouseleave", () => tooltip.classList.remove("visible"));
          g.addEventListener("click", () => {
            const i = parseInt(g.dataset.idx);
            markVisited(i);
            highlightNode(i);
            const loc = locations[i];
            if (loc) {
              document.querySelectorAll(".location-btn").forEach((b, j) => b.classList.toggle("active", j === i));
              showDetails(loc);
              const listPane = document.getElementById("location-list");
              const activeBtn = listPane.querySelector(".location-btn.active");
              if (activeBtn) activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          });
        });
      }

      function buildLegend() {
        let html = '<div class="map-legend">';
        Object.entries(catLabels).forEach(([key, label]) => {
          html += `<div class="map-legend-item"><div class="map-legend-dot" style="background:${catColors[key]}"></div><span class="map-legend-label">${label}</span></div>`;
        });
        html += '</div>';
        return html;
      }

      mapContainer.innerHTML = buildSVG() + buildLegend();
      attachMapEvents();
      window._highlightMapNode = highlightNode;
    }

    // 6. Interactive Locations Split Panels
    function initLocations() {
      const listPane = document.getElementById("location-list");
      const detailPane = document.getElementById("location-detail");

      locations.forEach((loc, idx) => {
        const btn = document.createElement("button");
        btn.className = `location-btn ${idx === 0 ? 'active' : ''}`;
        btn.textContent = `${idx + 1}. ${loc.name}`;
        btn.addEventListener("click", () => {
          document.querySelectorAll(".location-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          showDetails(loc);
          if (window._highlightMapNode) window._highlightMapNode(idx);
        });
        listPane.appendChild(btn);
      });

      window.showDetails = function(loc) {
        const existing = detailPane.querySelector(".detail-container");
        if (existing) {
          existing.style.opacity = "0";
          existing.style.transform = "translateY(8px)";
        }
        setTimeout(() => {
          detailPane.innerHTML = `
            <div class="detail-container" style="opacity: 0; transform: translateY(8px);">
              <h3 class="detail-name">${loc.name}</h3>
              <p style="font-size: 1.15rem; font-style: italic; color: #dfd4c6; line-height: 1.6;">"${loc.desc}"</p>

              <div class="detail-meta">
                <div class="meta-box">
                  <div class="meta-title">Area Bosses</div>
                  <div class="meta-content" style="color: var(--gold);">${loc.bosses}</div>
                </div>
                <div class="meta-box">
                  <div class="meta-title">Map Connections</div>
                  <div class="meta-content">${loc.connections}</div>
                </div>
              </div>
            </div>
          `;
          requestAnimationFrame(() => {
            const container = detailPane.querySelector(".detail-container");
            if (container) {
              container.style.transition = "opacity 0.4s ease, transform 0.4s ease";
              container.style.opacity = "1";
              container.style.transform = "translateY(0)";
            }
          });
        }, existing ? 200 : 0);
      }

      showDetails(locations[0]);
    }

    // 7. Boss bestiary live searching & sorting
    function initBosses() {
      const container = document.getElementById("boss-container");
      const searchInput = document.getElementById("boss-search");
      const countEl = document.getElementById("boss-count");
      let activeFilter = "all";
      let searchVal = "";
      let sortBy = "name";

      function render() {
        container.innerHTML = "";
        let count = 0;
        let filtered = bosses.filter(boss => {
          const matchFilter = activeFilter === "all" || boss.cat === activeFilter;
          const matchSearch = boss.name.toLowerCase().includes(searchVal) || boss.loc.toLowerCase().includes(searchVal) || boss.drops.toLowerCase().includes(searchVal);
          return matchFilter && matchSearch;
        });

        filtered.sort((a, b) => {
          if (sortBy === "name") return a.name.localeCompare(b.name);
          if (sortBy === "location") return a.loc.localeCompare(b.loc);
          if (sortBy === "difficulty") return (bossDifficulty[b.name] || 1) - (bossDifficulty[a.name] || 1);
          return 0;
        });

        filtered.forEach(boss => {
          const diff = bossDifficulty[boss.name] || 1;
          const diffLabels = ["", "Novice", "Veteran", "Legendary"];
          let diffHTML = `<div class="boss-difficulty" title="${diffLabels[diff]}">`;
          for (let i = 0; i < 3; i++) {
            const active = i < diff ? " active" : "";
            diffHTML += `<span class="ember-dot${active}"></span>`;
          }
          diffHTML += `<span class="diff-text">${diffLabels[diff]}</span></div>`;

          const card = document.createElement("div");
          card.className = "boss-card tilt-box";
          card.setAttribute("tabindex", "0");
          card.style.setProperty("--i", count++);
          card.innerHTML = `
            <div class="boss-header">
              <h3 class="boss-name">${boss.name}</h3>
              <span class="boss-badge ${boss.cat === 'dlc' ? 'boss-badge-dlc' : ''}">${boss.cat === "dlc" ? "Artorias of Abyss DLC" : "Main Game"}</span>
              ${diffHTML}
            </div>
            <div>
              <div class="boss-row">
                <div class="boss-label">Arena Location</div>
                <div class="boss-val">${boss.loc}</div>
              </div>
              <div class="boss-row" style="margin-top: 1rem;">
                <div class="boss-label">Souls & Relic Drops</div>
                <div class="boss-val" style="color: var(--gold); font-style: italic;">${boss.drops}</div>
              </div>
              <button class="boss-compare-btn" style="margin-top:0.8rem;background:none;border:1px solid rgba(212,175,55,0.2);color:var(--text-secondary);font-family:var(--font-ui);font-size:0.65rem;padding:0.3rem 0.8rem;cursor:pointer;letter-spacing:1px;transition:border-color 0.2s,color 0.2s">Compare</button>
            </div>
          `;
          container.appendChild(card);
        });
        if (countEl) countEl.textContent = `Showing ${count} of ${bosses.length} bosses`;
        if (count === 0) {
          container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;"><p style="color: var(--text-secondary); font-family: var(--font-ui); font-size: 1rem; letter-spacing: 2px;">No bosses match your search.</p></div>`;
        }
        apply3DHover();
      }

      let searchTimeout = null;
      searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          searchVal = e.target.value.toLowerCase();
          render();
        }, 150);
      });

      const tabs = document.querySelectorAll("#bosses .filter-tabs .tab-btn");
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          tabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          activeFilter = tab.getAttribute("data-boss-filter");
          render();
        });
      });

      // Sort buttons
      const sortBtns = document.querySelectorAll("#bosses .boss-sort .tab-btn");
      sortBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          sortBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          sortBy = btn.getAttribute("data-boss-sort");
          render();
        });
      });

      render();
    }

    // 8. Covenants Generator
    function initCovenants() {
      const container = document.getElementById("covenants-container");
      covenants.forEach((cov, i) => {
        const card = document.createElement("div");
        card.className = "covenant-card tilt-box";
        card.style.setProperty("--i", i);
        card.innerHTML = `
          <svg class="covenant-sigil" viewBox="0 0 100 100">
            <path d="${cov.sigil}" fill="none" stroke="var(--gold)" stroke-width="2"/>
          </svg>
          <h3>${cov.name}</h3>
          <p>${cov.desc}</p>
          ${cov.join ? `<div style="margin-top:0.8rem;padding-top:0.6rem;border-top:1px solid rgba(212,175,55,0.08)"><span style="font-family:var(--font-ui);font-size:0.65rem;color:var(--gold);letter-spacing:1px;text-transform:uppercase">How to Join</span><p style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.2rem">${cov.join}</p></div>` : ''}
          ${cov.npcs ? `<div style="margin-top:0.5rem"><span style="font-family:var(--font-ui);font-size:0.65rem;color:var(--gold);letter-spacing:1px;text-transform:uppercase">Related NPCs</span><p style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.2rem">${cov.npcs}</p></div>` : ''}
        `;
        container.appendChild(card);
      });
      apply3DHover();
    }

    // 9. Gifts Setup
    function initGifts() {
      const container = document.getElementById("gifts-container");
      gifts.forEach((gift, i) => {
        const slot = document.createElement("div");
         slot.className = "gift-slot tilt-box";
        slot.style.setProperty("--i", i);
        slot.innerHTML = `
          <div class="gift-icon">
            <svg viewBox="0 0 100 100" fill="none" stroke="var(--gold)" stroke-width="1.8">
              <circle cx="50" cy="50" r="24" stroke-opacity="0.3"/>
              <path d="M50,15 L50,85 M15,50 L85,50" />
              <polygon points="50,26 62,50 38,50" fill="var(--gold-glow)"/>
            </svg>
          </div>
          <h3 class="gift-title">${gift.name}</h3>
          <p class="gift-desc">${gift.desc}</p>
        `;
        container.appendChild(slot);
      });
      apply3DHover();
    }

    // 10. Unified 3D Card Hover Perspective Engine (rAF-throttled)
    function apply3DHover() {
      if (apply3DHover._bound) return;
      apply3DHover._bound = true;
      let lastCard = null;
      let pendingFrame = null;
      let pendingTransform = null;

      function flushTransform() {
        if (lastCard && pendingTransform) {
          lastCard.style.transform = pendingTransform;
          pendingTransform = null;
        }
        pendingFrame = null;
      }

      document.addEventListener("mousemove", (e) => {
        const card = e.target.closest(".tilt-box");
        if (lastCard && lastCard !== card) {
          lastCard.style.transition = "none";
          lastCard.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
          requestAnimationFrame(() => { lastCard.style.transition = ""; });
          lastCard = null;
        }
        if (!card) return;
        lastCard = card;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotateX = -(midY - y) / 10;
        const rotateY = (midX - x) / 10;
        pendingTransform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        if (!pendingFrame) pendingFrame = requestAnimationFrame(flushTransform);
      });

      document.addEventListener("mouseleave", () => {
        if (lastCard) {
          lastCard.style.transition = "none";
          lastCard.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
          requestAnimationFrame(() => { lastCard.style.transition = ""; });
          lastCard = null;
        }
      });
    }

    // 11. Intersection Observer for Gothic Animation Reveals
    function initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      });

      document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    }

    // 12. Active Nav Highlight on Scroll
    function initNavHighlight() {
      const navLinks = document.querySelectorAll("#nav-menu a");
      const sections = document.querySelectorAll("section[id]");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link => {
              link.style.color = link.getAttribute("href") === `#${id}` ? "var(--gold)" : "";
            });
          }
        });
      }, { threshold: 0.2, rootMargin: "-85px 0px -50% 0px" });
      sections.forEach(sec => observer.observe(sec));
    }

    // 13. Scroll-to-Top Button
    (function initScrollTop() {
      const btn = document.getElementById("scroll-top");
      if (!btn) return;
      window.addEventListener("scroll", () => {
        btn.classList.toggle("visible", window.scrollY > 400);
      }, { passive: true });
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    })();

    // 14. Smooth Card Filter Transitions
    (function initFilterTransitions() {
      function addFadeListeners(gridId) {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        const container = grid.parentElement;
        const tabs = container ? container.previousElementSibling : null;
        if (!tabs) return;
        tabs.querySelectorAll(".tab-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            grid.classList.add("fading");
            setTimeout(() => grid.classList.remove("fading"), 300);
          });
        });
      }
      addFadeListeners("character-container");
      addFadeListeners("boss-container");
    })();

    // 15. Keyboard Navigation for Location List
    (function initKeyboardNav() {
      const listPane = document.getElementById("location-list");
      if (!listPane) return;
      listPane.setAttribute("tabindex", "0");
      listPane.addEventListener("keydown", (e) => {
        const btns = listPane.querySelectorAll(".location-btn");
        const active = listPane.querySelector(".location-btn.active");
        const idx = Array.from(btns).indexOf(active);
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          const next = btns[Math.min(idx + 1, btns.length - 1)];
          if (next) next.click();
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = btns[Math.max(idx - 1, 0)];
          if (prev) prev.click();
        }
      });
    })();

    // 16. Boss Difficulty Indicators
    const bossDifficulty = {
      "Asylum Demon": 1, "Stray Demon": 2, "Taurus Demon": 1, "Capra Demon": 1,
      "Bell Gargoyles": 2, "Moonlight Butterfly": 1, "Gaping Dragon": 2,
      "Chaos Witch Quelaag": 2, "Great Grey Wolf Sif": 2, "Iron Golem": 1,
      "Crossbreed Priscilla": 2, "Dark Sun Gwyndolin": 2,
      "Ornstein & Smough": 3, "Pinwheel": 1, "Gravelord Nito": 3,
      "Seath the Scaleless": 2, "The Four Kings": 3, "Ceaseless Discharge": 1,
      "Demon Firesage": 2, "Centipede Demon": 2, "Bed of Chaos": 3,
      "Gwyn, Lord of Cinder": 3, "Sanctuary Guardian": 2, "Knight Artorias": 3,
      "Black Dragon Kalameet": 3, "Manus, Father of the Abyss": 3
    };

    function getDifficultyHTML(name) {
      const level = bossDifficulty[name] || 1;
      let html = '<div class="boss-difficulty">';
      for (let i = 0; i < 3; i++) {
        const active = i < level ? " active" : "";
        html += `<svg class="flame${active}" viewBox="0 0 12 16"><path d="M6,1 C4,5 2,8 2,11 C2,13.5 4,15 6,15 C8,15 10,13.5 10,11 C10,8 8,5 6,1Z" fill="${i < level ? 'var(--fire-1)' : 'var(--text-secondary)'}" opacity="${i < level ? 0.9 : 0.25}"/></svg>`;
      }
      html += '</div>';
      return html;
    }

    // Patch boss render to include difficulty
    const origInitBosses = window.initBosses;
    if (origInitBosses) {
      const patchedInitBosses = function() {
        origInitBosses();
        document.querySelectorAll(".boss-card").forEach(card => {
          const name = card.querySelector(".boss-name");
          if (name) {
            const diff = getDifficultyHTML(name.textContent);
            const header = card.querySelector(".boss-header");
            if (header) header.insertAdjacentHTML("beforeend", diff);
          }
        });
      };
      // Re-assign if it exists in the lazy loader
    }

    // 17. Character Silhouette SVGs
    const charSilhouettes = {
      lords: '<svg viewBox="0 0 48 48" class="char-silhouette"><circle cx="24" cy="14" r="8" fill="var(--gold)"/><path d="M12,44 L12,28 C12,22 18,18 24,18 C30,18 36,22 36,28 L36,44" fill="var(--gold)"/></svg>',
      knights: '<svg viewBox="0 0 48 48" class="char-silhouette"><circle cx="24" cy="12" r="7" fill="var(--gold)"/><path d="M14,44 L14,30 L10,24 L18,20 L24,18 L30,20 L38,24 L34,30 L34,44" fill="var(--gold)"/><path d="M18,8 L24,4 L30,8" fill="none" stroke="var(--gold)" stroke-width="2"/></svg>',
      firekeepers: '<svg viewBox="0 0 48 48" class="char-silhouette"><circle cx="24" cy="13" r="7" fill="var(--gold)"/><path d="M14,44 L16,26 C16,22 20,19 24,19 C28,19 32,22 32,26 L34,44" fill="var(--gold)"/></svg>',
      merchants: '<svg viewBox="0 0 48 48" class="char-silhouette"><circle cx="24" cy="14" r="7" fill="var(--gold)"/><path d="M15,44 L15,30 C15,24 19,20 24,20 C29,20 33,24 33,30 L33,44" fill="var(--gold)"/><rect x="18" y="28" width="12" height="8" rx="2" fill="none" stroke="var(--gold)" stroke-width="1.5"/></svg>',
      others: '<svg viewBox="0 0 48 48" class="char-silhouette"><circle cx="24" cy="14" r="7" fill="var(--gold)"/><path d="M16,44 L16,30 C16,24 19,20 24,20 C29,20 32,24 32,30 L32,44" fill="var(--gold)"/></svg>'
    };

    // Patch character render to include silhouettes
    const origRender = window.initCharacters;
    if (!window._charSilhouettePatched) {
      window._charSilhouettePatched = true;
      const origCharInit = initCharacters;
      initCharacters = function() {
        origCharInit();
        document.querySelectorAll(".char-card").forEach(card => {
          const role = card.querySelector(".char-role");
          if (role) {
            const cat = role.textContent.toLowerCase();
            let svgKey = "others";
            if (cat === "lord" || cat === "lords") svgKey = "lords";
            else if (cat === "knight" || cat === "knights") svgKey = "knights";
            else if (cat === "firekeeper" || cat === "guardian") svgKey = "firekeepers";
            else if (cat === "sorcerer" || cat === "blacksmith" || cat === "teacher" || cat === "merchant" || cat === "pardoner" || cat === "pyromancer" || cat === "trader") svgKey = "merchants";
            card.insertAdjacentHTML("afterbegin", charSilhouettes[svgKey]);
          }
        });
      };
    }
