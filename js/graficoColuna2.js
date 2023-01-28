function desenhaColuna2(){
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addRows([
      ['Educação',2000],
      ['Transporte',500],
      ['Lazer',230],
      ['Saúde',50],
      ['Cartão de crédito',900],
      ['Alimentação',260]
    ]);

    var grafico = new google.visualization.ColumnChart(document.getElementById('grafico-coluna2'));
    grafico.draw(tabela);
}

google.charts.setOnLoadCallback(desenhaColuna2);
