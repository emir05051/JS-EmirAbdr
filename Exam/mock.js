const Cities = [
  "Liugong",
  "Néa_Ionía",
  "Iguatu",
  "Sangoleng",
  "Ptení",
  "Liangshan",
  "Mazongling",
  "Xiangyang",
  "El_Paso",
  "Rio_Claro",
  "Conchal",
  "North_Little_Rock",
  "Orléans",
  "San_Nicolas",
  "Hehu",
  "Shengci",
  "Dayuan",
  "Sattahip",
  "Białobrzegi",
  "Unaizah",
  "Buenavista",
  "Adamantina",
  "Trzebieszów",
  "Dongxiang",
  "Ilandža",
  "Bua_Yai",
  "Erdaojiang",
  "Skanör",
  "Severo-Zadonsk",
  "Lincheng",
  "Kostomuksha",
  "Pivijay",
  "Taunan",
  "Huanggang",
  "Mboto",
  "Log",
  "Daliyuan",
  "Pondokwungu",
  "San_Mateo",
  "North_Little_Rock",
  "Baishi",
  "Mancos",
  "Ageoshimo",
  "Rancabolang",
  "Lyozna",
  "Khairpur",
  "Tomaszów_Mazowiecki",
  "Vecpiebalga",
  "Pundong",
  "Bulawayo",
  "Mauraro",
  "Kuvshinovo",
  "Basail",
  "Santo_Amaro",
  "Erétria",
  "Takeo",
  "Musawa",
  "Kiruna",
  "Malysheva",
  "Metulla",
  "Chongqing",
  "København",
  "Drahichyn",
  "Calape",
  "Santisimo_Rosario",
  "Yima",
  "Zainsk",
  "Bandhagen",
  "Benzilan",
  "Mahendranagar",
  "Manta",
  "Krueng_Luak",
  "Savelugu",
  "Fatumnasi",
  "Kitsuki",
  "Valky",
  "Yanaul",
  "Mohoro",
  "Fenglin",
  "Cluses",
  "Turośń_Kościelna",
  "San_Antonio_Ilotenango",
  "Kawahmanuk",
  "Utsunomiya-shi",
  "Vasilikón",
  "Nikol’sk",
  "Temeke",
  "Le_Mans",
  "Nelazskoye",
  "Etinan",
  "Cangshan",
  "Vilémov",
  "Kolirerek",
  "Dongguang",
  "Dongming",
  "Safakulevo",
  "Vyatskiye_Polyany",
  "Toksovo",
  "Gandajika",
  "Cakran",
  "Zvečan",
  "Filabusi",
  "La_Reforma",
  "Luleå",
  "Sebasang",
  "Boncis",
  "Pasirhaur",
  "Ningtang",
  "Tembang",
  "Cleveland",
  "Naḥf",
  "Notre-Dame-des-Prairies",
  "Mehtar_Lām",
  "Peña_Blanca",
  "Kalangsari",
  "Jimusa’er",
  "Mulhouse",
  "Levandeira",
  "Chornomors’ke",
  "Malino",
  "Liuhuang",
  "Sangba",
  "Xinglong",
  "Ibotirama",
  "Palagao_Norte",
  "Siqian",
  "Da’an",
  "Quận_Tân_Phú",
  "Serra_da_Boa_Viagem",
  "Karangcombong",
  "Uścimów_Stary",
  "Anju",
  "Chaniá",
  "Shimen",
  "Millet",
  "Pustá_Polom",
  "Atimonan",
  "Turze_Pole",
  "Waepau",
  "Ximafang",
  "Huiwen",
  "Sukahening",
  "Youngstown",
  "San_Lorenzo",
  "Bogorame",
  "Dallas",
  "Embalse",
  "Al_Ghuwayrīyah",
  "Senlis",
  "Piripiri",
  "Sindangkopo",
  "Nizhyn",
  "Mělník",
  "Chengxiang",
  "Zharrëz",
  "Sabang",
  "Týnec",
  "Manjakandriana",
  "Khrystynivka",
  "Mezinovskiy",
  "Vyatskiye_Polyany",
  "Hadyach",
  "Kratovo",
  "Lhari",
  "Halong",
  "Joaquín_Suárez",
  "Dingzhai",
  "Mainri",
  "Kyaiklat",
  "Jieshi",
  "Hōjō",
  "Arţās",
  "Groningen",
  "Kallithéa",
  "Barberton",
  "Murmansk",
  "Stockholm",
  "Nova_Iguaçu",
  "Barice",
  "Calçada",
  "Dongobesh",
  "Visoko",
  "Zhiletovo",
  "Buenavista",
  "Neyvo-Rudyanka",
  "Quốc_Oai",
  "Melbourne",
  "Yidao",
  "Lagos_da_Beira",
  "Eira_da_Pedra",
  "Paracuru",
  "Javhlant",
  "As_Samawah",
  "Erechim",
  "Changshan",
  "Chengbei",
  "Kiarajangkung",
  "Myrzakent",
  "Além_Paraíba",
  "Karlstad",
  "Szczawnica",
  "Hexi",
  "Gävle",
  "Idtig",
  "Sanjia",
  "Jinping",
  "Višňové",
  "San_Diego",
  "Huangmei",
  "Tegalalang",
  "Bombon",
  "Bethel_Town",
  "Shtip",
  "Gujō",
  "Mikstat",
  "Dąbrowa",
  "Annecy",
  "Machalí",
  "Tsaghkunk’",
  "Jintan",
  "Sungaibengkal",
  "Ylöjärvi",
  "Lapuz",
  "Tân_Hòa",
  "San_Agustín",
  "Krajan",
  "São_Roque",
  "Lyaskovets",
  "Vysoké_nad_Jizerou",
  "Songkan",
  "Fengqiao",
  "Kalapagada",
  "Mỹ_Tho",
  "Sacramento",
  "Niort",
  "Guadalupe",
  "Frankfurt_am_Main",
  "Sevilla",
  "Det_Udom",
  "Bayanhongor",
  "Laibin",
  "Fāqūs",
  "Mostovskoy",
  "Solţānābād",
  "Hongxing",
  "Sudislavl’",
  "Batur_Kidul",
  "Itaqui",
  "Reno",
  "Vřesina",
  "Bato",
  "Huerta_Grande",
  "Chrastava",
  "Semënovskoye",
  "Pilpichaca",
  "Nakamura",
  "Okayama-shi",
  "Qiryat_Yam",
  "Fujiayan",
  "Nine",
  "Tambawel",
  "Nyamanari",
  "Baojia",
  "Panevėžys",
  "Tirhanimîne",
  "Sumberpandan",
  "Uppsala",
  "Mamoudzou",
  "Tallahassee",
  "Estacion",
  "Regimin",
  "Koltushi",
  "Seria",
  "Tullamore",
  "Sollefteå",
  "San_Bautista",
  "Osvaldo_Cruz",
  "Oke_Iho",
  "Cabinda",
  "Krajan",
  "Shanjiang",
  "Bongsri",
  "Nanyuan",
  "Metlika",
  "Rueil-Malmaison",
  "Trelleborg",
  "Yujiawu",
  "Akim_Swedru",
  "Mehendiganj",
  "Ore",
  "Daveluyville",
  "Montería",
  "Kax",
  "Chenfang",
  "Redon",
  "Griboyedov",
  "Rosaspata",
  "Partesh",
  "Motygino",
  "Monteiro",
  "Salamina",
  "Blaye",
  "Mpigi",
  "Villa_del_Rosario",
  "Novotitarovskaya",
  "Arcachon",
  "Takaka",
  "Huangfang",
  "Cisaat",
  "Fangjun",
  "Toulouse",
  "Puteran_Kidul",
  "Novouzensk",
  "Nanjiao",
  "Machov",
  "Muting",
  "São_Lourenço_do_Sul",
  "Kornyn",
  "Piedra_Blanca",
  "Bằng_Lũng",
  "Przodkowo",
  "Quimper",
  "Melaka",
  "Kalidawe",
  "Liuzhuang",
  "Pital",
  "Umeå",
  "Almeria",
  "Kawangkoan",
  "Cipanjang",
  "Milicz",
  "Rybnoye",
  "Dingle",
  "Durham",
  "Sobienie_Jeziory",
  "Zhuoshui",
  "Viga",
  "Yampil’",
  "Baltimore",
  "Núi_Đối",
  "Guanchi",
  "Yitulihe",
  "Nîmes",
  "Montigny-lès-Metz",
  "Bamnet_Narong",
  "Daminggong",
  "Joubb_Jannîne",
  "Ad_Dimnah",
  "Monguno",
  "Banjar_Danginsema",
  "Banjar_Bau_Kawan",
  "Langob",
  "Sergiyev_Posad",
  "Oslo",
  "Jiaoqi",
  "Kluki",
  "Bretaña",
  "Mendefera",
  "Hradec_Králové",
  "Stockholm",
  "Ýpsonas",
  "Muara_Sabak",
  "Kwangyang",
  "Changdai",
  "Tomice",
  "Rama",
  "Nanzhen",
  "Cavan",
  "Jiekeng",
  "San_Agustin",
  "Cikarang",
  "Langob",
  "Lanchyn",
  "Waishan",
  "Date",
  "Tokyo",
  "Gualmatán",
  "Göteborg",
  "Bayan_Bulag",
  "Obninsk",
  "Boleiros",
  "Mīrābād",
  "Santa_Luzia",
  "Niandou",
  "Uitiuhtuan",
  "Paris_19",
  "Hengxianhe",
  "Nyima",
  "Donghai",
  "Aix-en-Provence",
  "Chivor",
  "Ternopil’",
  "Ishkhoy-Yurt",
  "Vlissingen",
  "Dolores",
  "Nieszawa",
  "Nanzhao",
  "Centurion",
  "Sibulan",
  "Anzihao",
  "Huocheng",
  "Linköping",
  "San_Bernardino",
  "Algoz",
  "Piña",
  "Orléans",
  "Glasnevin",
  "Calango",
  "Bei’an",
  "Łyse",
  "Tân_Châu",
  "Guararé",
  "Antsohimbondrona",
  "Zebrzydowice",
  "Caobi",
  "Tarko-Sale",
  "Gò_Dầu",
  "Pandakan",
  "Gunung_Timur",
  "Shuangjing",
  "Đoan_Hùng",
  "Babak",
  "Żabnica",
  "Wielgie",
  "Göteborg",
  "Krzczonów",
  "Palma_Gil",
  "Xiangshui",
  "Campo_Largo",
  "Wringinsari",
  "Fenais_da_Ajuda",
  "Capela",
  "Corinto",
  "Chicago",
  "Dongxi",
  "Belén",
  "Lubenec",
  "Yanzhou",
  "Tinta",
  "Farriar",
  "Roriz",
  "Aubenas",
  "Ágios_Pétros",
  "Nahrīn",
  "Golynki",
  "Azinhal",
  "Nkove",
  "Omu_Aran",
  "Łękawica",
  "Chahannao",
  "Longtang",
  "Yuanlin",
  "Nioki",
  "Nacala",
  "Qingyang",
  "Pizhma",
  "Queluz",
  "Glencoe",
  "Masatepe",
  "Lárdos",
  "Meilisi",
  "Baisha",
  "Rakiv_Lis",
  "Jia’an",
  "Santo_Domingo",
  "Quelimane",
  "San_Isidro",
  "Tuymazy",
  "Xin’an",
  "Nunutba",
  "Humen",
  "Kungsbacka",
  "Dongxi",
  "Jingkou",
  "Valeirinha",
  "Helong",
  "Gorjani",
  "Yang_Chum_Noi",
  "Mingguang",
  "Fort_Pierce",
  "Zhenxi",
  "Pnikut",
  "Bunisari",
  "Jinshanpu",
  "Pines",
  "Fada_N'gourma",
  "Jinhaihu",
  "Guanjiabao",
  "Buenavista",
  "Bigaa",
  "Shënmëri",
  "Kajisara",
  "Ruixi",
  "Haenam",
  "Amaigbo",
  "Bajo_Naranjillo",
  "North_Battleford",
  "Laojie",
  "Tayginka",
  "Lyubashivka",
  "Tampekan",
  "Cabagan",
  "Czchów",
  "Tanjung_Pandan",
  "Barengkok",
  "Hai_Riêng",
  "Shāhdādkot",
  "Muliang",
  "Pedaringan",
  "Poli",
  "Sutukoba",
  "Dado",
  "Sosnovoborsk",
  "São_Pedro",
  "Áno_Kalentíni",
  "Taekas",
  "Galūgāh",
  "Montréal",
  "Blinsung",
  "Severka",
  "Margasari",
  "Serov",
  "Breda",
  "Karlobag",
  "Stord",
  "Wissous",
  "Pasacao",
  "København",
  "Janaúba",
  "Bancroft",
  "Várzea",
  "Meiyao",
  "Dijon",
  "Miyata",
  "Rayevskaya",
  "Port-à-Piment",
  "Targowisko",
  "Sarāvān",
  "Lillehammer",
  "San_Pedro",
  "Balogo",
  "Kalinovo",
  "Komiža",
  "Strawberry_Hills",
  "San_Manuel",
  "Sơn_Trà",
  "Juhaynah",
  "Vientiane",
  "Hovorany",
  "Shihuiqiao",
  "Trostyanets’",
  "Lappeenranta",
  "Pinggirsari",
  "Alcalá",
  "Wyszogród",
  "Cardal",
  "Yambio",
  "Banzhong",
  "Rizó",
  "Jāndiāla_Sher_Khān",
  "Wonokerto",
  "Akzhal",
  "Íasmos",
  "Sujiatuo",
  "Warungtanjung",
  "Armen",
  "Cibunar",
  "Sant_Cugat_Del_Valles",
  "Roma",
  "Malé_Svatoňovice",
  "Yinxi",
  "Punggurharjo",
  "Bremen",
  "Puerto_Eldorado",
  "Kalmunai",
  "Jesús_María",
  "Dardhas",
  "Przewóz",
  "Villa_Urquiza",
  "Putat_Lor",
  "Quesada",
  "Šardice",
  "San_Isidro",
  "Bindang",
  "Riolândia",
  "Anyar",
  "Yezhou",
  "Vannes",
  "Azenhas_do_Mar",
  "Monte_Santo_de_Minas",
  "Rybnaya_Sloboda",
  "Duyên_Hải",
  "Ołpiny",
  "Tajan",
  "Chengyue",
  "Changhe",
  "Miribanteng",
  "Vila_Franca_da_Beira",
  "Vailoatai",
  "El_Parco_District",
  "Aeka",
  "Huruta",
  "Luci",
  "Bayanan",
  "Natividade",
  "Beddeng",
  "Alvarães",
  "Dongtuan",
  "Lopez_Jaena",
  "Hongyi",
  "Biao",
  "Évry",
  "Baroh",
  "Khūgyāṉī",
  "Geoktschai",
  "Babakankadu",
  "Meia_Via",
  "Matamey",
  "Bayan_Qagan",
  "Saint_Hubert",
  "Meixi",
  "Longxing",
  "Zall-Herr",
  "Tiebiancheng",
  "Delanggu",
  "Gierałtowice",
  "Changning",
  "Augustów",
  "Novopavlovsk",
  "Ayapa",
  "Parque_Industrial",
  "Dvin",
  "Colcabamba",
  "Tai_Po",
  "Mikołów",
  "Sundawenang",
  "Çobansığnaq",
  "Eindhoven",
  "Lethem",
  "Solânea",
  "København",
  "Fos-sur-Mer",
  "Dulian",
  "Rostokino",
  "Can-Avid",
  "Tsaratanana",
  "Bonak",
  "Petaling_Jaya",
  "Villejuif",
  "Qingshui",
  "Sovetskaya",
  "Gobabis",
  "Kawage",
  "Milicz",
  "Obiaruku_Quarters",
  "Aegela",
  "Issoire",
  "Yazd",
  "Charlotte",
  "Ipoh",
  "Caldas_da_Rainha",
  "Neuville",
  "Medovene",
  "Kukoboy",
  "Phitsanulok",
  "Mammari",
  "Gressier",
  "Kirovsk",
  "Caikouji",
  "Sananrejo",
  "Gowurdak",
  "Ar_Ramthā",
  "Västerås",
  "Laiyuan",
  "Motala",
  "Bhalwāl",
  "Grzmiąca",
  "Yaguaraparo",
  "Szamotuły",
  "Bobrovka",
  "Pergan",
  "Ketampak",
  "Lazaro_Cardenas",
  "Francisco_J_Mujica",
  "Moyamba",
  "Mamoudzou",
  "Pedro_García",
  "Sulang_Tengah",
  "Jovellar",
  "Bonak",
  "Verkhniy_Mamon",
  "Checca",
  "Verkhnyaya_Khava",
  "San_Antonio_Suchitepéquez",
  "Concepción_de_Ataco",
  "Palanit",
  "Yylanly",
  "Petrópolis",
  "Shymkent",
  "Cipatat",
  "Melaka",
  "Wangliao",
  "Turangi",
  "Karangsari",
  "Karanganyar",
  "Jataí",
  "Paris_10",
  "Kaliuda",
  "København",
  "Nangan",
  "Sete_Cidades",
  "Magisterial",
  "Borås",
  "Portalegre",
  "Kingsey_Falls",
  "Fontaínhas",
  "Novyy_Urgal",
  "Donghe",
  "Hantara",
  "Petäjävesi",
  "Kinnegad",
  "Strabychovo",
  "Leeuwarden",
  "Maubara",
  "Orléans",
  "Shingū",
  "Nato",
  "Charlemagne",
  "Murcia",
  "Midlands",
  "Pułtusk",
  "Ashcroft",
  "Shanghe",
  "Londres",
  "Wonokerto",
  "Roubaix",
  "Kostanay",
  "Usol’ye",
  "Huashan",
  "Dampol",
  "Chortkiv",
  "Morohongō",
  "El_Potrero",
  "Colcabamba",
  "Padang",
  "Penghua",
  "Prabuty",
  "Zasip",
  "Melaka",
  "Libon",
  "Hejiaping",
  "Ljupina",
  "Novomyshastovskaya",
  "Fort_Macleod",
  "Zernograd",
  "Šentjur",
  "Babakanbungur",
  "Paso_de_los_Libres",
  "San_Marcos",
  "Masis",
  "Citeguh",
  "Templeogue",
  "Qingshui",
  "Patrang",
  "Norrköping",
  "Portland",
  "Candi_Prambanan",
  "Cill_Airne",
  "Mobile",
  "Arivonimamo",
  "Beiyang",
  "Darwin",
  "Cururupu",
  "Al_Qarārah",
  "Santo_Tomas",
  "Lizhai",
  "Holma",
  "Baixi",
  "Jinghai",
  "Ostružnica",
  "Mijiang",
  "Allada",
  "Charlotte",
  "Mutum_Biyu",
  "El_Cantón",
  "Ouyang",
  "Mesiméri",
  "Carmen_de_Viboral",
  "Citeureup",
  "Villavicencio",
  "Aeka",
  "Zhenxing",
  "Banakaja",
  "Buliran_Segundo",
  "Besançon",
  "Macieira_de_Rates",
  "Birendranagar",
  "Jiuzhou",
  "Jiamaying",
  "Kotayk’",
  "Ålesund",
  "Gnieżdżewo",
  "Akwanga",
  "Qionghu",
  "Arnhem",
  "Haliut",
  "Al_Qanāwiş",
  "Shangcun",
  "Huashan",
  "Luxi",
  "Gózd",
  "Mao’ershan",
  "Baolong",
  "Gävle",
  "Manizales",
  "Pierreville",
  "Jiangqiao",
  "Salgueiro",
  "Hamhŭng",
  "Puor",
  "Brea_Pozo",
  "Farīdpur",
  "Koźmin_Wielkopolski",
  "Andapa",
  "Kotabaru",
  "Cova_Figueira",
  "La_Peña",
  "Brzeg_Dolny",
  "Chinchero",
  "Dallas",
  "Doumen",
  "Arvidsjaur",
  "Jatiklampok",
  "Golomunta",
  "Khagrachhari",
  "Air_Bangis",
  "Gōtsuchō",
  "Medenychi",
  "Pulo",
  "Garang",
  "Phayao",
  "Liulang",
  "Vicuña_Mackenna",
  "Qasr_Abu_Hadi",
  "Elato",
  "Seversk",
  "Kaset_Sombun",
  "Qianzhou",
  "Žacléř",
  "Ma‘arrat_an_Nu‘mān",
  "Tanrake_Village",
  "Mīr_Bachah_Kōṯ",
  "Tonggakjati",
  "Mazha",
  "Neiguan",
  "Sinfra",
  "Patong",
  "Mâcon",
  "Przybiernów",
  "Cikarang",
  "Yashikera",
  "Huangliu",
  "Vista_Hermosa",
  "Balucawi",
  "Carlos_Tejedor",
  "Sipirok",
  "Villa_La_Angostura",
  "Villejuif",
  "Tuhe",
  "Dresden",
  "Honglu",
  "Sabana_de_Parra",
  "Pamarayan",
  "Sīdī_Sālim",
  "Pindorama",
  "Puerto_Quellón",
  "Mitsuke",
  "Měcholupy",
  "Zamora",
  "Jequitinhonha",
  "Bibiani",
  "Semerak",
  "Laweueng",
  "San_Angelo",
  "Ma’an",
  "Xunjian",
  "Ardabīl",
  "Kermānshāh",
  "Jubb_Ramlah",
  "Dededo_Village",
  "Des_Moines",
  "Punta_Gorda",
  "San_Vicente",
  "Al_Khawkhah",
  "Velykyy_Klyuchiv",
  "Maubin",
  "Anār_Darah",
  "Vila_Flor",
  "Sydney",
  "Netanya",
  "Tambawel",
  "Sabanalarga",
  "Ma’an",
  "Mundybash",
  "Sölvesborg",
  "Zhouhu",
  "Sartana",
  "Kaduengang",
  "Đạ_Tẻh",
  "Zharkent",
  "Hejiang",
  "Chanuman",
  "Charopó",
  "Martakert",
  "Casalinho",
  "Sindangkerta",
  "Lang_Suan",
  "Mafinga",
  "Naranjal",
  "Stronie",
  "Tangzi",
  "Bayt_‘Awwā",
  "Créteil",
  "Oslo",
  "Touba",
  "Lashkar_Gāh",
  "Peskovka",
  "Sabugo",
  "Yarang",
  "Domalanoan",
  "Novopokrovka",
  "Karangpapak",
  "Krasnyy_Oktyabr’",
  "Jāndiāla_Sher_Khān",
  "Sindang",
  "Qızılhacılı",
  "Guaíba",
  "San_José_de_Miranda",
  "Japerejo",
  "Kadubamban",
  "Karangtengah",
  "Granica",
  "Vihāri",
  "Oslo",
  "Qaraçuxur",
  "Dole",
  "Salt_Lake_City",
  "Nivnice",
  "Kisai",
  "Shaoyang",
  "Bistrica_ob_Sotli",
  "Ishinomaki",
  "Chãos",
  "Taldyqorghan",
  "Kokkinóchoma",
  "Balangpule",
  "Minusinsk",
  "Catabola",
  "Dayr_Sharaf",
  "Kamyanyets",
  "Bitin",
  "Mönchengladbach",
  "Opatovice_nad_Labem",
  "Wanshan",
  "Zhenshan",
  "Longshan",
  "Orenburg",
  "San_Roque",
  "Puerto_Berrío",
  "Las_Ánimas",
  "Cochadas",
  "Padre_Paraíso",
  "Arasji",
  "Yunxi",
  "Salt_Lake_City",
  "Mandalasari",
  "Desa_Gegempalan",
  "Tigbao",
  "Kamiichi",
  "Xiaojiezi",
  "Aurora",
  "München",
  "Wuyahe",
  "Ibiporã",
  "Daqian",
  "San_Isidro",
  "La_Talaudière",
  "Matarraque",
  "Cibeureum",
  "Tutup",
  "Zhencheng",
  "Juuka",
  "Belūsovka",
  "Zapala",
  "Gävle",
  "Majagual",
  "Shimen",
  "Bancar",
  "Oxelösund",
  "Neya",
];

const mockName = (i) => Cities[randomInt(0, Cities.length)];

const mockCity = (i) => {
  const name = mockName(i);

  return new City(name);
};

const mockCities = createArray(mockCity);
