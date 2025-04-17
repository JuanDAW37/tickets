const crear = document.getElementById('crear')
    borrar = document.getElementById('baja')
    imprimir = document.getElementById('imprimir')

crear.onclick = () => {
    let num = document.getElementById('numero');
    console.log(num);
    const data = {
        numero:document.getElementById('numero')
    }
}

//Para imprimir
fetch("http://localhost:1234/tickets")
.then(res => res.json())
.then(tickets => {
    const html = tickets.map(ticket => {
        return `
        <article data-id="${ticket.id}">                        
            <h2>Ticket nº: ${ticket.numero}</h2>
            <p>Fecha: ${ticket.fecha}</p>                        
            <p>Descripcion: ${ticket.descripcion}</p> 
            <p>Base: ${ticket.base}</p> 
            <p>Iva: ${ticket.iva}</p> 
            <p>Cuota: ${ticket.cuota}</p> 
            <p>Total: ${ticket.total}</p> 
            <button>Eliminar</button>
        </article>`
    }).join('')                
    //document.querySelector('main').innerHTML=html

    document.addEventListener("click", e => {
    if(e.target.matches('button')) {
        const article = e.target.closest('article')
        const id = article.dataset.id

        fetch(`http://localhost:1234/tickets/${id}`, {
            method: 'DELETE'
        })                    
            .then(response => {
                if(response.ok){
                    article.remove()
                }                        
            })
    }
})
})