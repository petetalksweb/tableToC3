function generateChart(tableId, chartDivId, chartType) {
    var table = document.getElementById(tableId);
    var c3Columns = [];
    var categories = [];
    for(let rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
        for(let colIndex = 0; colIndex < table.rows[rowIndex].cells.length; colIndex++) {
            if(rowIndex > 0 && colIndex == 0) {
                categories.push(table.rows[rowIndex].cells[colIndex].innerHTML);
            } else if (colIndex > 0) {
                if(c3Columns.length < colIndex) {
                    c3Columns.push([]);
                }
                c3Columns[colIndex - 1].push(table.rows[rowIndex].cells[colIndex].innerHTML);
            }
        }
    }
    var chart = c3.generate({
        bindto: '#' + chartDivId,
        data: {
            columns: c3Columns,
            type: chartType
        },
        axis: {
            x: {
                type: 'category',
                categories: categories
            }
        }
    });
    return chart;
}