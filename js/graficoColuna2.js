function desenhaColuna2(){
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addColumn({type:'number', role:'annotation'});
    tabela.addColumn({type:'string', role:'style'});
    tabela.addRows([
      ['Educação', 2000, 2000, 'blue'],
      ['Transporte', 500, 500, 'darkred'],
      ['Lazer', 230, 230, 'darkyellow'],
      ['Saúde', 50, 50, 'orange'],
      ['Cartão de crédito', 900, 900, 'darkgreen'],
      ['Alimentação', 260, 260, 'purple']
    ]);

    var opcoes = {
      title: 'Tipos de Gastos',
      heigth: 500,
      width: 650,
      vAxis: {gridlines: {count:0, color: 'transparent'}},
      legend: 'none'
    }

    var grafico = new google.visualization.ColumnChart(document.getElementById('grafico-coluna2'));
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenhaColuna2);
