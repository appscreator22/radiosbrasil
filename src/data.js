import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"CBN Campinas ao vivo",
            artist: "CBN Campinas",
            cover: "https://img.freepik.com/foto-gratis/manana-alta-vista-transmision-radio-aire-cafe_23-2148695269.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://sc4s.cdn.upx.com:8030/stream",
            active: true,
        },
        {
            name:"Radio Motel ao vivo",
            artist: "Radio Motel",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41311.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://usa11.fastcast4u.com/proxy/radiomotel?mp=%2Fstream3",
            active: false,
        },
        {
            name:"Top FM 104.1 ao vivo",
            artist: "Top FM 104.1",
            cover: "https://img.freepik.com/vector-gratis/realista-senales-aire_52683-52774.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://centova.svdns.com.br:20019/stream",
            active: false,
        },
        {
            name:"Rádio Disney ao vivo",
            artist: "Rádio Disney",
            cover: "https://img.freepik.com/vector-gratis/plantilla-marco-neon-aire_23-2148786064.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://26733.live.streamtheworld.com/DISNEY_BRA_SP_SC?dist=web-radiodisney-disneylatino",
            active: false,
        },
        {
            name:"Geração Sertanejo Universitário ao vivo",
            artist: "Geração Sertanejo Universitário",
            cover: "https://img.freepik.com/vector-gratis/juego-auriculares-inalambricos-blancos_1284-71984.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://servidor.geracaoradios.com/listen/sertanejouniversitario/stream",
            active: false,
        },
        {
            name:"Jovem POP FM",
            artist: "Jovem POP FM",
            cover: "https://img.freepik.com/psd-gratis/ilustracion-3d-trazado-recorte-microfono-color-militar_1419-2308.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://stream.radiojovempop.com/top40/stream_external",
            active: false,
        },
        {
            name:"Radio Rfm",
            artist: "Radio Rfm",
            cover: "https://img.freepik.com/vector-gratis/aire_23-2147512250.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://25653.live.streamtheworld.com/RFM_SC",
            active: false,
        },
        {
            name:"Radio santiago",
            artist: "Radio santiago",
            cover: "https://img.freepik.com/foto-gratis/retro-microfono-ordenador-portatil-webcast-vivo-sobre-concepto-aire_1387-438.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://eu6.fastcast4u.com/proxy/dzuigafo?mp=/stream",
            active: false,
       
        },
    ];
}

export default chillHop;


