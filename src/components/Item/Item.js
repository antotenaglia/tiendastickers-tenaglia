const Item = ({tipo, marca, precio, imagen}) => {
    
    const rutaInicial = '../images/';

    return (
        <div className="Item-card">    
            <img src={rutaInicial + imagen} alt={tipo} width= '150px' height='200px'/>
            <h2>Sticker {tipo}</h2>
            <h2 className="Item-marca">{marca}</h2>
            <h3>Precio: ${precio}</h3>
            <button className="Item-buttonVerMas">Ver más</button>
        </div>
    );
};

export default Item;