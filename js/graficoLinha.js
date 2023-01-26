function desenhaLinha(){
    tabela = new google.visualization.DataTable();
    tabela.addColumn('string','Mês');
    tabela.addColumn('number','Gastos');
    tabela.addRows([
        ['jan',800],
        ['fev',400],
        ['mar',1100],
        ['abr',400],
        ['mai',500],
        ['jun',750],
        ['jul',1500],
        ['ago',650],
        ['set',850],
        ['out',400],
        ['nov',1000],
        ['dez',720]
    ]);

    var opcoes = {
        title: 'Gastos por mês',
        heigth: 450,
        width: 650,
        vAxis: {format: 'currency', gridlines: {count:4, color: 'transparent'}},
        curveType: 'function',  //muda o tipo de curva da linha
        legend: 'none'
    }
    
    var grafico = new google.visualization.LineChart(document.getElementById('grafico-linha'));
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenhaLinha);
