const pages = [

    //team 1
  { keyWord: "xcoo", startPage: 1, pageNumber: 4, newKeyword: "2: NEAR" }, //start with WALK
  { keyWord: "ogdv", startPage: 4, pageNumber: 3, newKeyword: "3: HOPE" },
  { keyWord: "iqsi", startPage: 3, pageNumber: 2, newKeyword: "4: LIGHT" },
  { keyWord: "mkjly", startPage: 2, pageNumber: 7, newKeyword: "5: SOLID" },
  { keyWord: "tqomi", startPage: 7, pageNumber: 6, newKeyword: "6: GRACE" },
  { keyWord: "htdgj", startPage: 6, pageNumber: 5, newKeyword: "7: ANCHOR" },
  { keyWord: "bpfltx", startPage: 5, pageNumber: 8, newKeyword: "" },

    //team2
  { keyWord: "sqfo", startPage: 1, pageNumber: 2, newKeyword: "2: FAIR" }, //start with ROCK
  { keyWord: "gclv", startPage: 2, pageNumber: 4, newKeyword: "3: CARE" },
  { keyWord: "dcui", startPage: 4, pageNumber: 3, newKeyword: "4: SERVE" },
  { keyWord: "tguzj", startPage: 3, pageNumber: 5, newKeyword: "5: FAITH" },
  { keyWord: "gclxm", startPage: 5, pageNumber: 6, newKeyword: "6: GREAT" },
  { keyWord: "hthey", startPage: 6, pageNumber: 7, newKeyword: "7: CHOSEN" },
  { keyWord: "djrwjt", startPage: 7, pageNumber: 8, newKeyword: "" },

   //team3
  { keyWord: "hkix", startPage: 1, pageNumber: 3, newKeyword: "2: MEEK" }, //start with GIFT
  { keyWord: "ngho", startPage: 3, pageNumber: 2, newKeyword: "3: GOOD" },
  { keyWord: "hqrh", startPage: 2, pageNumber: 4, newKeyword: "4: TRUTH" },
  { keyWord: "utxxm", startPage: 4, pageNumber: 6, newKeyword: "5: GUIDE" },
  { keyWord: "hwlhj", startPage: 6, pageNumber: 5, newKeyword: "6: HEART" },
  { keyWord: "igdvy", startPage: 5, pageNumber: 7, newKeyword: "7: DIVINE" },
  { keyWord: "ekymsk", startPage: 7, pageNumber: 8, newKeyword: "" },

    //team 4
  { keyWord: "mkii", startPage: 1, pageNumber: 7, newKeyword: "2: PURE" }, //start with LIFE
  { keyWord: "qwui", startPage: 7, pageNumber: 6, newKeyword: "3: JUST" },
  { keyWord: "kwvx", startPage: 6, pageNumber: 5, newKeyword: "4: BREAD" },
  { keyWord: "cthei", startPage: 5, pageNumber: 2, newKeyword: "5: JUDGE" },
  { keyWord: "kwgkj", startPage: 2, pageNumber: 4, newKeyword: "6: HONOR" },
  { keyWord: "iqqsw", startPage: 4, pageNumber: 3, newKeyword: "7: FOLLOW" },
  { keyWord: "gqopt}", startPage: 3, pageNumber: 8, newKeyword: "" },

   //team 5
  { keyWord: "lkqh", startPage: 1, pageNumber: 5, newKeyword: "2: LOVE" }, //start with KIND
  { keyWord: "mqyi", startPage: 5, pageNumber: 7, newKeyword: "3: FIRM" },
  { keyWord: "gkuq", startPage: 7, pageNumber: 6, newKeyword: "4: TRUST" },
  { keyWord: "utxwy", startPage: 6, pageNumber: 4, newKeyword: "5: MERCY" },
  { keyWord: "ngug~", startPage: 4, pageNumber: 3, newKeyword: "6: MAKER" },
  { keyWord: "ncniw", startPage: 3, pageNumber: 2, newKeyword: "7: FRIEND" },
  { keyWord: "gtlisj", startPage: 2, pageNumber: 8, newKeyword: "" },

    //team 6
  { keyWord: "qcwl", startPage: 1, pageNumber: 5, newKeyword: "2: HEAL" }, //start with PATH
  { keyWord: "igdp", startPage: 5, pageNumber: 6, newKeyword: "3: SAFE" },
  { keyWord: "tcii", startPage: 6, pageNumber: 7, newKeyword: "4: POWER" },
  { keyWord: "qqziw", startPage: 7, pageNumber: 3, newKeyword: "5: WATER" },
  { keyWord: "xcwiw", startPage: 3, pageNumber: 4, newKeyword: "6: MIGHT" },
  { keyWord: "nkjly", startPage: 4, pageNumber: 2, newKeyword: "7: GENTLE" },
  { keyWord: "hgqxqk", startPage: 2, pageNumber: 8, newKeyword: "" },

    //team 7
  { keyWord: "gkqh", startPage: 1, pageNumber: 6, newKeyword: "2: SEEK" }, //start with FIND
  { keyWord: "tgho", startPage: 6, pageNumber: 5, newKeyword: "3: WISE" },
  { keyWord: "xkvi", startPage: 5, pageNumber: 7, newKeyword: "4: FIRST" },
  { keyWord: "gkuwy", startPage: 7, pageNumber: 2, newKeyword: "5: KNOCK" },
  { keyWord: "lprgp", startPage: 2, pageNumber: 3, newKeyword: "6: NOBLE" },
  { keyWord: "oqepj", startPage: 3, pageNumber: 4, newKeyword: "7: HUMBLE" },
  { keyWord: "iwpfqk", startPage: 4, pageNumber: 8, newKeyword: "" },

   //team 8
  { keyWord: "iqo}", startPage: 1, pageNumber: 6, newKeyword: "2: PRAY" }, //start with HOLY
  { keyWord: "qtd}", startPage: 6, pageNumber: 7, newKeyword: "3: CALM" },
  { keyWord: "dcoq", startPage: 7, pageNumber: 5, newKeyword: "4: GLORY" },
  { keyWord: "hnrv~", startPage: 5, pageNumber: 3, newKeyword: "5: KNEEL" },
  { keyWord: "lphiq", startPage: 3, pageNumber: 2, newKeyword: "6: PEACE" },
  { keyWord: "qgdgj", startPage: 2, pageNumber: 4, newKeyword: "7: STRONG" },
  { keyWord: "tvussm", startPage: 4, pageNumber: 8, newKeyword: "" }
];
    

function convertWord(inputWord) {
            let newWord = "";

            for (let i = 0; i < inputWord.length; i++) {
                let character = inputWord[i];
                let asciiCode = character.charCodeAt(0);
                let newCharacter = String.fromCharCode(asciiCode + i + 1);

                newWord += newCharacter;

            }
    return newWord;
    }


function findNextPage(keyword,startPage) {
    return pages.find(page => page.keyWord === keyword && page.startPage === startPage);
}

function findNextWord(keyword,currentPage) {
    return pages.find(page => page.keyWord === keyword && page.pageNumber === currentPage);
}

