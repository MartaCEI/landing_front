// const URL = import.meta.env.VITE_API_URL;
const URLSTATIC = import.meta.env.VITE_STATIC_URL

export const Hero = ({ img, icono, color, btnCallAction, titulo, contenido }) => {
    return (
        <section className="Section" style={{ backgroundColor: color }}>
            <div className="Section-container">
                <div className="Section-right">
                    <img className="Section-hero-icon" src={`${URLSTATIC}/img/${icono}`} alt="icono" />
                    <h1 className="Section-h1">{titulo}</h1>
                    <p className="Section-p">{contenido}</p>
                    <img className="Section-img-app" src={`${URLSTATIC}/img/${btnCallAction.img}`} alt="btnCallAction" />
                </div>
                <div className="Section-left">
                    <img className="Section-img" src={`${URLSTATIC}/img/${img}`} alt="hero" />
                </div>
            </div>
        </section>
    );
}




// export const Hero = ({img, icono, color, btnCallAction, titulo, contenido}) => {
//     return (
//         <section className="Section-hero" style={{ backgroundColor: color }}>
//             <div className="Section-flex">
//                 <img src={`${URLSTATIC}/svg/${icono}`} alt="icono" />
//                 <h1>{titulo}</h1>
//                 <p>{contenido}</p>
//                 <img src={btnCallAction.img} alt="btnCallAction" />
//             </div>
//             <div>
//                 <img src={`${URLSTATIC}/img/${img}`} alt="hero" />
//             </div>
//         </section>
//     );
// }