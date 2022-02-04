export const getters = {
    getAlgaByType: (state) => (type) => {
        return state.algas.filter(alga =>{ return alga.type == type })
    },
    getAlgaByPath: (state) => (path) => {
        return state.algas.filter(alga =>{ return alga.path == path })
    }
}

export const state = () => ({
    algas: [
        {
            nombres: ["Carola"],
            especie: "Callophyllis variegata",
            thumbPath: "/thumbs/carola.png",
            type: "roja",
            abreviatura: "",
            path: "carola"
        },
        {
            nombres: ["Chicoria de mar", "Yuyo"],
            especie: "Chondracanthus chamissoi",
            thumbPath: "/thumbs/chicorea.png",
            type: "roja",
            abreviatura: "",
            path: "chicoria-de-mar"
        },
        {
            nombres: ["Luche"],
            especie: "Pyropia",
            thumbPath: "/thumbs/luche.png",
            type: "roja",
            abreviatura: "spp",
            path: "luche"
        },
        {
            nombres: ["Luga negra", "Luga lija", "Luga crespa"],
            especie: "Sarcothalia crispata",
            thumbPath: "/thumbs/luga.png",
            type: "roja",
            abreviatura: "",
            path: "luga-negra"
        },
        {
            nombres: ["Pelillo"],
            especie: "Agarophyton chilense",
            thumbPath: "/thumbs/pelillo.png",
            type: "roja",
            abreviatura: "",
            path: "pelillo"
        },
        {
            nombres: ["Lechuga de mar", "Lamilla"],
            especie: "Ulva",
            thumbPath: "/thumbs/ulva.png",
            type: "verde",
            abreviatura: "spp",
            path: "lechuga-de-mar"
        },
        {
            nombres: ["Chascón", "Huiro negro"],
            especie: "Lessonia berteroana",
            thumbPath: "/thumbs/huiro_negro.png",
            type: "parda",
            abreviatura: "",
            path: "huiro-negro"
        },
        {
            nombres: ["Huiro flotador", "Canutillo", "Huiro"],
            especie: "Macrocystis pyrifera",
            thumbPath: "/thumbs/huiro_flotador.png",
            type: "parda",
            abreviatura: "",
            path: "huiro-floatador"
        },
        {
            nombres: ["Cochayuyo", "Coyofe"],
            especie: "Durvillaea incurvata",
            thumbPath: "/thumbs/cochayuyo.png",
            type: "parda",
            abreviatura: "",
            path: "cochayuyo"
        },
        {
            nombres: ["Huiro palo"],
            especie: "Lessonia trabeculata",
            thumbPath: "/thumbs/huiro_palo.png",
            type: "parda",
            abreviatura: "",
            path: "huiro-palo"
        },
    ]
})

