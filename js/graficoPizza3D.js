google.charts.load('current', {packages: ['corechart']});

function desenhaPizza3D(){
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
    'title': 'Tipos de Gastos (Editado)',
    'heigth': 450,
    'width': 450,
    'is3D': true,  //transforma o gráfico em 3D
    'legend': 'labeled',
    'pieSliceText': 'value',  //muda o que está sendo exibido em cada parte do gráfico
    //'colors': ['red', 'grey'...],  //muda as cores, de acordo com a ordem dos itens da tabela
    'slices': {
        0:{offset: .1}, //offset deixa a parte separada do resto do gráfico
        1:{offset:.1, color:'darkred'},
        3:{color:'grey'}, 
        4:{offset:.1},
        5:{color: 'green'}}
};

  var grafico = new google.visualization.PieChart(document.getElementById('grafico-pizza-3d'));
  grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenhaPizza3D);
