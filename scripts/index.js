$(document).on('change','#is_futbol',function(){
    let checkbox = $(this);
    let is_footbal = checkbox.prop('checked');
    $('.hidden').removeClass('hidden');
    if( is_footbal ){
        $('.is_basketball').addClass('hidden');
    }else{
        $('.is_futbol').addClass('hidden');
    }
});

const getData = () =>{
    return {
        'nombre': $('#nombre').val(),
        'victorias': $('#victories').val(),
        'derrotas': $('#derrotas').val(),
        'is_footbal': $('#is_futbol').prop('checked'),
        'perdidas_balon': $('#perdidas_balon').val(),
        'rebotes_recuperados': $('#rebotes_recuperados').val(),
        'nombre_anotador_triples': $('#nombre_anotador_triples').val(),
        'triples_cant_anotador': $('#triples_cant_anotador').val(),
        'empates': $('#empates').val(),
        'goles_fav': $('#goles_fav').val(),
        'goles_contra': $('#goles_contra').val(),
        'nombre_boleador': $('#nombre_boleador').val(),
        'goles_goleador': $('#goles_goleador').val()
    }
}

const textHtmlBasketball = (data) => {
    let html = `<tr>
    <td>${data.nombre}</td>
    <td>${data.victorias}</td>
    <td>${data.derrotas}</td>
    <td>${data.perdidas_balon}</td>
    <td>${data.rebotes_recuperados}</td>
    <td>${data.nombre_anotador_triples}</td>
    <td>${data.triples_cant_anotador}</td>
    </tr>`;
    return html;
}

const textHtmlFutbol = (data) => {
    let html = `<tr>
    <td>${data.nombre}</td>
    <td>${data.victorias}</td>
    <td>${data.derrotas}</td>
    <td>${data.empates}</td>
    <td>${data.goles_fav}</td>
    <td>${data.goles_contra}</td>
    <td>${data.nombre_boleador}</td>
    <td>${data.goles_goleador}</td>
    </tr>`;
    return html;
}

$(document).on('click','#add_marcador',function(){
    let data = getData();
    console.log(data);
    if(data.is_footbal){
        let htmlStr = textHtmlFutbol(data);
        $('#score_futbol').append(htmlStr);
    }else{
        let htmlStr = textHtmlBasketball(data);
        $('#score_basketball').append(htmlStr);
    }
});