function desenhaBarraJSON(){
    var  dadosJson = $.ajax({
        url:'../dados.json',
        dataType: 'json',
        async: false
    }).responseText;

    var tabela = new google.visualization.DataTable(dadosJson);

    tabela.sort([{column: 1, desc: true}])

    var grafico = new google.visualization.BarChart(document.getElementById('grafico-barras-JSON'));

    var opcoes = {
        title: 'Usuários e Poupanças',
        height: 400,
        width: 1000,
        legend: 'none',
        hAxis: { gridlines: {color: 'transparent'}, textPosition: 'none'},
        annotations: {alwaysOutside: true}
    }
    
    
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenhaBarraJSON);
