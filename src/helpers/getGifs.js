


    export const getGif = async ( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=3&api_key=7lSkwUiyElTu9iZqP4clFmXsEdM9qnbQ`
        const respuesta = await fetch( url );
        const { data } = await respuesta.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url
            }
        });
        return gifs;
    }