export const getters = {
    getAlgaByType: (state) => (type) => {
        return state.algas.filter(alga => { return alga.ficha.type == type })
    },
    /** Returns a single alga, instead of a list */
    getAlgaByPath: (state) => (path) => {
        return state.algas.filter(alga => { return alga.path == path })[0]
    }
}

/**
 * herbos is GEOJSON
 */
export const state = () => ({
    algas: [
        {
            id: 1,
            herbos: {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: {
                            date: "10 de Noviembre 1999",
                            img: "/herbos/carola/1.png",
                            description:
                            "<strong>Fecha de recolección:</strong><p>10 de Noviembre 1999</p> <img src=/herbos/carola/1.png/>",
                        },
                        geometry: {
                            type: "Point",
                            coordinates: [-71.882645, -33.963561],
                        },
                    },
                    {
                        type: "Feature",
                        properties: {
                            date: "10 de Noviembre 1999",
                            img: "/herbos/carola/2.png",
                            description:
                                "<strong>Fecha de recolección:</strong><p>10 de Noviembre 1999</p> <img src=/herbos/carola/1.png/>",
                        },
                        geometry: {
                            type: "Point",
                            coordinates: [-71.88389, -33.965875],
                        },
                    },
                ],
            },
            model: {
                path: "/models/carola/carola.glb",
                scale: 1,
                xOffset: 0,
                yOffset: 0,
                zOffset: 0
            },
            thumb: "/thumbs/carola.png",
            path: "carola",
            ficha: {
                nombres: ["Carola"],
                especie: "Callophyllis variegata",
                type: "roja",
                abreviatura: "",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Plantae"
                        },
                        {
                            nombre: "División",
                            data: "Rhodophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Florideophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Gigartinales"
                        },
                        {
                            nombre: "Familia",
                            data: "Kallymeniaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Callophyllis"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Distribución",
                        data: "Especie endémica del Pacífico de Sudamérica, se distribuye a lo largo de toda la costa chilena."
                    },
                    {
                        nombre: "Morfología",
                        data: "Esta especie se encuentra formada por grupos de frondas originadas desde un pequeño disco que se adhiere al sustrato rocoso. Las frondas presentan un color rojo oscuro intenso y su consistencia puede ser muy fina y membranosa hasta cartilaginosa. Son planas y ramificadas, de manera irregularmente dicótoma y con sus bordes dentados en algunas ocasiones. Las algas pueden llegar a medir 30-40 cm de largo."
                    },
                    {
                        nombre: "Cualidades",
                        data: "Esta especie ha llegado a ser el alga chilena que ha alcanzado un mayor valor de mercado, siendo exportada fresca o seca para ser utilizada como alimento humano en países asiáticos."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "Alcanza hasta los 4m de longitud."
                    },
                    {
                        nombre: "Cualidades",
                        data: "Cuenta con más de un 23% de proteínas, con un excelente perfil de aminoácidos. Además, es rica en calcio (incluso más que el cochayuyo), magnesio, hierro y vitaminas A y E."
                    },
                    {
                        nombre: "Características",
                        data: "Se encuentra en pequeñas poblaciones asociadas a bosques de huiros en ambientes submareales, adheridas a rocas y conchas. Esta especie es esporádicamente recolectada, procesada y comercializada en el mercado de alimento humano."
                    },
                ]
            }
        },
        {
            id: 2,
            model: {
                path: "/models/chicorea/chicorea.glb",
                scale: 1,
                xOffset: 0,
                yOffset: 0,
                zOffset: 0
            },
            thumb: "/thumbs/chicorea.png",
            path: "chicoria-de-mar",
            ficha: {
                nombres: ["Chicoria de mar", "Yuyo"],
                especie: "Chondracanthus chamissoi",
                type: "roja",
                abreviatura: "",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Plantae"
                        },
                        {
                            nombre: "División",
                            data: "Rhodophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Florideophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Gigartinales"
                        },
                        {
                            nombre: "Familia",
                            data: "Gigartinaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Chondracanthus"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Distribución geográfica",
                        data: "En Sudamérica esta especie se distribuye desde Paita (Perú) hasta Ancud (Chile), siendo hasta hace poco considerada como endémica del Pacífico Sur."
                    },
                    {
                        nombre: "Morfología",
                        data: "Un atributo muy característico de esta especie es su alta variabilidad morfológica encontrándose dos principales grupos las lessonii la cual es más representativa de la zona norte del país, presentando talos delgados de 5 mm de ancho, y hasta 50cm de largo, con un talo cilíndrico en su parte inferior el cual luego se hace plano y genera ramificaciones largas. En cambio, los talos de tipo chauvinii se caracterizan por tener frondas de un mayor ancho de 3 a 4 cm, fronda membranosa, plana, de hasta 70 cm de altura, de color verde a pardo rojizo."
                    },
                    {
                        nombre: "Cualidades",
                        data: "La importancia comercial de C. chamissoi ha estado ligada al mercado de los carragenanos, siendo cosechada intensamente desde bancos naturales de la III, IV, VIII y X regiones de Chile. Sin embargo, el volumen una caída abrupta en la biomasa desembarcada se ha observado en la última década, a pesar que su precio de exportación puede alcanzar altos valores en el mercado del consumo humano, sobre todo en países de Asia."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "Contiene minerales como el sodio, calcio, potasio, cloro, fósforo, yodo, hierro, zinc; y son fuente primaria de yodo, indispensable para el buen funcionamiento de la tiroides."
                    },
                    {
                        nombre: "Beneficios",
                        data: "Desde esta alga se extrae la carragenina, la cual es usada en la industria alimentaria como un aditivo. Sirve como emulsionante, estabilizante o espesante de alimentos. En chicoria de mar se extrae diferentes fracciones de esta goma; κ-carragenano, λcarragenano, ι-carragenano y μ-carragenano, las cuales poseen diferentes usos y propiedades: antivirales, antilipogénicas e hipolipemiantes."
                    },
                    {
                        nombre: "Características",
                        data: "Chondracanthus chamissoi es un alga encontrada en pozas del intermareal medio hasta una profundidad de 15 m, específicamente asociada a sustratos rocosos."
                    },
                ]
            }
        },
        {
            id: 3,
            model: {
                path: "/models/luche/luche.glb",
                scale: 1,
                xOffset: 0,
                yOffset: 0,
                zOffset: 0
            },
            thumb: "/thumbs/luche.png",
            path: "luche",
            ficha: {
                nombres: ["Luche"],
                especie: "Pyropia",
                type: "roja",
                abreviatura: "spp",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Plantae"
                        },
                        {
                            nombre: "División",
                            data: "Rhodophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Bangiophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Bangiales"
                        },
                        {
                            nombre: "Familia",
                            data: "Bangiaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Pyropia"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Características",
                        data: "Pyropia aparece en las costas rocosas del mundo, incluyendo algunas especies en los trópicos y en los polos. La mayor diversidad se puede encontrar en las regiones boreales o en zonas con clima frío a templado. Pyropia a soporta la desecación, por lo que puede vivir en las regiones más altas y secas de la zona intermareal. Las láminas de Pyropia pueden ser circulares o lineales y medir de unos cuantos centímetros a más de un metro. Su color también varía, de rosado en especies que viven enteramente sumergidas, hasta rojos, amarillos, cafés y verdes. Son morfológicamente muy variables, y el reconocimiento entre especies, así como la diferencia con otros géneros hermanos como Porphyra, es complejo a simple vista, siendo necesario el uso de técnicas especializadas."
                    },
                    {
                        nombre: "Distribución geográfica",
                        data: "Las especies de este género pueden estar distribuidas en toda Costa de Chile desde Arica hasta Magallanes."
                    },
                    {
                        nombre: "Morfología",
                        data: "Frondas laminares foliosas de color verde oliváceo a rojo, se adhiere al sustrato a través de un pequeño disco basal. El talo es variable en morfología, consistencia, textura y color. Su tamaño y forma es variable pudiendo llegar a las 30 cm de largo."
                    },
                    {
                        nombre: "Cualidades",
                        data: "El cultivo de algas tipo Pyropia comenzó en el siglo XVII en Japón, Corea y China, y se ha convertido en una de las industrias más importantes de las costas de aguas someras en estos países. Originalmente, el cultivo de estas algas (comercializadas como Nori) dependía de semillas naturales (conchosporas). Sin embargo, en 1949 Kathleen Drew Baker logró ccompletar sus estudios sobre el ciclo de vida de estas especies, comenzando la industrialización en la producción de Nori. El cultivo de nori se ha convertido en un sector acuícola próspero en China, la República de Corea y Japón. Además de estos productores tradicionales, el cultivo de Nori se ha expandido gradualmente a otros continentes, incluyendo África, América del Norte y Europa. Sin embargo en Chile aun no se ha implementado el cultivo de esta especie, y su recolección en diferentes partes del país sigue siendo manual."
                    },
                    {
                        nombre: "Beneficios",
                        data: "Pyropia, conocida también como nori, es el recurso algal más rentable a nivel mundial, en nuestro país se utiliza para consumo humano, bajo el nombre de luche, las frondas pueden comercializarse frescas o cocidas."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "Sus principales propiedades nutricionales son su alto contenido de yodo, proteínas, fibra dietética, minerales y vitaminas, como también alta presencia de calcio, hierro, zinc, magnesio y fósforo. También presentan caroteniodes como luteína y zeaxantina. Estos compuestos son de gran interés comercial ya que se ha demostrado que su consumo produce beneficios considerables a la salud humana al funcionar como potentes antioxidantes."
                    },
                ]
            }
        },
        {
            id: 4,
            model: {
                path: "/models/luga-negra/luga-negra.glb",
                scale: 1,
                xOffset: 0,
                yOffset: 0,
                zOffset: 0
            },
            thumb: "/thumbs/luga.png",
            path: "luga-negra",
            ficha: {
                nombres: ["Luga negra", "Luga lija", "Luga crespa"],
                especie: "Sarcothalia crispata",
                type: "roja",
                abreviatura: "",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Plantae"
                        },
                        {
                            nombre: "División",
                            data: "Rhodophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Florideophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Gigartinales"
                        },
                        {
                            nombre: "Familia",
                            data: "Gigartinaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Sarcothalia"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Distribución",
                        data: "Esta especie es endémica de nuestro litoral, se distribuye en aguas templadas y frías, desde Valparaíso hasta el Estrecho de Magallanes."
                    },
                    {
                        nombre: "Características del hábitat",
                        data: "Esta alga se encuentra de preferencia en sustratos duros como rocas macizas o bolones expuestos en la zona intermareal baja y zona submareal. Son capaces de formar grandes praderas."
                    },
                    {
                        nombre: "Morfología",
                        data: "Presenta una fronda laminar, generalmente más largo que ancho y de forma orbicular, oval a lanceolada, de color marrón, pardo a pardo amarillento. Se adhiere al sustrato rocoso mediante un disco, a partir del cual se forma un corto estipe que da origen al talo laminar. La forma de la fronda puede cambiar notoriamente cuando maduran sus estructuras reproductivas y liberan sus esporas."
                    },
                    {
                        nombre: "Tamaño",
                        data: "El tamaño de las frondas puede fluctuar entre 20 - 80 cm, pero se han registrado tamaño de fronda de 1,5 a 2 m de longitud."
                    },
                    {
                        nombre: "Cualidades",
                        data: "La mayor actividad pesquera de este recurso se concentra entre la IX y la XII regiones. Esta se destina, casi en su totalidad, a la elaboración de carragenina, un polisacarido con características gelificantes y emulsionantes que tiene diversos usos industriales, tanto en el área de la química y farmacia, así como en la elaboración de alimentos."
                    },
                    {
                        nombre: "Características",
                        data: "Las praderas naturales de luga negra, muestran un comportamiento estacional, durante el verano se produce la máxima producción de biomasa, para luego llegar a niveles mínimos en otoño e invierno. Se ha intentado su cultivo en el sur del país."
                    },
                    {
                        nombre: "Beneficios",
                        data: "Esta alga es de gran importancia ecológica tanto en la zona intermareal como submareal en las praderas de luga negra podemos encontrar distintas especies asociadas de crustáceos, moluscos tales como equinodermos, poliquetos, entre otros. El talo de estas algas pueden llegar a tener un alto contenido de aminoácidos totales (48%), y son bajas en lípidos totales."
                    },
                ]
            }
        },
        {
            id: 5,
            model: {
                path: "/models/pelillo/pelillo.glb",
                scale: 1,
                xOffset: 0,
                yOffset: 0,
                zOffset: 0
            },
            thumb: "/thumbs/pelillo.png",
            path: "pelillo",
            ficha: {
                nombres: ["Pelillo"],
                especie: "Agarophyton chilense",
                type: "roja",
                abreviatura: "",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Plantae"
                        },
                        {
                            nombre: "División",
                            data: "Rhodophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Florideophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Gracilariales"
                        },
                        {
                            nombre: "Familia",
                            data: "Gracilariaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Agarophyton"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Características",
                        data: "El pelillo es un alga roja característica de las costas de Chile, que crece en fondos arenosos o fangosos en zonas marinas y estuarinas intermareales y submareales, hasta los 25 m de profundidad. Se caracteriza por formar praderas tupidas por lo que se considera zona de refugio para invertebrados y de desove para peces como el pejerrey."
                    },
                    {
                        nombre: "Distribución geográfica",
                        data: "Es posible encontrarla desde Atacama hasta Chiloé."
                    },
                    {
                        nombre: "Morfología",
                        data: "El talo es cilíndrico con uno o más ejes alargados que se ramifican de manera sucesiva, contraria e irregular de color rojo violáceo hasta el verde oscuro. Cuando presenta estructuras reproductivas en los talos diploides, los soros de tetrasporangios, son solo distinguibles bajo el microscopio, pero cuando los talos femeninos han sido fecundados y producen cistocarpos, son sobresalientes y evidentes a simple vista."
                    },
                    {
                        nombre: "Cualidades",
                        data: "Es una especie de alta importancia económica y social, siendo la única que es comercialmente cultivada en Chile, ya que es utilizada principalmente para la producción del agar-agar, el cual es empleado como aditivo gelificante en la industria alimenticia, farmacéutica y para investigación. En Chile la producción comercial se ha extendido por el norte desde la Región de Antofagasta, hasta la Región de los Lagos por el sur. Esta alga es comercializada como alga seca, o transformada en el país por plantas productoras de agar-agar y colagar para ser exportado con mayor valor agregado, a mas de 40 países, lo que transforma a Chile en uno de los mayores productores mundiales, destacando por su calidad. Los centros de cultivo y producción, en su mayoría se encuentran en la Región de los Lagos."
                    },
                    {
                        nombre: "Beneficios",
                        data: "La principal aplicación comercial de Agarophyton chilense lo constituye el agar-agar que es una goma vegetal, de la que se derivan una serie de productos usado en cosméticos, industria alimentaria y hasta en biomedicina. En diversas partes del mundo el pelillo se consume en formato fresco, conservado con sal y deshidratado, para su uso culinario como guarnición o tipo ensalada, además de su incorporación en todo tipo de comidas como croquetas, tortillas, salsas, caldos, licuados, etc."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "El pelillo es considerado como un alimento saludable, ya que aporta un alto contenido proteico y un bajo contenido graso. También presenta alto contenido de fibra dietética y polifenoles, ambos componentes beneficiosos para la salud. Otros componentes de esta alga son el Omega-3, ácido palmítico, oleíco y araquidónico. Esta noble alga chilena es alta en taurina con importantes propiedades a nivel celular como en la osmorregulación, inmunomodulación, estabilización de membrana, así como un rol muy importante en el desarrollo ocular y del sistema nervioso."
                    },
                ]
            }
        },
        {
            id: 6,
            model: {
                path: "/models/ulva/ulva.glb",
                scale: 1,
                xOffset: 0,
                yOffset: 0,
                zOffset: 0
            },
            thumb: "/thumbs/ulva.png",
            path: "ulva",
            ficha: {
                nombres: ["Lechuga de mar", "Lamilla"],
                especie: "Ulva",
                type: "verde",
                abreviatura: "spp",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Plantae"
                        },
                        {
                            nombre: "División",
                            data: "Chlorophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Ulvophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Ulvales"
                        },
                        {
                            nombre: "Familia",
                            data: "Ulvaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Ulva"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Características",
                        data: 'Las especies del género Ulva como en la mayoría de las especies de macroalgas, cumplen un rol fundamental en la mantención y equilibrio de los ecosistemas marinos costeros, sirviendo de alimento y refugio para otras especies. En algunos lugares con fuerte impacto de contaminación pueden crecer de forma abundante especialmente en primavera e inicio de verano, formando los llamados "blooms". Se encuentran abundantemente en ambientes intermareales y submareales rocosos.'
                    },
                    {
                        nombre: "Distribución geográfica",
                        data: "Crecen a lo largo de toda la costa de Chile continental desde Arica a Magallanes."
                    },
                    {
                        nombre: "Morfología",
                        data: "Talos laminariales de diferentes formas, desde talos redondeados como rosetas a lanceolados y acintados, márgenes lisos, ondulados y dentados. Algunos talos tubulares simples muy planos y otros constreñidos con numerosos lóbulos."
                    },
                    {
                        nombre: "Cualidades",
                        data: "Las especies del género Ulva se utilizan en la actualidad principalmente como fertilizante para la agricultura, no obstante, también se está utilizando en la industria farmacéutica en productos cosméticos y en el área gastronómica."
                    },
                    {
                        nombre: "Beneficios",
                        data: "Actualmente se ha demostrado que Ulva posee características de importancia en la medicina como antibacterianas, antifúngicas, antiinflamatorias, antivirales, antiprotozoarias y citotóxicas. Se ha convertido en un excelente candidato para estudiar su efecto como medicamento para enfermedades crónicas como la aterosclerosis, hipertensión, dificultad respiratoria aguda, asma, fibrosis pulmonar y cáncer. Entre otras aplicaciones que se le han atribuido se encuentra su utilización como fertilizante natural debido a su alto contenido de nitrógeno."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "Una porción de Ulva lactuca aporta aproximadamente 257 mg de calcio, similar al aporte de queso. En los minerales que posee se incluyen el yodo, hierro, zinc, cobre, selenio, molibdeno, flúor, manganeso, boro, níquel y cobalto. Se han encontrado altas cantidades de cobalamina o vitamina B12, que desempeña un papel importante en el mantenimiento de la homeostasis del cerebro y el sistema nervioso, así como en la formación de la sangre. La concentración en esta especie puede representar hasta el 33% de la masa seca de la planta. Nutricionalmente tiene 87 mg y 700 mg de calcio por cada porción de 100g. El contenido de carbohidratos puede llegara 58,1% de su peso. Tamaño del alga: El tamaño de las algas de este género es muy variables y puede ir desde pocos cm hasta varios metro (2 a 3 m) de longitud."
                    },
                ]
            }
        },
        {
            id: 7,
            model: {
                path: "/models/huiro-negro/huiro-negro.glb",
                scale: 0.08,
                xOffset: 0.5,
                yOffset: -0.9,
                zOffset: 0
            },
            thumb: "/thumbs/huiro_negro.png",
            path: "huiro-negro",
            ficha: {
                nombres: ["Chascón", "Huiro negro"],
                especie: "Lessonia berteroana",
                type: "parda",
                abreviatura: "",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Chromista"
                        },
                        {
                            nombre: "División",
                            data: "Ochrophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Phaeophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Laminariales"
                        },
                        {
                            nombre: "Familia",
                            data: "Lessoniaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Lessonia"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Distribución",
                        data: "Desde Perú central hasta Coquimbo"
                    },
                    {
                        nombre: "Características del hábitat",
                        data: "Se ubica en la zona intermareal, principalmente en los sectores rocosos expuestos, donde sus praderas forman un cinturón continuo, que puede tener un ancho que varía de 1 a 10 metros, sobre plataformas en la parte baja de las pendientes."
                    },
                    {
                        nombre: "Morfología",
                        data: "Es un alga de color negro o pardo oscuro, presenta un disco adhesivo, estipe y fronda. El disco adhesivo masivo le permite soportar el embate del oleaje en la costa, lo que le entrega una ventaja a esta especie y ser el organismo dominante en el intermareal bajo de la zona norte de Chile."
                    },
                    {
                        nombre: "Tamaño",
                        data: "Alcanza hasta los 4m de longitud."
                    },
                    {
                        nombre: "Cualidades",
                        data: "Lessonia berteroana es una de las algas que presentan una gran importancia ecológica y económica en Chile, principalmente debido a que participan como ingenieros de los ecosistemas costeros. Esto significa que al tener su disco adhesivo unido a las rocas, existen diferentes especies en estados de desarrollo temprano como larvas, juveniles y adultos de invertebrados como crustáceos, caracoles, gusanos y peces que lo utilizan como refugio ante los depredadores y como alimento."
                    },
                    {
                        nombre: "Características",
                        data: "Posee un disco adhesivo masivo que le permite adherirse al intermareal rocoso y ser una de las especies dominantes del sector. Es también la especie más explotada en el norte del país, sustrentando una pesqueria con una importancia social enorme para las comunidades litorales."
                    },
                    {
                        nombre: "Beneficios",
                        data: "Es un alga que es explotada para la extracción de alginato, una goma vegetal que es utilizada en todo el mundo en la industria farmacéutica, alimenticia y cosmética, debido a su poder gelificante y emulsionante. Actualmente, no es consumida como alimento humano en Chile."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "Al igual que otras especies de huiros, Lessonia berteroana presenta concentraciones importantes de minerales tales como sodio, potasio, calcio y magnesio. Y también un contenido importante de proteínas y fibra dietética."
                    },
                ]
            },
        },
        {
            id: 8,
            model: {
                path: "/models/huiro-flotador/huiro-flotador.glb",
                scale: 0.5,
                xOffset: 0.7,
                yOffset: -0.7,
                zOffset: 0
            },
            thumb: "/thumbs/huiro_flotador.png",
            path: "huiro-flotador",
            ficha: {
                nombres: ["Huiro flotador", "Canutillo", "Huiro"],
                especie: "Macrocystis pyrifera",
                type: "parda",
                abreviatura: "",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Chromista"
                        },
                        {
                            nombre: "División",
                            data: "Ochrophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Phaeophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Laminariales"
                        },
                        {
                            nombre: "Familia",
                            data: "Lessoniaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Macrocystis"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Características",
                        data: "Estos huiros son macroalgas pardas que deben su color característico a la presencia de un pigmento especial llamado fucoxantina. Forman poblaciones pequeñas, fragmentadas pero densas a lo largo de toda la costa del país, formando un ecosistema muy productivo y con gran biodiversidad . Estos bosques crecen desde el intermareal bajo hasta el submareal, y las algas pueden alcanzar grandes tamaños (sobre los 10m de longitud."
                    },
                    {
                        nombre: "Distribución",
                        data: "Se distribuye desde el extremo norte del país hasta Magallanes y Tierra del Fuego"
                    },
                    {
                        nombre: "Morfología",
                        data: "Esta especie posee una estructura morfológica que asemeja a una planta, donde un conjunto de estipes (tallos), crecen desde un disco de fijación que adhiere fuertemente el alga al sustrato rocoso. Desde los estipes crecen frondas (hojas) laminares muy abundantes. Debido a su gran tamaño y la necesidad de captar luz, estas algas han desarrollado unas estructuras llamadas *aerocisto* que se ubican en la base de las frondas, y permiten que estas floten captando luz."
                    },
                    {
                        nombre: "Beneficios",
                        data: "Macrocystis pyrifera se utiliza principalmente para la producción de ácido algínico. Este es utilizado como un agente espesante, gelificante, emulsificante, formador de películas para sustancias que se requieren en la industria textil, alimentación, papelera y farmacéutica. Por otro lado, es usado en la alimentación de organismos acuáticos mantenidos en cautiverio como el erizo de mar Loxechinus albus o el abalón,Haliotis rufescens."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "Desde el punto de vista nutricional, Macrocystis pyrifera es baja en calorías, con una alta concentración de minerales (Mg, Ca, P, K y I), vitaminas, proteínas, carbohidratos poco digestibles, fibra y bajo contenido en lípidos. Tiene un alto contenido de aminoácidos esenciales y altos valores relativos de ácidos grasos insaturados. Entre los aminoácidos esenciales que contiene se encuentran la alanina, leucina y lisina. Además, entre los no esenciales se encuentran algunos como el ácido glutámico, ácido aspártico, los que son considerados como una fuente de proteína complementaria. Los carbohidratos que se encuentran en esta alga pueden estar en forma de carbohidratos complejos o ficocoloides, los que se encuentran en grandes cantidades, alrededor del 40% del contenido total. Los ficocoloides se presentan en forma de gomas como alginatos, fucoidanos pueden ser del tipo polisacáridos sulfatados, glucuronoxiloglucan sulfatado en menor concentración y manitol. Dentro de sus funciones principales es la de retener agua y minerales en el alga para evitar la deshidratación. Las fibras contenidas se encuentra constituida por polisacáridos solubles lo que la diferencia de los que se encuentran en plantas vasculares o terrestres."
                    },
                    {
                        nombre: "Tamaño",
                        data: "Puede llegar a medir 50 mts. de largo."
                    },
                ]
            }
        },
        {
            id: 9,
            model: {
                path: "/models/cochayuyo/cochayuyo.glb",
                scale: 1,
                xOffset: 0,
                yOffset: 0,
                zOffset: 0
            },
            thumb: "/thumbs/cochayuyo.png",
            path: "cochayuyo",
            ficha: {
                nombres: ["Cochayuyo", "Coyofe"],
                especie: "Durvillaea incurvata",
                type: "parda",
                abreviatura: "",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Chromista"
                        },
                        {
                            nombre: "División",
                            data: "Ochrophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Phaeophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Fucales"
                        },
                        {
                            nombre: "Familia",
                            data: "Durvillaeaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Durvillaea"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Características",
                        data: "Se le conoce mayormente como “cochayuyo”, un término quechua que significa “nabo de mar”; de la misma lengua es otro de los nombres que recibe “cochahuasca” (soga de mar); en mapudungún esta alga es conocida como “collofe” (tintura parda). Su parte más apreciada por los consumidores es su *estipe* conocido como “huilte”, o “ulte”, y se trata del segmento del cuerpo que se extiende entre el disco con que ella se adhiere a la roca y las primeras ramas. A nivel ecológico, el cochayuyo es considerado una especie fundacional que es capaz de modificar el entorno en el que habita, generando nichos para otras especies, albergando una alta diversidad de organismos asociados a su cuerpo."
                    },
                    {
                        nombre: "Distribución",
                        data: "Endémica de Chile se distribuye desde Coquimbo hasta la isla Betecoi, siempre adherida a rocas en el intermareal bajo."
                    },
                    {
                        nombre: "Morfología",
                        data: "Es un alga grande, puede alcanzar hasta 15 m de largo, de color pardo verdoso o pardo amarillento, de superficie lisa y consistencia carnosa, que crece adherida a las rocas por un ancho disco de fijación. Las frondas se originan de un estipe redondo, corto; son laminares, gruesas y coriáceas, de 3 a 12 cm de ancho, se dividen en segmentos delgados, que forman látigos de distinta longitud."
                    },
                    {
                        nombre: "Cualidades",
                        data: "Su desembarque anual ha tenido un incrementado superior al 400%. Esta alga es exportada principalmente para la industria de alginatos. Actualmente, las regiones más importantes donde se recolecta cochayuyo son las VI, VIII y X."
                    },
                    {
                        nombre: "Beneficios",
                        data: "Durvillaea ha sido descrita como una importante especie estructuradora de comunidades, debido a su gran tamaño y a que sus estructuras de fijación, conforman un microhábitat para un gran número de especies de invertebrados."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "El cochayuyo posee importantes propiedades nutricionales, tales como una alta cantidad de fibra que alcanza los 47g por cada 100 gramos de alga. Otros de sus componentes es el ácido algínico que actúa como desintoxicante en el organismo y ayuda con la microbiota intestinal, también es de gran ayuda para favorecer la función hepática, proteger y desinflamar la mucosa digestiva, corregir el estreñimiento y, por su riqueza en mucílagos reduce la acidez gástrica y favorece la expectoración. Además posee diferentes minerales como magnesio, calcio, hierro, azufre y yodo. También contiene vitamina A, B1, B12, C, D, E y ácidos grasos Omega-3, que ayudan al funcionamiento del cerebro y fortalecen el organismo, que ayudan a prevenir enfermedades cardiovasculares. El cochayuyo regula la absorción de colesterol y glucosa, al mismo tiempo que genera una sensación de saciedad. Esto, junto al aporte de yodo, la hace muy recomendable para dietas para adelgazar. Se le reconocen propiedades en el cuidado de pelo, y uñas, ayudando también de manera complementaria a tratar problemas dermatológicos crónicos como el acné o la psoriasis."
                    },
                ]
            }
        },
        {
            id: 10,
            model: {
                path: "/models/huiro-palo/huiro-palo.glb",
                scale: 1,
                xOffset: 0,
                yOffset: 0,
                zOffset: 0
            },
            thumb: "/thumbs/huiro_palo.png",
            path: "huiro-palo",
            ficha: {
                nombres: ["Huiro palo"],
                especie: "Lessonia trabeculata",
                type: "parda",
                abreviatura: "",
                titulo: "Carácterísticas",
                tabla: {
                    titulo: "Clasificación",
                    data: [
                        {
                            nombre: "Reino",
                            data: "Chromista"
                        },
                        {
                            nombre: "División",
                            data: "Ochrophyta"
                        },
                        {
                            nombre: "Clase",
                            data: "Phaeophyceae"
                        },
                        {
                            nombre: "Orden",
                            data: "Laminariales"
                        },
                        {
                            nombre: "Familia",
                            data: "Lessoniaceae"
                        },
                        {
                            nombre: "Género",
                            data: "Lessonia"
                        },
                    ]
                },
                info: [
                    {
                        nombre: "Distribución",
                        data: "Endémica de la costa de Chile continental desde Arica hasta Chiloé."
                    },
                    {
                        nombre: "Características del hábitat",
                        data: "Forma bosques submareales sobre fondo rocoso que se extienden desde el límite inferior de la zona intermareal hasta unos 20 m de profundidad. Crecen habitualmente en lugares semi-expuestos a expuestos."
                    },
                    {
                        nombre: "Morfología",
                        data: "Son algas adheridas al sustrato mediante un disco macizo, irregular, de hasta 20 cm de alto. Los estipes son de número variable, gruesos, rígidos, ligeramente aplanados y se dividen dicotómicamente para terminar en una fronda. La fronda es una lámina de forma lineal o lanceolada, con márgenes lisos y dentados."
                    },
                    {
                        nombre: "Tamaño",
                        data: "Hasta 2,5 m de largo."
                    },
                    {
                        nombre: "Cualidades",
                        data: 'En el centro y norte de Chile la macroalga más abundante es el huiro palo, que se extrae de dos formas: la primera es mediante la recolección de orilla, técnica no destructiva que consiste en retirar las algas muertas que arrastra la marea; mientras que la segunda implica arrancar el alga viva completa, normalmente mediante buceo. Esta última técnica se denomina "barreteo". Las algas barreteadas pueden ser inmediatamente recolectadas, subiéndolas a un bote, o ser dejadas a la deriva hasta que varen y luego puedan ser recolectadas en la orilla.'
                    },
                    {
                        nombre: "Beneficios",
                        data: "Esta macroalga forma densos bosques submareales los que albergan una gran cantidad de organismos asociados, especialmente invertebrados que viven en sus discos de fijación. Por ello, esta especie es considerada una importante estructuradora de ecosistemas, diversos, complejos y muy importante para la mantención de la biodiversidad marina."
                    },
                    {
                        nombre: "Propiedades nutricionales",
                        data: "Esta especie posee importantes propiedades nutricionales que son utilizadas principalmente en la alimentación de abalones y erizos. Entre los compuestos que destacan se encuentran sodio, potasio, calcio, magnesio principalmente, además de proteínas y fibra. Actualmente en Chile no es consumida como alimento humano."
                    },
                ]
            }
        },
    ]
})

