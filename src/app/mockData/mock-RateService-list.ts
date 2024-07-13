import { RateServ } from "./rate-serv";

export const RATESERV: RateServ [] = [

  new RateServ(
    // 1,
     "  Juste moi ",
     130,
     "Séance pour une personne, en extérieur ou en studio",
     "../../../assets/serviceRates/justeMoi1.jpg",
   ),
   new RateServ(
    // 2,
     "  Pour deux  ",
     195,
     "Pour deux personnes, en extérieur ou en studio",
     "../../../assets/serviceRates/toiEtMoi.jpg",
   ),
   new RateServ(
    // 3,
     "  Famille  ",
     130,
     "Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)",
     "../../../assets/serviceRates/familleSR.jpg",
   ),
   new RateServ(
    // 4,
     "  Il était une fois  ",
     130,
     "Photo de grossesse (À votre domicile, en extérieur ou en studio)",
     "../../../assets/serviceRates/iletaitUneFois.jpg",
   ),
   new RateServ(
    // 5,
     "  Mon bébé  ",
     100,
     "Photo d’enfant jusqu’à 3 ans (photo à domicile)",
     "../../../assets/serviceRates/monBebe1.jpg",
   ),
   new RateServ(
    // 6,
     "  J’immortalise l’événement sur mesure ",
     0.00,
     "Prestation de mariage ou baptême sur devis",
     "../../../assets/serviceRates/evenement1.jpg",
   )
];
