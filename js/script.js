$(document).ready(function() {
  $('#add-new').click(function() {
    $('#investments tr:last').after(getRowScope())
  })
});

function getRowScope() {
  return `
  <tr>
    <td>
      <input class="form-control" type="date">
      </td>
      <td class="form-group">
        <select class="form-control">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </td>
      <td>
        <input class="form-control" type="text">
        </td>
      </tr>
  `;
}
