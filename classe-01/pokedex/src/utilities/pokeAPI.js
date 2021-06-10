export default async function getPokemon(input) {
  console.log('Requisição na API.')
    input && input.toLowerCase();
    try {
        const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${input || 'pikachu'}`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });

        const { name, sprites: { other: { dream_world: { front_default } } }, abilities } = await response.json();
        
        const currentPokemon = {
          name,
          abilities,
          image: front_default
        };

        return currentPokemon;
    } catch (error) {
       throw error;
    };
};