// Un array di citazioni che verrà utilizzato dalla nostra API
const quotes = [
    { text: "La vita è ciò che ti accade mentre fai altri progetti.", author: "John Lennon" },
    { text: "L'unica cosa di cui dobbiamo avere paura è la paura stessa.", author: "Franklin D. Roosevelt" },
    { text: "Non importa quanto vai piano, l'importante è non fermarsi.", author: "Confucio" },
    { text: "La creatività è l'intelligenza che si diverte.", author: "Albert Einstein" },
    { text: "Diventa il cambiamento che vuoi vedere nel mondo.", author: "Mahatma Gandhi" },
    { text: "Chi non osa nulla, non speri in nulla.", author: "Friedrich Schiller" },
    { text: "Non si è mai troppo vecchi per fissare un nuovo obiettivo o per sognare un nuovo sogno.", author: "C.S. Lewis" },
    { text: "La semplicità è la massima sofisticazione.", author: "Leonardo da Vinci" }
  ];
  
  // Con App Router, esportiamo funzioni HTTP specifiche (GET, POST, ecc.)
  export async function GET() {
    // Seleziona una citazione casuale dall'array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Simulazione di un ritardo di rete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Nel nuovo App Router, restituiamo direttamente un oggetto Response
    return Response.json(randomQuote, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
  
  // Gestiamo anche le richieste OPTIONS per CORS
  export async function OPTIONS() {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }