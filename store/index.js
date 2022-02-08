export const getters = {
    getAlgaByType: (state) => (type) => {
        return state.algas.filter(alga => { return alga.ficha.type == type })
    },
    /** Returns a single alga, instead of a list */
    getAlgaByPath: (state) => (path) => {
        return state.algas.filter(alga => { return alga.path == path })[0]
    }
}

export const state = () => ({
    algas: [
        {
            id: 1,
            thumb: "/thumbs/carola.png",
            path: "carola",
            ficha: {
                nombres: ["Carola"],
                especie: "Callophyllis variegata",
                type: "roja",
                abreviatura: "",
            }
        },
        {
            id: 2,
            thumb: "/thumbs/chicorea.png",
            path: "chicoria-de-mar",
            ficha: {
                nombres: ["Chicoria de mar", "Yuyo"],
                especie: "Chondracanthus chamissoi",
                type: "roja",
                abreviatura: "",
            }
        },
        {
            id: 3,

            thumb: "/thumbs/luche.png",
            path: "luche",
            ficha: {
                nombres: ["Luche"],
                especie: "Pyropia",
                type: "roja",
                abreviatura: "spp",
            }
        },
        {
            id: 4,

            thumb: "/thumbs/luga.png",
            path: "luga-negra",
            ficha: {
                nombres: ["Luga negra", "Luga lija", "Luga crespa"],
                especie: "Sarcothalia crispata",
                type: "roja",
                abreviatura: "",
            }
        },
        {
            id: 5,
            thumb: "/thumbs/pelillo.png",
            path: "pelillo",
            ficha: {
                nombres: ["Pelillo"],
                especie: "Agarophyton chilense",
                type: "roja",
                abreviatura: "",
            }
        },
        {
            id: 6,
            thumb: "/thumbs/ulva.png",
            path: "lechuga-de-mar",
            ficha: {
                nombres: ["Lechuga de mar", "Lamilla"],
                especie: "Ulva",
                type: "verde",
                abreviatura: "spp",
            }
        },
        {
            id: 7,
            model: "/models/carola/carola.glb",
            thumb: "/thumbs/huiro_negro.png",
            path: "huiro-negro",
            ficha: {
                type: "parda",
                abreviatura: "",
                nombres: ["Chascón", "Huiro negro"],
                especie: "Lessonia berteroana",
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
            thumb: "/thumbs/huiro_flotador.png",
            path: "huiro-floatador",
            ficha: {
                nombres: ["Huiro flotador", "Canutillo", "Huiro"],
                especie: "Macrocystis pyrifera",
                type: "parda",
                abreviatura: "",
            }
        },
        {
            id: 9,
            thumb: "/thumbs/cochayuyo.png",
            path: "cochayuyo",
            ficha: {
                nombres: ["Cochayuyo", "Coyofe"],
                especie: "Durvillaea incurvata",
                type: "parda",
                abreviatura: "",
            }
        },
        {
            id: 10,
            thumb: "/thumbs/huiro_palo.png",
            path: "huiro-palo",
            ficha: {
                nombres: ["Huiro palo"],
                especie: "Lessonia trabeculata",
                type: "parda",
                abreviatura: "",
            }
        },
    ]
})

