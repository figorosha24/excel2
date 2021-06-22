import {ExcelComponent} from '@core/ExcelComponent'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return '<div class="row">\n' +
        '                <div class="row-info">\n' +
        '\n' +
        '                </div>\n' +
        '                <div class="row-data">\n' +
        '                    <div class="column">\n' +
        '                        A\n' +
        '                    </div>\n' +
        '                    <div class="column">\n' +
        '                        B\n' +
        '                    </div>\n' +
        '                    <div class="column">\n' +
        '                        C\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="row">\n' +
        '                <div class="row-info">\n' +
        '                    1\n' +
        '                </div>\n' +
        '                <div class="row-data">\n' +
        '                    <div class="cell selected" contenteditable>A1</div>\n' +
        '                    <div class="cell" contenteditable>B1</div>\n' +
        '                    <div class="cell" contenteditable>C1</div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row">\n' +
        '                <div class="row-info">\n' +
        '                    2\n' +
        '                </div>\n' +
        '                <div class="row-data">\n' +
        '                    <div class="cell selected" contenteditable>A2</div>\n' +
        '                    <div class="cell" contenteditable>B2</div>\n' +
        '                    <div class="cell" contenteditable>C3</div>\n' +
        '                </div>\n' +
        '            </div>'
  }
}
