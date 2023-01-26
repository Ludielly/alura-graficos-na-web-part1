function desenhaPizza(){
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
  
  var opcoes = {
    'title': 'Tipos de Gastos',
    'heigth': 450,
    'width': 450,
  };

  var grafico = new google.visualization.PieChart(document.getElementById('grafico-pizza'));
  grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenhaPizza);
