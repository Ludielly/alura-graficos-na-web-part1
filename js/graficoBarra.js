function desenhaBarra(){
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addColumn({type:'string', role:'annotation'});
    tabela.addColumn({type:'string', role:'style'});
    tabela.addRows([
      ['Educação', 2000, 'R$2000,00', 'blue'],
      ['Transporte', 500, 'R$500,00', 'darkred'],
      ['Lazer', 230, 'R$230,00', 'darkyellow'],
      ['Saúde', 50, 'R$50,00', 'orange'],
      ['Cartão de crédito', 900, 'R$900,00', 'darkgreen'],
      ['Alimentação', 260, 'R$260,00', 'purple']
    ]);

    tabela.sort([{column: 1, desc: true}])

    var opcoes = {
      title: 'Tipos de Gastos',
      heigth: 500,
      width: 650,
      vAxis: {gridlines: {count:0, color: 'transparent'}},
      legend: 'none',
      hAxis: {gridlines: {color: 'transparent'}, format:'currency', textPosition: 'none'},
      annotations: {alwaysOutside: true}
    }

    var grafico = new google.visualization.BarChart(document.getElementById('grafico-barra'));
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenhaBarra);