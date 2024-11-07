// json2html.js

export default function json2html(data) {
    const columns = ["Name", "Age", "Gender"];
    let html = `<table data-user="pavankumarr768@gmail.com">`;
    html += "<thead><tr>";
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += "</tr></thead><tbody>";
    data.forEach(row => {
      html += "<tr>";
      columns.forEach(column => {
        html += `<td>${row[column] || ""}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
    return html;
  }
  